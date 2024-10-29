import React, { useContext } from 'react';
import Navbar from '../components/Navbar';
import Column from '../components/column';
import DataContext from '../context/dataContext';
import '../styles/home.css';

   const renderColumns = () => {
       const { tickets, sortTickets } = useContext(DataContext);
        return Object.entries(tickets).map(([group, tickets]) => (
            <Column key={group} title={group} cardData={sortTickets(tickets)} />
        ));
    };
const Home = () => {
   
    return (<>
          <Navbar />
        <div className="board-wrapper">
            <div className="board-container">{renderColumns()}</div>
        </div>
        </>
    );
};

export default Home;
