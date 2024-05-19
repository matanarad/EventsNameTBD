import { useEffect, useState } from "react";
import "./EventBox.css";
import { useParams } from "react-router-dom";
import tempEventImage from "../../../img/Temp Event Img.png";
import addressIcon from "../../../img/pointonmap.svg";
import dateIcon from "../../../img/calendar.svg";
import checkIcon from "../../../img/check.svg";
import xIcon from "../../../img/red-x.svg";
function EventBox({ eventID }) {
  const { ownerId } = useParams();
  const [eventImage, setEventImage] = useState("");
  const [eventViews, setEventViews] = useState(0);
  const [eventMoney, setEventMoney] = useState(0);
  const [eventAcceptedTickets, setEventAcceptedTickets] = useState(0);
  const [eventPendingTickets, setEventPendingTickets] = useState(0);

  const [eventAddress, setEventAddress] = useState("");

  const [eventDate, setEventDate] = useState("");

  const [pendingList, setPendingList] = useState([]);

  useEffect(() => {
    //ToDo get from BE by eventID
    setEventAddress("Maslak, 34485 Sarıyer/İstanbul, Türkiye");
    setEventDate("Aug 31, 2024 4:00 PM");
    setEventImage(tempEventImage);
    setPendingList([
      {
        name: "Matan Arad",
        age: 21,
        transactionId: "123",
      },
      {
        name: "שחר דוד",
        age: 20,
        transactionId: "1243",
      },
    ]);

    setEventViews(0);
    setEventMoney(0);
    setEventAcceptedTickets(0);
    setEventPendingTickets(0);
  }, []);
  return (
    <div className="EventBox">
      <div className="event-box">
        <img
          className="event-box-image"
          src={eventImage}
          alt="None"
          style={{ width: "20vw" }}
        />
        <div className="event-info">
          <div className="event-box-info">
            <img className="icon" src={addressIcon} alt="None" />
            <div>{eventAddress}</div>
          </div>
          <div className="event-box-info">
            <img className="icon" src={dateIcon} alt="None" />
            <div>{eventDate}</div>
          </div>
        </div>
      </div>

      <div className="PendingList">
        <div className="event-box-info stats-grid">
          <div className="stat">
            <div>{eventViews}</div>
            <div>Views</div>
          </div>
          <div className="stat">
            <div>{eventMoney}₪</div>
            <div>Money</div>
          </div>
          <div className="stat">
            <div>{eventAcceptedTickets}</div>
            <div>Accepted</div>
          </div>
          <div className="stat">
            <div>{eventPendingTickets}</div>
            <div>Pending</div>
          </div>
        </div>
        {pendingList.map((item) => {
          return (
            <div className="AcceptBox" key={item.transactionId}>
              <div>{item.name}</div>
              <div>{item.age}</div>
              <img
                src={checkIcon}
                className="pending-icon"
                onClick={() => {
                  console.log("ToDo send Accept", item.transactionId);
                }}
              />
              <img
                src={xIcon}
                className="pending-icon"
                onClick={() => {
                  console.log("ToDo send Declined", item.transactionId);
                }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default EventBox;
