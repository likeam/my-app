import React from 'react';
import styled from 'styled-components'
export default function Tweet({name, tweet, setTweets, tweets }) {

    const deleteTweet = ()=>{
        // setTweets(tweets.filter( (t) => t !== tweet));
        setTweets(tweets.filter((state) => state.id !== tweet.id));
    };

    return (
    
        <TweetStyle >
            <h2 > {name}</h2>
            <h3 >{tweet.message}</h3>
            <button onClick={deleteTweet}>Delete</button>
            <button>Like</button>
        </TweetStyle>
    );
}

const TweetStyle = styled.div`
bacground-color: "red";
bordet-radius: 3px;
border: 2px solid palevioletred;
font-size: 2rem;

`;
