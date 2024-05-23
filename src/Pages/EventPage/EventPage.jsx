import { useEffect } from "react";
import "./EventPage.css";
import tempEventImage from "../../img/Temp Event Img.png";
import { useState } from "react";
import addressIcon from "../../img/pointonmap.svg";
import dateIcon from "../../img/calendar.svg";
import ownerIcon from "../../img/ownerIcon.svg";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import backIcon from "../../img/backIcon.svg";
import linkIcon from "../../img/linkIcon.svg";
// import { shareOnMobile } from "react-mobile-share";
// import { RWebShare } from "react-web-share";
import config from "../../config";

function EventPage() {
  const [eventImage, setEventImage] = useState("");
  const [eventTitle, setEventTitle] = useState("");
  const [eventOwner, setEventOwner] = useState({});
  const [eventAddress, setEventAddress] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [eventDescription, setEventDescription] = useState("");
  const { eventId, userID } = useParams();

  const handleShare = async () => {
    const shareData = {
      title: config.shareDataTitle,
      text: config.shareDataText,
      url: config.url + `event/${userID}/${eventId}`,
    };

    if (navigator.canShare && navigator.canShare(shareData)) {
      try {
        await navigator.share(shareData);
        console.log("Share was successful.");
      } catch (error) {
        console.error("Error sharing:", error);
      }
    } else {
      alert("Web Share API is not supported in your browser.");
    }
  };
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
      <Link to={`/MyEventsPage/${userID}`}>
        <button className="return-bar">
          <img className="icon" src={backIcon} alt="None" />
          {/* <div>Return to event page</div> */}
        </button>
      </Link>
      {/* <Link to={`/MyEventsPage/${userID}`}> */}
      <div>
        {/* <RWebShare
          data={{
            text: "Like humans, flamingos make friends for life",
            url: "https://on.natgeo.com/2zHaNup",
            title: "Share this article on Flamingos",
          }}
          onClick={() => console.info("share successful!")}
        >
          <button>Share</button>
        </RWebShare> */}
        {/* <div className="warning">
        Warning: Copy to clipboard will NOT work here due to iframe origin
        policy in codesandbox use external window to test that feature
      </div> */}
      </div>
      <button
        className="link-button"
        onClick={handleShare}
        // onClick={() => {
        //   shareOnMobile({
        //     text: "Hey checkout our package react-mobile-share",
        //     url: "https://www.npmjs.com/package/react-mobile-share",
        //     title: "React-Mobile-Share",
        //   });
        // }}
      >
        <img className="link-icon" src={linkIcon} alt="None" />
        {/* <div>Return to event page</div> */}
      </button>
      {/* </Link> */}
      <img className="event-image" src={eventImage} alt="None" />
      <div className="event-title">{eventTitle}</div>
      <div className="event-address-and-date">
        <div className="event-address">
          <img className="icon" src={addressIcon} alt="None" />
          <div>{eventAddress}</div>
        </div>
        <div className="event-date">
          <img className="icon" src={dateIcon} alt="None" />
          <div>{eventDate}</div>
        </div>
        <div className="event-owner">
          <img className="icon" src={ownerIcon} alt="None" />
          <div>{eventOwner.name}</div>
        </div>
      </div>
      <div className="event-description">
        {eventDescription.split("\n").map((line, index) => {
          return <p key={index}>{line}</p>;
        })}
      </div>
      <Link to={`/tickets/${userID}/${eventId}`}>
        <button className="order-ticket-button">ORDER TICKET</button>
      </Link>
    </div>
  );
}

export default EventPage;
