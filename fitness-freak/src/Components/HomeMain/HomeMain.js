import React from "react";
import "./HomeMain.css";
import login from '../../Pages/Login/Login'
import SignupVendor from "../../Pages/Signup/SignupVendor";
function HomeMain() {
  return (    
    <div className="image">
        <div className="text1">
            <h1>Fitness Made Simple!!</h1>
        </div>
        <div className="text2">
        <h2>YOU ARE A??</h2>
      </div>
      <div className="buttons">
          <button>Fitness Enthusiast</button>
          <button>Vendor</button>
        </div>
    </div>
  );
}
export default HomeMain;
