import React from 'react';
import ReactDOM from 'react-dom';
import Root from './Root';
import './styles/main.scss';
import registerServiceWorker from './registerServiceWorker';

require('dotenv').config();

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();