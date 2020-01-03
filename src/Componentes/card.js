import React from 'react';



const Card = (props) => {


    return (

        <div className="card text-center">
            <img className="card-img-top" src={props.img} alt="Card image cap" />
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.text} </p>

            </div>
            <div className="card-footer">
                <a href="#" class="btn btn-primary">Find Out More!</a>
            </div>
        </div>
    )
}
export default Card;