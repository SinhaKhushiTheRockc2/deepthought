import style from "./Button.module.css";
const Button = ({btnText,btnIcon}) => {
  return (
    <button className={style.btn}>
      {btnIcon && <span className={style.btnIcon}>{btnIcon}</span>}Submit Task
    </button>
  )
}

export default Button
