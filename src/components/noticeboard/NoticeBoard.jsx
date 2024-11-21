import { useState } from "react";
import style from "./NoticeBoard.module.css";
const NoticeBoard = () => {
    const [showNoticeBoard,setShowNoticeBoard]=useState(true);
  return (
    <>
    {showNoticeBoard && <div className={style.noticeboard}>
      <div className={style.sideBar}>
        <h4 style={{cursor:'pointer'}} onClick={()=>setShowNoticeBoard(false)}>X</h4>
        <h4>N o t i c e &nbsp; B o a r d</h4>
      </div>
    </div>}
    </>
  )
}

export default NoticeBoard
