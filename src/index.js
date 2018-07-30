import React from 'react';
import ReactDOM from 'react-dom';
import Root from 'Root';
import App from 'components/App/App.jsx';

import './index.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Root>
        <App />
    </Root>
    , document.getElementById('root')
);

registerServiceWorker();
