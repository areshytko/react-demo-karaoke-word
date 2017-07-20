/**
 * Created by areshytko on 27.01.17.
 */

import { render } from 'react-dom';
import React from 'react';

import App from './components/App';


function initApp() {
    render((
        <App />
    ), document.getElementById('app'));
}


window.onload = initApp;
