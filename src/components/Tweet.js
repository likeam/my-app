import React from 'react'

export default function Tweet({name, message, setTweets }) {

    const deleteTweet = ()=>{
        console.log('Delete It');
    }

    return (
    
        <div className='tweet'>
            <h2>{name}</h2>
            <h3>{message}</h3>
            <button onClick={deleteTweet}>Delete</button>
            <button>Like</button>
        </div>
    );
}
