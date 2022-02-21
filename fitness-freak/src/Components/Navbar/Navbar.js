import React, { useState } from "react";
import ReorderIcon from "@material-ui/icons/Reorder";
import "./Navbar.css";
export default function NavBar() {
  const [showLinks, setShowLinks] = useState(false);
  return (
    <div className="Navbar">
      <div className="leftside">
        <div className="links" id={showLinks ? "hidden" : ""}>
          <a href="/home">Home</a>
          <a href="/home">About</a>
          <a href="/home">Contact</a>
        </div>
        <button onClick={() => setShowLinks(!showLinks)}>
          {""}
         <ReorderIcon />
        </button>
      </div>
      <div className="rightside">
        <h3>
          <span>F</span>itness
          <span> F</span>reak
        </h3>
      </div>
    </div>
  );
}
