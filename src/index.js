import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from 'reducers';

import './index.css';
import App from 'components/App/App.jsx';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Provider store={ createStore(reducers, {}) }>
        <App />
    </Provider>
    , document.getElementById('root')
);

registerServiceWorker();
