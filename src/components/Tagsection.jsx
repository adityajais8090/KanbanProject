// components/TagSection.js
import React from "react";
import '../styles/Tagsection.css';

const TagSection = ({ tag }) => {
  return (
    <div className="tag-section">
      <div className="icon">ℹ️</div>
      <div className="tag">{tag}</div>
    </div>
  );
};

export default TagSection;
