import { useState } from "react";
import { bulb, doubt, text } from "../../assets/icons";
import Button from "../button/Button";
import style from "./Asset.module.css";
const Asset1 = () => {
  const [displayThread, setDisplay] = useState(true);
  const toggleThreadVisibility=()=>{
    setDisplay(prev=>prev?false:true);
  }

  return (
    <div style={{ padding: "0 2rem" }}>
      <h1 style={displayThread?{ textAlign: "center", cursor: "pointer",backgroundColor:'#fcfdf0'}:{textAlign: "center", cursor: "pointer",backgroundColor:'white'}} onClick={toggleThreadVisibility}>Thread A</h1>
      {displayThread && (
        <>
          <div className={style.firstAssetContainer}>
            <div>
              <label htmlFor="Sub thread 1">Sub Thread 1</label>
              <div>
                <input type="text" placeholder="Enter text here" />
              </div>
            </div>
            <div>
              <label htmlFor="Sub interpretation 1">Sub Interpretation 1</label>
              <div>
                <input type="text" placeholder="Enter text here" />
              </div>
            </div>
          </div>
          <div className={style.iconsContainer}>
            <img src={bulb} alt="bulb icon" />
            <img src={text} alt="text icon" />
            <img src={doubt} alt="doubt" />
            <select name="categories">
              <option value="select-category">Select Category</option>
              <option value="cat1">Category1</option>
              <option value="cat2">Category2</option>
            </select>
            <select name="proces">
              <option value="select-process">Select Process</option>
              <option value="process1">Process1</option>
              <option value="process2">Process2</option>
            </select>
          </div>
          <Button btnText="Sub-thread" btnIcon="+" />
          <div className={style.summarycontainer}>
            <label htmlFor="summary">Summary of thread A</label>
            <div>
              <input type="text" placeholder="Enter text here" />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Asset1;
