import { useEffect, useState } from "react";
import style from "./Card.module.css";
import Asset3 from "../assetcontent/Asset3";
import Asset1 from "../assetcontent/Asset1";
import Asset2 from "../assetcontent/Asset2";

const Card = ({ cardName, description }) => {
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    fetch("/deepthought/task.json")
      .then((response) => response.json())
      .then((data) => setTasks(data))
      .catch((error) => console.error("Error fetching tasks:", error));
  }, []);
  return (
    <div className={style.parentAssetContainer}>
      {tasks.map((task) =>
        task.assets.map((asset) => (
          <div className={style.assetContainer}>
            <h1 className={style.assetTitle}>{asset.asset_title}</h1>
            <span className={style.infoIcon} src="">
              i
            </span>
            <div className={style.assetDescContainer}>
              <p>
                <span className={style.assetSpan}>Description: </span>
                {asset.asset_description}
              </p>
            </div>
            {asset.asset_content_type === "video" && asset.asset_content && (
              <div>
                <iframe src={asset.asset_content} height={300} width={517} controls title="video">
                  the file is not supported by your browser
                </iframe>
              </div>
            )}
            {asset.asset_id===18884 && <Asset1/>}
            {asset.asset_id===18885 && <Asset3/>}
            {asset.asset_id===18886 && <Asset2/>}
          </div>
        ))
      )}
    </div>
  );
};

export default Card;
