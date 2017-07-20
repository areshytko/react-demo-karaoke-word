/**
 * Created by areshytko on 27.01.17.
 */

import { render } from 'react-dom';
import React from 'react';

import App from './components/App';

/*
function getDocument() {
    console.log("started");
    request.get("/doc")
           .then((res) => {
               console.log('got response', res.body);
               window.doc = res.body.doc;
               render((
                   <App doc={res.body.doc} />
               ), document.getElementById('app'));
           })
        .catch((err) => {console.log(err)})
}
*/

function getDocument() {
    render((
        <App />
    ), document.getElementById('app'));
}


window.onload = getDocument;
