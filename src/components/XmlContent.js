/**
 * Created by areshytko on 19.07.17.
 */

import React, { Component } from 'react';
import _ from 'lodash';

import WordHighLight from './WordHighLight';


const XMLNodeToReactComponentMap = {

};

function processChildren (children, highlightNode, wordNumber) {
    return Array.from(children.length ? children : []).map(
        (node, i) => {

            //highlight if node is highlight node
            if (node === highlightNode) return <WordHighLight key={i} text={node.nodeValue} wordNumber={wordNumber}/>;

            // return if text node
            if (node.nodeType === 3) return node.nodeValue;

            // collect all attributes
            let attributes = Array.from(node.attributes).reduce((attrs, attr) => {
                let name = 'class' === attr.name ? 'className' : attr.name;
                attrs[name] = attr.value;
                return attrs;
            }, {});

            // create React component
            return React.createElement(_.get(XMLNodeToReactComponentMap, node.nodeName, node.nodeName), {
                ...attributes,
                key: i
            }, 0 < node.childNodes.length ? processChildren(node.childNodes, highlightNode, wordNumber) : null);
        });
}


const XmlContent = ({ xmlDoc, highlightNode, wordNumber }) => (
    <div>
        {processChildren(Array.from(xmlDoc.childNodes), highlightNode, wordNumber)}
    </div>
);

export default XmlContent;
