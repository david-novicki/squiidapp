import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';

import Router from './router/index';

const App = () => (
    <Provider store={store}>
        <Router />
    </Provider>
)
export default App;