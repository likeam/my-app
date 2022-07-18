import React from 'react'
import { useState } from 'react';

export default function CreateTweet() {

    //State
    const [textInput, setTextInput] = useState('');

    //Function
    const userInputHandler = (e) => {
        console.log(e.target.value);
    }

    return (
        <form >
            <textarea onChange={userInputHandler} cols="50" rows="5"></textarea>
            <button>Submit</button>
            <h1>{textInput}</h1>
        </form>
    )
}
