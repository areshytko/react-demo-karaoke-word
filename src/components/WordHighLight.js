/**
 * Created by areshytko on 21.07.17.
 */

import React from 'react';


const WordHighLight = ({ text, wordNumber }) => {

    let words = text.trim().split(' ');

    let before = words.slice(0, wordNumber - 1).join(' ') + ' ';
    let after = ' ' + words.slice(wordNumber, words.length).join(' ');
    let currentWord = words[wordNumber - 1];

    return <span>{before}<span style={{color: 'red'}}>{currentWord}</span>{after}</span>
};

export default WordHighLight;