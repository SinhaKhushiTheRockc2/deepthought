import { footerIcons } from "../../constants"
import style from "./SideIcons.module.css";

const SideIcons = () => {
  return (
    <div className={style.sideIconsContainer}>
      {footerIcons.map((icon)=>(
        <div className={style.sideIcon}><img src={icon.imgUrl} alt={icon.label} /></div>
      ))}
    </div>
  )
}

export default SideIcons
