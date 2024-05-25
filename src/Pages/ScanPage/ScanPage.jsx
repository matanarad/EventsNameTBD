import { useState } from "react";
import "./ScanPage.css";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import backIcon from "../../img/backIcon.svg";
import React from "react";
import QRScanner from "./QRScanner/QRScanner";

function ScanPage() {
  const { userID, eventId } = useParams();
  const [ticket, setTicket] = useState(false);

  const handleUseTicket = () => {
    setTicket({ ...ticket, used: !ticket.used });
  };

  const handleScan = (data) => {
    if (data?.text) {
      const ticketObject = JSON.parse(data.text);
      setTicket(ticketObject);
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
        </button>
      </Link>

      {ticket ? (
        <div className="ticket-info-container">
          <h1 className="title">Ticket Information</h1>
          <div
            className="ticket-detail"
            style={{
              border: ` ${
                ticket.eventID !== eventId ? "2px solid #ff5733" : ""
              }`,
            }}
          >
            <span className="detail-label">Event:</span>
            <span className="detail-value">{ticket.eventName}</span>
          </div>
          {ticket.eventID !== eventId && (
            <div className="additional-text">
              This Ticket Is Not For This Event
            </div>
          )}
          <div className="ticket-detail">
            <span className="detail-label">Full Name:</span>
            <span className="detail-value">{ticket.fullName}</span>
          </div>
          <div className="ticket-detail">
            <span className="detail-label">Age:</span>
            <span className="detail-value">{ticket.age}</span>
          </div>
          <div className="ticket-detail">
            <span className="detail-label">Sex:</span>
            <span className="detail-value">{ticket.sex}</span>
          </div>
          <div className="ticket-detail">
            <span className="detail-label">Phone Number:</span>
            <span className="detail-value">{ticket.phoneNumber}</span>
          </div>
          <div className={`ticket-detail ${ticket.used ? "used" : "not-used"}`}>
            <span className="detail-label">Status:</span>
            <span className="detail-value">
              {ticket.used ? "Already Used" : "Not Used"}
            </span>
          </div>

          {!ticket.used ? (
            <button className="use-ticket-button" onClick={handleUseTicket}>
              Mark as Used
            </button>
          ) : (
            <button
              className="undo-use-ticket-button"
              onClick={handleUseTicket}
            >
              Undo Mark as Used
            </button>
          )}
          <button
            className="use-ticket-button"
            onClick={() => setTicket(false)}
          >
            Scan New Ticket
          </button>
        </div>
      ) : (
        <div>
          <div className="camera-view">
            {/* <QrReader
              delay={3000}
              onError={handleError}
              onScan={handleScan}
              style={{
                width: "100%",
                borderRadius: "15px",
              }}
            /> */}
            <QRScanner onError={handleError} onScan={handleScan} />
          </div>
          <div className="ticket-info-container">
            <div className="detail-value">
              Scan The Barcode To See Ticket Information
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ScanPage;
