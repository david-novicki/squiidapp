import { createStore, applyMiddleware, compose } from 'redux';
import reducers from './reducers/index';
import middleware from './middleware/index';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, {}, composeEnhancers(
    applyMiddleware(...middleware)
));

export default store;