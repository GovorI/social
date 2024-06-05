import React from "react";
import s from "./Header.module.css";

function Header() {
  return (
    <header className={s.header}>
      <img
        src="https://i.pinimg.com/originals/13/90/8a/13908a5b177c2ef879bc50b40a10a7bf.jpg"
        alt="logo"
      ></img>
    </header>
  );
}

export default Header;
