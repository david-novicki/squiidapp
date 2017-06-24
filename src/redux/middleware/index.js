import reduxPromise from 'redux-promise';
import logger from 'redux-logger';
import thunk from './thunk';

const middleware = [
    reduxPromise, 
    logger, 
    thunk
];
export default middleware;