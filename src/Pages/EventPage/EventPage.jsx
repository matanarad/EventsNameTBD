import { useEffect } from "react";
import "./EventPage.css";
import tempEventImage from "../../img/Temp Event Img.png";
import { useState } from "react";
import addressIcon from "../../img/pointonmap.svg";
import dateIcon from "../../img/calendar.svg";
import ownerIcon from "../../img/ownerIcon.svg";
function EventPage() {
  const [eventImage, setEventImage] = useState("");
  const [eventTitle, setEventTitle] = useState("");
  const [eventOwner, setEventOwner] = useState({});
  const [eventAddress, setEventAddress] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [eventDescription, setEventDescription] = useState("");

  useEffect(() => {
    // ToDo Get From BE
    setEventImage(tempEventImage);
    setEventTitle("Zamna İstanbul");
    setEventOwner({
      name: "Matan Arad",
      ID: "123",
    });
    setEventAddress("Maslak, 34485 Sarıyer/İstanbul, Türkiye");
    setEventDate("Aug 31, 2024 4:00 PM");
    setEventDescription(
      `Zamna Festival arrives in Istanbul on August 31st at Bonus Parkorman, a unique and stunning outdoor location where the most incredible artists will gather for a unique journey to celebrate the first ever Zamna event in the country.
      Expect stellar musical performances, custom stage production, state-of-the-art sound design and immersive visual installations that will make the first edition of Zamna in Istanbul an unforgettable memory forever submerged in our memory.
      Expect stellar musical performances, custom stage production, state-of-the-art sound design and immersive visual installations that will make the first edition of Zamna in Istanbul an unforgettable memory forever submerged in our memory.
      Expect stellar musical performances, custom stage production, state-of-the-art sound design and immersive visual installations that will make the first edition of Zamna in Istanbul an unforgettable memory forever submerged in our memory.

      `
    );
  }, []);
  return (
    <div className="EventPage">
      <img className="event-image" src={eventImage} alt="None" />
      <div className="event-title">{eventTitle}</div>
      <div className="event-address-and-date">
        <div className="event-address">
          <img className="address-and-date-icon" src={addressIcon} alt="None" />
          <div>{eventAddress}</div>
        </div>
        <div className="event-date">
          <img className="address-and-date-icon" src={dateIcon} alt="None" />
          <div>{eventDate}</div>
        </div>
        <div className="event-owner">
          <img className="address-and-date-icon" src={ownerIcon} alt="None" />
          <div>{eventOwner.name}</div>
        </div>
      </div>
      <div className="event-description">
        {eventDescription.split("\n").map((line) => {
          return <p>{line}</p>;
        })}
      </div>
      <button className="order-ticket-button">ORDER TICKET</button>
    </div>
  );
}

export default EventPage;
