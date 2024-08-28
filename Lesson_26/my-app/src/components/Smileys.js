import React from 'react';
import '../styles/Smileys.css';
import smileyImages from '../components/SmileyImages'; 

const Smileys = ({ smileys, onVote }) => {
  return (
    <div className="smiley-container">
      {smileys.map((smiley) => (
        <div key={smiley.id}>
          <img
            src={smileyImages[smiley.id - 1]}
            onClick={() => onVote(smiley.id)}
            alt={`smiley-${smiley.id}`}
          />
          <div>{smiley.votes}</div>
        </div>
      ))}
    </div>
  );
};

export default Smileys;
