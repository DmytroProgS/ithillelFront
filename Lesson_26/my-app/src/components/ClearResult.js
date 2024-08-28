import React from 'react';
import '../styles/Buttons.css';

const ClearResult = ({ clearVotes }) => {
  return (
    <button className="button-style" onClick={clearVotes}>
      Clear Results
    </button>
  );
};

export default ClearResult;
