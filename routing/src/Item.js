import React from 'react';
import {Link} from 'react-router-dom';

function Item({name, id}) {
    return (
      <div className="App">
         <Link to={`/shop/${id}`}><h1>{name}</h1></Link>
      </div>
    );
  }
  
  export default Item;