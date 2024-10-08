import React, { useState } from "react";
import ChangePasscode from "./ChangePasscode";

function Header() {
  const [reload, setReload] = useState(false);
  
  const handleReload = () => {
    console.log("Reload button clicked!");
    
    // setReload(true);,
    window.location.reload();
  };
  return (
    <>
      <div className="w-full flex justify-end">
        <button 
          className="bg-blue-600 m-4 w-40 h-9 text-white rounded-lg mt-10"
          
          >
          Change Passcode
        </button>
        <button
          className="bg-blue-600 m-4 w-28 h-9 text-white rounded-lg mt-10 hover:bg-blue-700"
          onClick={handleReload}
        >
          Logout
        </button>
      </div>
    </>
  );
}

export default Header;
