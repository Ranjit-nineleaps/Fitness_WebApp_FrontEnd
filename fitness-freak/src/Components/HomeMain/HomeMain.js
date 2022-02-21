import React from "react";
import "./HomeMain.css";

function HomeMain() {
  const handleClick = () => {
    window.location="/login"
  }
  return (    
    <div className="image">
        <div className="text1">
            <h1>Fitness Made Simple!!</h1>
        </div>
        <div className="text2">
        <h2>YOU ARE A??</h2>
      </div>
      <div className="buttons">
          <button onClick={handleClick}>Fitness Enthusiast</button>
          <button onClick={handleClick}>Vendor</button>
        </div>
    </div>
  );
}
export default HomeMain;
