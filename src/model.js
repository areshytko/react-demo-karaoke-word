/**
 * Created by areshytko on 19.07.17.
 */


export default class Model {

    constructor(htmlString){
        this.initDocument(htmlString);
        this.initWordPointer();
    }

    initDocument(htmlString){
        let parser = new DOMParser();
        this.doc = parser.parseFromString(htmlString, "text/html"); // this should be xml instead of html
        console.log(this.doc);
    }

    initWordPointer(){
        this.textNodes = this.doc.evaluate("/html/body//text()", this.doc, null, XPathResult.ANY_TYPE, null );
        this.wordNumber = 0;
        this.node = this.getNextNode();
        console.log(this.node);
    }

    getNextNode(){
        let node = this.textNodes.iterateNext();

        while (node && 0 == node.textContent.trim().length) {
            node = this.textNodes.iterateNext();
        }
        return node;
    }

    incrementWordPointer(){
        // this should be changed to a smarted logic when multiple whitespaces are possible, special symbols present, etc.
        if (!this.node){
            return;
        }

        let words = this.node.textContent.trim().split(' ');

        while (words.length <= this.wordNumber) {
            this.wordNumber = 0;
            this.node = this.getNextNode();
            words = this.node.textContent.trim().split(' ');
        }

        this.wordNumber += 1;
    }

    getViewModel(){
        return this.doc.getElementsByTagName('body')[0];
    }
}