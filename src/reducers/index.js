import { MAKE_GUESS, RESTART_GAME, UPDATE_CURRENT_GUESS } from '../actions'

const initialState = {
  guesses: [],
  feedback: 'Make your guess!',
  auralStatus: '',
  correctAnswer: Math.round(Math.random() * 100) + 1,
  // correctAnswer: 49,
  currentGuess: ''
};

export const mainReducer = (state=initialState, action) => {

  if(action.type === MAKE_GUESS){

    const difference = Math.abs(state.currentGuess - state.correctAnswer)

    if(typeof state.currentGuess !== 'number' || state.currentGuess < 1 || state.currentGuess > 100){
      return {...state, feedback: 'Please enter a valid number (1-100)'};
    }

    if(state.guesses.includes(state.currentGuess)){
      return {...state, feedback: 'Please enter a new number'};
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

    return Object.assign( {},
        state, 
        {guesses: [...state.guesses, state.currentGuess]},
        {feedback: hintCheck }) 
    

    }


  if(action.type === RESTART_GAME){
    return Object.assign({},state, {
      guesses: [],
      feedback: 'Make your guess!',
      auralStatus: '',
      correctAnswer: Math.round(Math.random() * 100) + 1,
      currentGuess: ''     
    })
  }

  if(action.type === UPDATE_CURRENT_GUESS){
    return {
      ...state,
      currentGuess: +action.currentGuess      
    }    
  }

return state;
}