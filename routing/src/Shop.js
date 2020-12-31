import React from 'react';
import {useState,useEffect} from 'react';
import Item from './Item';


function Shop() {
    const [dataArray, setdataarray] = useState([]);
    useEffect(() => {
        play();
      },[]);
      
   const play = async () => {
   const getplay = await fetch(`https://fortnite-api.com/v1/playlists`);
   const data = await getplay.json();
   setdataarray(data.data);
   console.log(data);
}
  
    return (
      <div className="App">
       <h1>Shop page</h1>
      {dataArray.map(item =>(
      <Item key={item.id} name={item.name} id={item.id}/>
      ))};
      </div>
    );
  }
  
  export default Shop;