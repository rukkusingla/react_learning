import React from 'react';

const Recipe = ({name , calories, image}) => {
    return(
      <div>
          <h1>{name}</h1>
          <h1>{calories}</h1>
          <img src = {image}></img>
      </div>
    );
};

export default Recipe;