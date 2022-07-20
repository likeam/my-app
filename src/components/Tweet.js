import React from 'react'

export default function Tweet({name, tweet, setTweets, tweets }) {

    const deleteTweet = ()=>{
        // setTweets(tweets.filter( (t) => t !== tweet));
        setTweets(tweets.filter((state) => state.id !== tweet.id));
    };

    return (
    
        <div className='tweet'>
            <h2>{name}</h2>
            <h3>{tweet.message}</h3>
            <button onClick={deleteTweet}>Delete</button>
            <button>Like</button>
        </div>
    );
}
