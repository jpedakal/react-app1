import React from 'react';
import LazyLoad from 'react-lazyload';

const newsDisplay = (props) => {

    const newsData = props.newsInfo.map((data, index) => {
        return (
            <LazyLoad height={300} throttle={500} key={data.id}>
                <div>
                    <h3>{data.title}</h3>
                    <p>{data.feed}</p>
                </div>
            </LazyLoad>
        )
    })

    return (
        <React.Fragment>
            {newsData}
        </React.Fragment>
    )
}

export default newsDisplay;