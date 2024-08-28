// src/components/WinnerResult.js
import React, { Component } from 'react';
import smileyImages from '../components/SmileyImages';

class WinnerResult extends Component {
  render() {
    const { smileys, winnerIndex, resultsShown } = this.props;

    if (resultsShown && winnerIndex === -1) {
      return <p>Ніхто не голосував</p>;
    }

    if (resultsShown && winnerIndex !== null) {
      const winner = smileys[winnerIndex];
      return (
        <div className="winner">
          <h3>Переможець:</h3>
          <img src={smileyImages[winner.id - 1]} alt="winner" /> 
          <p>Кількість голосів: {winner.votes}</p>
        </div>
      );
    }

    return null;
  }
}

export default WinnerResult;
