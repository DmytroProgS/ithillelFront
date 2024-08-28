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
      smileys: Array.from({ length: 5 }, (_, index) => ({
        id: index + 1,
        votes: 0,
      })),
      winnerIndex: null,
      resultsShown: false, 
    };
  }

  handleVote = (id) => {
    const smileys = this.state.smileys.map(smiley => 
      smiley.id === id ? { ...smiley, votes: smiley.votes + 1 } : smiley
    );
    this.setState({ smileys });
  };

  showResults = () => {
    const maxVotes = Math.max(...this.state.smileys.map(smiley => smiley.votes));
    const winnerIndex = this.state.smileys.findIndex(smiley => smiley.votes === maxVotes);
    this.setState({
      winnerIndex,
      resultsShown: true,
    });
  };

  clearVotes = () => {
    const smileys = this.state.smileys.map(smiley => ({ ...smiley, votes: 0 }));
    this.setState({
      smileys,
      winnerIndex: null,
      resultsShown: false, 
    });
  };

  render() {
    return (
      <div className="App">
        <Titles text="Голосування за найкращий смайлик" />
        <Smileys smileys={this.state.smileys} onVote={this.handleVote} />
        <ButtonResult showResults={this.showResults} />
        
        {this.state.resultsShown && <Titles text="Результати голосування:" />}
        
        <WinnerResult
          smileys={this.state.smileys}
          winnerIndex={this.state.winnerIndex}
          resultsShown={this.state.resultsShown}
        />
        <ClearResult clearVotes={this.clearVotes} />
      </div>
    );
  }
}

export default App;
