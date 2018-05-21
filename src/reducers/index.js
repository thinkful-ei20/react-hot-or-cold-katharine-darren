import { MAKE_GUESS, RESTART_GAME } from '../actions'

const initialState = {
  guesses: [],
  feedback: 'Make your guess!',
  auralStatus: '',
  // correctAnswer: Math.round(Math.random() * 100) + 1
  correctAnswer: 49
};

export const mainReducer = (state=initialState, action) => {

  if(action.type === MAKE_GUESS){
    const difference = Math.abs(action.userGuess - state.correctAnswer)

    if(typeof action.userGuess !== 'number'){
      return {...state, feedback: 'Please enter a valid number'};
    }

    let hintCheck = '';
    if (difference >= 50) {
      hintCheck = 'You\'re Ice Cold...';
    } else if (difference >= 30) {
      hintCheck = 'You\'re Cold...';
    } else if (difference >= 10) {
      hintCheck = 'You\'re Warm.';
    } else if (difference >= 1) {
      hintCheck = 'You\'re Hot!';
    } else {
      hintCheck ='CORRECT! You win, click "NEW GAME" to play again!';
    }

    // return Object.assign({},state, {
    //   guesses: [...state.guesses, action.userGuess],
    //   feedback: hintCheck
    // })

    return {
      ...state,
      guesses: [...state.guesses, action.userGuess],
      feedback: hintCheck
    }

  }

  if(action.type === RESTART_GAME){
    return Object.assign({},state, {
      guesses: [],
      feedback: 'Make your guess!',
      auralStatus: '',
      correctAnswer: Math.round(Math.random() * 100) + 1
     
    })
  }








return state;
}