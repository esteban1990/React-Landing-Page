import React from 'react';


import Card from './card';


const Cards = (props) => {
  return (
    <div className="card-deck">
      <Card  title="title 1" text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque." img="https://via.placeholder.com/500x325" />
      <Card  title="title 2" text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque." img="https://via.placeholder.com/500x325"/>
      <Card  title="title 3" text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque." img="https://via.placeholder.com/500x325"/>
      <Card  title="title 4" text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque." img="https://via.placeholder.com/500x325"/>
    </div>
  )
};

export default Cards;