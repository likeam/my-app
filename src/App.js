//Components Imports
import { useState } from "react";
import CreateTweet from "./components/CreateTweet";
import TweetList from "./components/TweetList";

function App() {

  //Here is the place for the normal js
  const [textInput, setTextInput] = useState('');
  const [tweets, setTweets] = useState([]);
  const [name, setName] = useState("Abdul Rehman");
  

  //Create Function



  return (
    <div >
    
      <CreateTweet textInput = {textInput} setTextInput = {setTextInput} tweets ={tweets} setTweets = {setTweets}  />
      <TweetList name = {name} tweets = {tweets}  /> 
    
    </div>
  );
}

export default App;
