import React from "react";

export const ModeToggler = () => {
  let darkModeOn = true;
  let darkMode = "Dark mode is on";
    let lightMode = "Light mode is on";
    
    const handleClick = () => {
        darkModeOn = !darkModeOn
        
        darkModeOn ? console.log("darkmode is on") : console.log("Light Mode is on");;
    }

  return (
    <div>
      {darkModeOn ? darkMode : lightMode}
      <button onClick={handleClick}>Mode</button>
    </div>
  );
};
