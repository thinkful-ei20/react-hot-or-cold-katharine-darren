import { createStore } from 'redux';

import { mainReducer } from './reducers';

// export default createStore(mainReducer);
const store = createStore(mainReducer);


export default store;