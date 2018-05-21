import React from 'react';

import Feedback from './feedback';
import GuessForm from './guess-form';

import { connect } from 'react-redux';
// import store from '../store';

export function GuessSection(props) {
  const { feedback, guessCount } = props;
  return (
    <section aria-label="Guess section" aria-describedby="feedback">
      <Feedback feedback={feedback} guessCount={guessCount} />
      <GuessForm />
    </section>
  );
}

const mapStateToProps = state => ({
  feedback: state.feedback,
  guessCount: state.guessCount,
  // onMakeGuess: guess => this.makeGuess(guess),
})

export default connect(mapStateToProps)(GuessSection);

