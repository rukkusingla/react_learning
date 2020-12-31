import React, { useEffect,useState } from 'react';



function Itemdetail({match}) {
    const[item,setItem] = useState({});
    useEffect(() =>{
        getItem();
     },[]);
 
    
    const getItem = async ()=> {
        const apicall = await fetch(`https://fortnite-api.com/v1/playlists/${match.params.id}`);
        const data = await apicall.json();
        setItem(data.data)
        console.log(data);
    }
    return (
      <div className="App">
       <h1>{item.description}</h1>
      </div>
    );
  }
  
  export default Itemdetail;