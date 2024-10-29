import React, { useState, useContext } from "react";

import DataContext from "../context/dataContext";
import "../styles/Navbar.css";
import displayIcon from "../assets/icons_FEtask/Display.svg";

const Navbar = () => {
    const { setDisplayState, setSortOrder } = useContext(DataContext);
    const [displayOnClick, setDisplayOnClick] = useState(false);
    const [groupValue, setGroupValue] = useState("status");
    const [orderValue, setOrderValue] = useState("priority");

    const handleGroupValue = (e, isGroup) => {
        const value = e.target.value;
        if (isGroup) {
            setGroupValue(value);
            setDisplayState(`grouping-${value}`);
        } else {
            setOrderValue(value);
            setSortOrder(`ordering-${value}`);
        }
        setDisplayOnClick(false); // Close the dropdown after selection
    };

    return (
        <div className="top-header" style={{paddingLeft : "10px"}}>
            <div className="displayButton">
                <button
                    className="p-10 f-16 btn"
                    onClick={() => setDisplayOnClick(!displayOnClick)}
                > 
                {" "}
                     <img src={displayIcon} alt="Display" className="icon" />
                     Display
                </button>
                {displayOnClick && (
                    <div className="dropOnClick">
                        <div className="selectGroup">
                            <span>Grouping</span>
                            <select
                                value={groupValue}
                                onChange={(e) => handleGroupValue(e, true)}
                                className="selectStyle"
                            >
                                <option value="status">Status</option>
                                <option value="user">User</option>
                                <option value="priority">Priority</option>
                            </select>
                        </div>
                        <div className="selectGroup">
                            <span>Ordering</span>
                            <select
                                value={orderValue}
                                onChange={(e) => handleGroupValue(e, false)}
                                className="selectStyle"
                            >
                                <option value="priority">Priority</option>
                                <option value="title">Title</option>
                            </select>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Navbar;
