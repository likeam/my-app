import React from 'react'
import {v4 as uuidv4} from "uuid";
import { useState } from 'react';

export default function CreateTweet({textInput, setTextInput, tweets, setTweets}) {



    //Function
    const userInputHandler = (e) => {
        setTextInput(e.target.value);
    }

    const submitTweetHandler = (e) => {
        e.preventDefault();
        setTweets([...tweets, {message: textInput, id: uuidv4()}]);
        setTextInput("");
    }

    return (
        <form onSubmit={submitTweetHandler}>
            <textarea onChange={userInputHandler} value={textInput} cols="50" rows="5"></textarea>
            <button>Submit</button>
        
        </form>
    )
}
