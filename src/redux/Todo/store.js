import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import reducer from './reducer';

const composedEnhancers = composeWithDevTools();

const store = createStore(reducer, composedEnhancers);

export default store;
