import React from "react";
import "./style.css";

function Info(props) {
  return <div className="info"> {props.children}

  <br />
  <br />
  <br />
  <br />
  <br />
  <br />

  <h1 className="instructions"> clicky game</h1>
 
  
<p className="instructions-text">Click on an image to earn points, but dont click on any more than once!</p>
  </div>
};

export default Info;
//{props.children}Clicky Game
// <img src="http://smashbros-ultimate.com/images/char/mii_fighter.png" />