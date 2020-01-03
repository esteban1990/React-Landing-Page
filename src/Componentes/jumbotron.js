import React from 'react';

const Jumbotron = (props) => {
    return (
        <div className="jumbotron">
            
            <h1 className="display-3">{props.jtitle}</h1>

            <p className="lead">{props.jtext}</p>

            <a className="btn btn-primary btn-lg" href="#" role="button">{props.jbutton}</a>

        </div>
    )
};

export default Jumbotron;