import React, { useState } from 'react';
import './App.css';

import Titles from "./components/Titles";
import Smileys from "./components/Smileys";
import ButtonResult from "./components/ButtonResult";
import WinnerResult from "./components/WinnerResult";
import ClearResult from "./components/ClearResult";

const App = () => {
  const [smileys, setSmileys] = useState(
    Array.from({ length: 5 }, (_, index) => ({
      id: index + 1,
      votes: 0,
    }))
  );
  const [winnerIndex, setWinnerIndex] = useState(null);
  const [resultsShown, setResultsShown] = useState(false);

  const handleVote = (id) => {
    setSmileys(smileys.map(smiley =>
      smiley.id === id ? { ...smiley, votes: smiley.votes + 1 } : smiley
    ));
  };

  const showResults = () => {
    const maxVotes = Math.max(...smileys.map(smiley => smiley.votes));
    const winnerIdx = smileys.findIndex(smiley => smiley.votes === maxVotes);
    setWinnerIndex(winnerIdx);
    setResultsShown(true);
  };

  const clearVotes = () => {
    setSmileys(smileys.map(smiley => ({ ...smiley, votes: 0 })));
    setWinnerIndex(null);
    setResultsShown(false);
  };

  return (
    <div className="App">
      <Titles text="Голосування за найкращий смайлик" />
      <Smileys smileys={smileys} onVote={handleVote} />
      <ButtonResult showResults={showResults} />
      
      {resultsShown && <Titles text="Результати голосування:" />}
      
      <WinnerResult
        smileys={smileys}
        winnerIndex={winnerIndex}
        resultsShown={resultsShown}
      />
      <ClearResult clearVotes={clearVotes} />
    </div>
  );
};

export default App;
