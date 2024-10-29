import React from 'react';
import Card from './card';
import '../styles/column.css';
import DisplayIcon from '../assets/icons_FEtask/Display.svg';
import ThreeDotMenuIcon from '../assets/icons_FEtask/3 dot menu.svg';
import PlusIcon from '../assets/icons_FEtask/plus.svg'; // Assuming you have a "plus-icon.svg" in assets

export default function Column ({ title, cardData }){
    return (
        <div className="column">
            <div className="column-header">
                <h2 className="column-title">
                    <img src={DisplayIcon} alt="Display Icon" className="column-icon" />
                    {title}
                </h2>
                <div className="column-actions">
                    <img src={PlusIcon} alt="Add" className="plus-icon" />
                    <img src={ThreeDotMenuIcon} alt="Options" className="three-dot-menu" />
                </div>
            </div>
            <div className="card-container">
                {cardData.map(ticket => (
                    <Card key={ticket.id} cardId={ticket.id} cardTitle={ticket.title} tag={ticket.tag} />
                ))}
            </div>
        </div>
    );
};

