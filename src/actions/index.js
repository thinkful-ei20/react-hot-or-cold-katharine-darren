export const MAKE_GUESS = 'MAKE_GUESS';

export const RESTART_GAME = 'RESTART_GAME';

export const UPDATE_CURRENT_GUESS = 'UPDATE_CURRENT_GUESS';



export const makeGuess = () => ({
  type: MAKE_GUESS,    
});

export const restartGame = () => ({
  type: RESTART_GAME    
});

export const updateCurrentGuess = (currentGuess) => ({
  type: UPDATE_CURRENT_GUESS,
  currentGuess
});