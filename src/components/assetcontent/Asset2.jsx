import { useState } from "react";
import style from "./Asset.module.css";

const Asset2 = () => {
    const [displayIntro,setIntroDisplay]=useState(true);
    const [displayThread,setThreadDisplay]=useState(true);

    const toggleIntroDisplay=()=>{
        setIntroDisplay(prev=>prev?false:true);
    }

    const toggleThreadDisplay=()=>{
        setThreadDisplay(prev=>prev?false:true);
    }

  return (
    <div className={style.secondAssetContainer}>
      <h1 style={displayIntro?{backgroundColor:'#f2f2f2'}:{backgroundColor:'white'}} onClick={toggleIntroDisplay}>Introduction</h1>
      {displayIntro && <p>4SA mehtod</p>}
      <h1 style={displayThread?{backgroundColor:'#f2f2f2'}:{backgroundColor:'white'}} onClick={toggleThreadDisplay}>Thread A</h1>
      {displayThread && <p>How are you going to bring the idea?</p>}
    </div>
  )
}

export default Asset2
