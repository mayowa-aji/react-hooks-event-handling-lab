// Code Keypad Component Here
// import React from 'react'

function Keypad (){
    function handleChange(event){
        console.log(event.target.value)
    }
    return (
        <form onChange={handleChange}>
            <label for="pwd">Password:</label>
            <input type="password" name="password" placeholder="Enter password..." />
        </form>
    )
}

export default Keypad;
