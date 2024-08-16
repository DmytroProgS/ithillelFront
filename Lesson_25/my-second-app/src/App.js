import React, { Component } from 'react';
import './App.css';

import Titles from "./components/Titles";
import Smileys from "./components/Smileys";
import ButtonResult from "./components/ButtonResult";
import WinnerResult from "./components/WinnerResult";
import ClearResult from "./components/ClearResult";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      votes: [0, 0, 0, 0, 0],
      winnerIndex: null,
      resultsShown: false, 
    };
  }

  handleVote = (index) => {
    const newVotes = [...this.state.votes];
    newVotes[index] += 1;
    this.setState({ votes: newVotes });
  };

  showResults = () => {
    const maxVotes = Math.max(...this.state.votes);
    const winner = this.state.votes.indexOf(maxVotes);
    this.setState({
      winnerIndex: winner,
      resultsShown: true,
    });
  };

  clearVotes = () => {
    this.setState({
      votes: [0, 0, 0, 0, 0],
      winnerIndex: null,
      resultsShown: false, 
    });
  };

  render() {
    return (
      <div className="App">
        <Titles text='Голосування за найкращий смайлик' />
        <Smileys votes={this.state.votes} onVote={this.handleVote} />
        <ButtonResult showResults={this.showResults} />
        
       
        {this.state.resultsShown && <Titles text='Результати голосування:' />}
        
        <WinnerResult
          winnerIndex={this.state.winnerIndex}
          votes={this.state.votes}
          resultsShown={this.state.resultsShown}
        />
        <ClearResult clearVotes={this.clearVotes} />
      </div>
    );
  }
}

export default App;
