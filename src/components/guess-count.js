import React from 'react';

import './guess-count.css';

import { connect } from 'react-redux';

export function GuessCount(props) {
    const isPlural = props.guessCount !== 1;
    const guessNoun = isPlural ? 'guesses' : 'guess';

    return (
        <h2 id="guessCount">
            You've made <span id="count">{props.guesses}</span> {guessNoun}!
        </h2>
    );
}

const mapStateToProps = state => ({
    guesses: state.guesses.length
})

export default connect(mapStateToProps)(GuessCount);