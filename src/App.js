//Components Imports

import CreateTweet from "./components/CreateTweet";
import TweetList from "./components/TweetList";

function App() {

  //Here is the place for the normal js

  const name = "Abdul Rehman";
  const message = "this is actualy tweet";

  //Create Function



  return (
    <div >
    
      <CreateTweet />
      <TweetList name = {name} message = {message} /> 
    
    </div>
  );
}

export default App;
