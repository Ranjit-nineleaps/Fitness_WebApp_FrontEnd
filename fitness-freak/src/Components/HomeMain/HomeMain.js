import React from "react";
import "./HomeMain.css";

function HomeMain() {
  return (
    <div className="image">
      <div className="text1">
        <h1>Fitness Made Simple!!</h1>
      </div>
      <div className="text2">
        <h2>You are a?</h2>
      </div>
      <div className="buttons">
        <button
          onClick={() => {
            window.location = "/login";
          }}
        >
          Fitness Enthusiast
        </button>
        <button
          onClick={() => {
            window.location = "/login";
          }}
        >
          Vendor
        </button>
      </div>
    </div>
  );
}
export default HomeMain;
