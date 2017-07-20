/**
 * Created by areshytko on 17.07.17.
 */

import React, { Component } from 'react';
import request from 'superagent';

import Model from '../model';
import XmlContent from './XmlContent';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            doc: null,
            highlightNode: null,
            wordNumber: null
        }
    }

    componentDidMount(){
        /*
        Load page to visualize from Node.js server
        Set time interval to increment word
         */
        console.log("started");
        request.get("/doc")
            .then((res) => {
                console.log('got response', res.body);
                this.model = new Model(res.body.doc);
                window.doc = res.body.doc;
                this.setState({ doc: this.model.getViewModel() });

                this.interval = setInterval(() => {
                    this.model.incrementWordPointer();
                    this.setState({
                        doc: this.model.getViewModel(),
                        highlightNode: this.model.node,
                        wordNumber: this.model.wordNumber});
                }, 3000)

            })
            .catch((err) => {console.log(err)});
    }

    componentWillUnmount(){
        clearInterval(this.interval);
    }

    render() {
        return (
            <div>
                {this.state.doc ?
                    <XmlContent xmlDoc={this.state.doc} highlightNode={this.state.highlightNode} wordNumber={this.state.wordNumber}/> :
                    "Loading page from heroku..."}
            </div>
        )
    }
};

export default App;
