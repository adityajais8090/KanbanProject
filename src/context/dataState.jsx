import React, { useState, useEffect } from 'react';
import DataContext from './dataContext';
import { allData } from '../api/data';

const DataState = ({ children }) => {
    const [tickets, setTickets] = useState([]);
    const [users, setUsers] = useState([]);
    const [displayState, setDisplayState] = useState(localStorage.getItem("displayState") || "grouping-status");
    const [sortOrder, setSortOrder] = useState(localStorage.getItem("sortOrder") || "ordering-priority");

    const priorityLabels = {
        4: 'Urgent',
        3: 'High',
        2: 'Medium',
        1: 'Low',
        0: 'No priority'
    };

    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        localStorage.setItem("displayState", displayState);
        localStorage.setItem("sortOrder", sortOrder);
    }, [displayState, sortOrder]);

    const fetchData = async () => {
        try {
            const { tickets, users } = await allData();
            setTickets(tickets);
            setUsers(users);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    const groupTickets = () => {
        // Replace userId with name in each ticket and map priority to labels
        const enhancedTickets = tickets.map(ticket => ({
            ...ticket,
            userName: getUserName(ticket.userId),
            priorityLabel: priorityLabels[ticket.priority]
        }));
        
        switch (displayState) {
            case "grouping-status":
                return groupBy(enhancedTickets, 'status');
            case "grouping-user":
                return groupBy(enhancedTickets, 'userName');
            case "grouping-priority":
                return groupBy(enhancedTickets, 'priorityLabel');
            default:
                return [];
        }
    };

    const sortTickets = (tickets) => {
        return [...tickets].sort((a, b) => {
            if (sortOrder === "ordering-priority") {
                return b.priority - a.priority;
            } else if (sortOrder === "ordering-title") {
                return a.title.localeCompare(b.title);
            }
            return 0;
        });
    };

    const groupBy = (data, key) => {
        return data.reduce((result, item) => {
            const groupKey = item[key];
            if (!result[groupKey]) result[groupKey] = [];
            result[groupKey].push(item);
            return result;
        }, {});
    };

    const getUserName = (userId) => {
        const user = users.find(user => user.id === userId);
        return user ? user.name : "Unknown User";
    };

    return (
        <DataContext.Provider value={{ tickets: groupTickets(), users, setDisplayState, setSortOrder, sortTickets }}>
            {children}
        </DataContext.Provider>
    );
};

export default DataState;