import React, { Component, Fragment } from 'react';
import Header from './Header';
import NewsDisplay from './NewsDisplay';
import JSON from '../db.json';

class Home extends Component {

    constructor() {
        super()
        this.state = {
            news: JSON,
            filter: JSON
        }
    }

    filterNews(keyword){
         const output= this.state.news.filter((data)=>{
             return data.title.toLowerCase().indexOf(keyword.toLowerCase())>-1
         })
         this.setState({filter: output})
    }

    render() {
        return (
            <Fragment>
                <Header userText={(userInput)=> this.filterNews(userInput)}/>
                <NewsDisplay newsInfo={this.state.filter}/>
            </Fragment>
        )
    }
}

export default Home;