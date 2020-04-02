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
    render() {
        return (
            <Fragment>
                <header>
                    <p className="logo">{this.state.title}</p>
                    <center>
                        <input />
                        <p>{this.state.keyword}</p>
                    </center>
                </header>
            </Fragment>
        )
    }
}


export default Header;