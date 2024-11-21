import style from "./Asset.module.css";
const Asset3 = () => {
  return (
    <div className={style.thirdAssetContainer}>
      <label htmlFor="Title">Title</label>
      <div><input type="text" placeholder="Enter text here"/></div>
      <label htmlFor="Content">Content</label>
        <div><textarea name="content" placeholder="Write content here" rows={8}></textarea></div>
    </div>
  )
}

export default Asset3
