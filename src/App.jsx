import React from "react";
import Sidebar from "./Components/Sidebar";
import Feed from "./Components/Feed";
import { useState } from "react";

const App = () => {
  const [feedState, setFeedState] = useState({
    value: '',
    message: null,
    previousChats: [],
    currentTitle: null,
  });
  const createNewChat = () => {
    setFeedState((prevState) =>({
      ...prevState,
      value: '',
      message: null,
      currentTitle: null
    }));
  };
  return <div className="relative z-0 flex h-full w-full overflow-hidden">
    <Sidebar feedState={feedState} setFeedState={setFeedState} createNewChat={createNewChat}/>
    <Feed feedState={feedState} setFeedState={setFeedState}/>
  </div>;
};

export default App;
