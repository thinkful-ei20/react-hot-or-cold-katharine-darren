import React from 'react';

import './guess-form.css';

import { connect } from 'react-redux';

import { makeGuess, updateCurrentGuess } from '../actions';

export class GuessForm extends React.Component {

  onSubmit(event) {
    event.preventDefault();
    this.props.dispatch(makeGuess()) 
    // console.log('the state: ', this.props.state)
 
  }

  handleChange(event){
    this.props.dispatch(updateCurrentGuess(event.target.value))
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
          placeholder='Enter a number!'
          required
          value={this.props.currentGuess}
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
  currentGuess: state.currentGuess,
  state: state
})

export default connect(mapStateToProps)(GuessForm);

