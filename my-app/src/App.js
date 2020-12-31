import React,{useEffect} from 'react';
import Tweet from './Tweet';
import {useState} from 'react';
import Recipe from './recipe'

//Day 2- Recipe App

/*const App = () => {

    const App_Id = "e5f6ba96";
    const Appkey = "582cbb9fedda42d2ce34500b8654693c";
    const[recipes,setrecipes] = useState([]);
    const[search,setsearch] = useState('');
    const[query,setquery]=useState('');

    useEffect(() => {
        resp();
    },[query]);

    const resp = async () => {
       const response = await fetch(
           `https://api.edamam.com/search?q=${query}&app_id=${App_Id}&app_key=${Appkey}`
           );
       const data =  await response.json();
       setrecipes(data.hits);
       console.log(data);
    }

    const updatequery = e => {
     e.preventDefault();
     setquery(search);
    }

    const updatesearch = e => {
    setsearch(e.target.value);
    }
    return (
        <div className = "App">
            <form className = "form-name" onSubmit ={updatequery}> 
                <input className ="search-bar" type="text" onChange={updatesearch} ></input>
                <button className ="search-button" type="submit">Search</button>
            </form>
            {recipes.map(a => (
            <Recipe key ={a.recipe.label} name ={a.recipe.label} calories = {a.recipe.calories} image ={a.recipe.image} />
           ))};
        </div>
        
        
    );
}*/

export default App;

//Day 1 - Basic declaring (useState and props)
/* function App() {
    const[count,setcount] = useState(0);
    const[isPink,setPink] = useState(false);
    const incCount = () => {
       setcount(count+1);
       setPink(!isPink);
    };

    const[users, setUsers] = useState([
        {name : "Jon" ,message :"I am JohnSnow"},
        {name :"Shakira", message : "I am Shakira"},
        {name :"Beyonce", message : "I am Beyonce"}]);
 return (
     <div>
<div className = "app">
   {users.map(user =>(
       <Tweet name = {user.name} message ={user.message}/>
   ))};
</div>
<div className = "count">
    <button onClick = {incCount}>Increment</button>
    <h1>{count}</h1>
    <h2 className = {isPink ? "pink": ""}>My color changes</h2>
    </div>
</div>

 );

} */


