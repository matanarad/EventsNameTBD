import { useEffect, useState } from "react";
import "./ScanPage.css";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import backIcon from "../../img/backIcon.svg";

function ScanPage() {
  const { userID, eventID } = useParams();

  return (
    <div className="ScanPage">
      <Link to={`/MyEventsPage/${userID}`}>
        <button className="return-bar">
          <img className="icon" src={backIcon} alt="None" />
          {/* <div>Return to event page</div> */}
        </button>
      </Link>
    </div>
  );
}

export default ScanPage;
