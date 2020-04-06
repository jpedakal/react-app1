import React, { Component, Fragment } from 'react';
import './Header.css';

class Header extends Component {
    constructor() {
        super()
        this.state = {
            title: "My First React App",
            details: "this is just for sample react application",
            keyword: "User text here"
        }
    }

    inputChange(event) {
        this.setState({ keyword: event.target.value ? event.target.value : "User text here" })
    }
    render() {
        return (
            <Fragment>
                <header>
                    <p className="logo">{this.state.title}</p>
                    <center>
                        <input onChange={this.inputChange.bind(this)} />
                        <p>{this.state.keyword}</p>
                    </center>
                </header>
            </Fragment>
        )
    }
}


export default Header;