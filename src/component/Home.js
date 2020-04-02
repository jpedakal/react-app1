import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import NewsDisplay from './NewsDisplay';
import JSON from '../db.json';

class Home extends Component {
    constructor() {
        super()
        this.state = {
            news: JSON,
            filtered: JSON
        }
    }
    render() {
        return (
            <Fragment>
                <Header />
            </Fragment>
        )
    }
}

export default Home;