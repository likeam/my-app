//Components Imports
import { useState, useEffect } from "react";
import CreateTweet from "./components/CreateTweet";
import TweetList from "./components/TweetList";


function App() {





  //Here is the place for the normal js
  const [textInput, setTextInput] = useState('');
  const [tweets, setTweets] = useState([]);
  const [name, setName] = useState("Abdul Rehman");


  //Create Function

  useEffect(() =>{
    console.log('We run a fuction');
  }, [textInput]);



  return (
    <div >
        <h1 >TWITTER LIGHT</h1>
      <CreateTweet textInput = {textInput} setTextInput = {setTextInput} tweets ={tweets} setTweets = {setTweets}  />
      <TweetList name = {name} tweets = {tweets} setTweets = {setTweets} /> 
    
    </div>
  );
}

export default App;
