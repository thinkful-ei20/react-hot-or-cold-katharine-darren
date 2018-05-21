export const MAKE_GUESS = 'MAKE_GUESS';

export const RESTART_GAME = 'RESTART_GAME';


export const makeGuess = (userGuess) => ({
  type: MAKE_GUESS,
  userGuess  
});

export const restartGame = () => ({
  type: RESTART_GAME    
});