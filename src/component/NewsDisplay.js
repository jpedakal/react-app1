import React from 'react';

const newsDisplay = (props) => {

    const newsData = props.newsInfo.map((data, index) => {
        return (
            <div>
                <h3>{data.title}</h3>
                <p>{data.feed}</p>
            </div>
        )
    })

    return (
        <React.Fragment>
            {newsData}
        </React.Fragment>
    )
}

export default newsDisplay;