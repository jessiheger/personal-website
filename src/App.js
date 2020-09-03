import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Form from './js/components/Form';

export default class App extends Component {
    constructor(props) {
        super();
        this.state = {

        }
    }


    render() {
        return (
            <div id='app'>
                <h1>Hello world!</h1>
                <Form></Form>
            </div>
        )
    }
}

const wrapper = document.getElementById("container");
wrapper ? ReactDOM.render(<App />, wrapper) : false;