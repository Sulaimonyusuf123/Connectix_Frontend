import React from "react";
import { Link } from "react-router-dom";
import back from "../../Profile/Help/back.svg";

const PromoterHelp = () => {
  return (
    <div className="font-general px-4 py-4">
      <div className="flex items-center mb-4">
        <Link to={"/PromoterProfile"}>
          <button>
            <img src={back} alt="Back" />
          </button>
        </Link>
        <h2 className="ml-4">Help</h2>
      </div>
    </div>
  );
};

export default PromoterHelp;
