import React from 'react';

function Hello() {
    const hello = () => {
        console.log('Hello Rukku');
    }
    return (

        <div>
            <button onClick = {hello}>Say Hello</button>
        </div>
    );

}

export default Hello;
