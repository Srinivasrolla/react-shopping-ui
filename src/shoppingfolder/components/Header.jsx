import React from "react";
import "../../App.css";

const Header = () => {
  return (
    <div className="headerSection">
        <div className="left">
            <div className="title">
                <h2>Shopping Mall</h2>
            </div>
        </div>
        <div className="centre">
            <ul>
                <li>Woman</li>
                <li>Man</li>
                <li>Kids</li>
                <li>Beauty</li>
            </ul>
        </div>
        <div className="search">
            <input type="text" placeholder="Search..." />
        </div>
        <div className="right">
            <div className="signin">
                SignIn / SignUp
            </div>
            <div className="cart">
                Cart
            </div>
        </div>
    </div>
  )
}

export default Header