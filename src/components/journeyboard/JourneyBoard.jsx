import { useState,useEffect } from "react";
import { chevronRight,chevronLeft} from "../../assets/icons";
import style from "./JourneyBoard.module.css";

const JourneyBoard = () => {
  const [showJourneyBoard, setShowJourneyBoard] = useState(false);
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    fetch("/task.json")
      .then((response) => response.json())
      .then((data) => setTasks(data))
      .catch((error) => console.error("Error fetching tasks:", error));
  }, []);

  const toggleJourneyBoardVisibility = () => {
    setShowJourneyBoard((prev) => (prev ? false : true));
  };

  return (
    <>
      {showJourneyBoard ? (
        <div className={style.journeyBoardContainer}>
            <div className={style.leftArrowContainer}>
                <h1 className={style.journeyBoardTitle}>Journey Board</h1>
            <img
              src={chevronLeft}
              alt="chevron right arrow"
              onClick={toggleJourneyBoardVisibility}
            />
          </div>
          <div className={style.parentTaskContainer}>
          {tasks.map((task)=>(
            <>
            <ul className={style.taskContainer}>
                <li className={style.task_title}>{task.task_title}</li>
            </ul>
            <ul className={style.assetList}>
                {task.assets.map((asset)=>(
                    <li key={asset.asset_id}>{asset.asset_title}</li>
                ))}
            </ul>
            </>
          ))}
          </div>
        </div>
      ) : (
        <div className={style.parentContainer}>
          <div className={style.rightArrowContainer}>
            <img
              src={chevronRight}
              alt="chevron right arrow"
              onClick={toggleJourneyBoardVisibility}
            />
          </div>
          <div className={style.oneContainer}>
            <span>1</span>
          </div>
        </div>
      )}
      </>
  );
};

export default JourneyBoard;
