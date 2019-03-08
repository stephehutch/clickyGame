import React from "react";
import "./style.css";



function ImgCard(props) {

  // state = {
  //   count: 0
  // };

  // handleIncrement = () => {
  //   // We always use the setState method to update a component's state
  //   this.setState({ count: this.state.count + 1 });
  // };

  return (
    <div className="card" >
       
      <div className="img-container">
        <img alt={props.name} src={props.image} data-id={props.id} />
      </div>
  </div>
  );
}
//
export default ImgCard;
// */<span onClick={() => props.removeFriend(props.id)} className="remove">
//         𝘅
//       </span>
//onClick={this.handleIncrement}
// <p>Click Count: {this.state.count}</p>