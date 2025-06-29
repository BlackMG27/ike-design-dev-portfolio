import React from "react";
import TopNav from "./nav";

interface HeaderProps{
  title?: string,
  subtitle?: string
  bgImage?: string
}

const Header: React.FC<HeaderProps> = ({title, subtitle}) => {
  return(
    <>
    <header>
      <TopNav/>
      <h1 className="title">{title}</h1>
      <h3>{subtitle}</h3>
    </header>
    </>
  )
}

export default Header