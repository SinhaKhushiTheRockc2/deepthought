import style from "./Navbar.module.css";
import { logo } from "../../assets/images";
import { navIcons } from "../../constants";

const Navbar = () => {
  return (
    <header className={style.navbarContainer}>
      <nav className={style.navbar}>
        <a href="/">
        <img src={logo} alt="" />
        </a>
        <ul className={style.listIconsContainer}>
          {navIcons.map((navIcon)=>(
            <li key={navIcon.label} className={style.listIcon}><img src={navIcon.imgUrl} alt={navIcon.label} /></li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
