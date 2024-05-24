import { useState } from "react";
import "./ScanPage.css";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import backIcon from "../../img/backIcon.svg";

import React from "react";
// import config from "../../config";
import QrReader from "react-qr-scanner";

function ScanPage() {
  const { userID } = useParams();
  const [scanResult, setScanResult] = useState("");

  const handleScan = (data) => {
    if (data?.text) {
      setScanResult(data.text);
    }
  };

  const handleError = (err) => {
    console.error(err);
  };
  return (
    <div className="ScanPage">
      <Link to={`/MyEventsPage/${userID}`}>
        <button className="return-bar">
          <img className="icon" src={backIcon} alt="None" />
          {/* <div>Return to event page</div> */}
        </button>
      </Link>
      <div className="camera-view">
        <QrReader
          delay={300}
          onError={handleError}
          onScan={handleScan}
          style={{
            width: "100%",
            borderRadius: "15px",
          }}
        />
      </div>
      <div>{scanResult}</div>
    </div>
  );
}

export default ScanPage;
