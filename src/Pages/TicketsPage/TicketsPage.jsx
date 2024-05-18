import { useEffect, useState } from "react";
import "./TicketsPage.css";
import tempEventImage from "../../img/Temp Event Img.png";
import backIcon from "../../img/backIcon.svg";
import addressIcon from "../../img/pointonmap.svg";
import dateIcon from "../../img/calendar.svg";
import ownerIcon from "../../img/ownerIcon.svg";
import Ticket from "./components/Ticket";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

function TicketsPage() {
  const [eventImage, setEventImage] = useState("");
  const [eventOwner, setEventOwner] = useState({});
  const [eventAddress, setEventAddress] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [ticketsList, setTicketsList] = useState([]);
  const { eventId } = useParams();

  function calculateTotalPrice(tickets) {
    let totalPrice = 0;
    tickets.forEach((ticket) => {
      totalPrice += parseInt(ticket.price) * parseInt(ticket.quantity);
    });

    return totalPrice;
  }

  useEffect(() => {
    // ToDo Get From BE - eventId
    setEventImage(tempEventImage);
    setEventOwner({
      name: "Matan Arad",
      ID: "123",
    });
    setEventAddress("Maslak, 34485 Sarıyer/İstanbul, Türkiye");
    setEventDate("Aug 31, 2024 4:00 PM");
    setTicketsList([
      { name: "low", price: "10", quantity: 0, max: 2 },
      { name: "standard", price: "100", quantity: 0, max: 5 },
      { name: "high", price: "1000", quantity: 0, max: 10 },
    ]);
  }, []);

  const updateQuantity = (ticketName, newQuantity) => {
    setTicketsList((prevTicketsList) =>
      prevTicketsList.map((ticket) =>
        ticket.name === ticketName
          ? { ...ticket, quantity: newQuantity }
          : ticket
      )
    );
  };
  return (
    <div className="TicketsPage">
      <Link to={`/event/${eventId}`}>
        <button className="return-bar">
          <img className="icon" src={backIcon} alt="None" />
          <div>Return to event page</div>
        </button>
      </Link>
      <div className="event-box">
        <img className="event-box-image" src={eventImage} alt="None" />
        <div className="event-info">
          <div className="event-box-info">
            <img className="icon" src={addressIcon} alt="None" />
            <div>{eventAddress}</div>
          </div>
          <div className="event-box-info">
            <img className="icon" src={dateIcon} alt="None" />
            <div>{eventDate}</div>
          </div>
          <div className="event-box-info">
            <img className="icon" src={ownerIcon} alt="None" />
            <div>{eventOwner.name}</div>
          </div>
        </div>
      </div>
      <div className="tickets-box">
        <div className="tickets-title">Tickets types</div>
        {ticketsList.map((ticket) => {
          return (
            <Ticket
              key={ticket.name}
              price={ticket.price}
              name={ticket.name}
              quantity={ticket.quantity}
              max={ticket.max}
              updateQuantity={updateQuantity}
            />
          );
        })}
      </div>
      <button
        className="order-ticket-button"
        onClick={() => {
          //ToDo Move to buy page
          console.log(ticketsList);
        }}
      >
        GO TO CHECKOUT - {calculateTotalPrice(ticketsList)}₪
      </button>
    </div>
  );
}

export default TicketsPage;
