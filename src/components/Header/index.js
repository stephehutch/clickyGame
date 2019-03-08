import React from "react";
import "./style.css";


function Header(props) {
  return <div className="head"> 
        <h1 className="title">{props.children}</h1>
          </div>
}

export default Header;
