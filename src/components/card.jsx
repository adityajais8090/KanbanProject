// components/Card.js
import React from "react";
import TagSection from "./Tagsection";

import '../styles/card.css';

const Card = ({ cardId, cardTitle, tag, profileImg }) => {
  return (
    <div className="card">
      <div className="card-header">
        <div className="card-id">{cardId}</div>
        <div className="profile-image">
          <img src={profileImg} alt="Profile" />
        </div>
      </div>
      <div className="card-title">{cardTitle}</div>
      <TagSection tag={tag} />
    </div>
  );
};

export default Card;
