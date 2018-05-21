import React from 'react';

import './guess-form.css';

import { connect } from 'react-redux';

import { makeGuess } from '../actions';

export class GuessForm extends React.Component {

  onSubmit(event) {
    event.preventDefault();

    this.props.dispatch(makeGuess(event))
    console.log(event.target.value);
    
    // if (this.props.onMakeGuess) {
    //   const value = this.input.value;
    //   this.props.onMakeGuess(value);
    // }
    // this.input.value = '';
    // this.input.focus();
  }

  handleChange(event){
    
  }

  render() {
    return (
      <form onSubmit={e => this.onSubmit(e)}>
        <input
          type="number"
          name="userGuess"
          id="userGuess"
          className="text"
          min="1"
          max="100"
          autoComplete="off"
          aria-labelledby="feedback"          
          required
          value={this.props.guess}
          onChange={(e) => this.handleChange(e) }
        />
        <button 
          type="submit"
          name="submit"
          id="guessButton" 
          className="button"          
        >
          Guess
        </button>
      </form>
    );
  }
}

const mapStateToProps = state => ({
  // onMakeGuess: guess => props.onMakeGuess(guess)
  guess: state.guesses[state.guesses.length - 1]
})

export default connect(mapStateToProps)(GuessForm);

