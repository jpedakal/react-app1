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

    inputChanges(data){
        this.setState({keyword: data.target.value? data.target.value: "User text here"})
    }
    render() {
        return (
            <Fragment>
                <header>
                    <p className="logo">{this.state.title}</p>
                    <center>
                        <input onChange={this.inputChanges.bind(this)}/>
                        <p>{this.state.keyword}</p>
                    </center>
                </header>
            </Fragment>
        )
    }
}


export default Header;