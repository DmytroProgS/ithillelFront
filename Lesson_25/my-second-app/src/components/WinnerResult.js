import React, { Component } from 'react';
import smiley1 from '../assets/images/smile-1.jpg';
import smiley2 from '../assets/images/smile-2.jpg';
import smiley3 from '../assets/images/smile-3.jpg';
import smiley4 from '../assets/images/smile-4.jpg';
import smiley5 from '../assets/images/smile-5.jpg';

const smileyImages = [smiley1, smiley2, smiley3, smiley4, smiley5];

class WinnerResult extends Component {
  render() {
    const { winnerIndex, votes, resultsShown } = this.props;

    const totalVotes = votes.reduce((total, current) => total + current, 0);

    if (resultsShown && totalVotes === 0) {
      return <p>Ніхто не голосував</p>;
    }

    if (resultsShown && winnerIndex !== null) {
      return (
        <div className="winner">
          <h3>Переможець:</h3>
          <img src={smileyImages[winnerIndex]} alt="winner" />
          <p>Кількість голосів: {votes[winnerIndex]}</p>
        </div>
      );
    }

    return null;
  }
}

export default WinnerResult;
