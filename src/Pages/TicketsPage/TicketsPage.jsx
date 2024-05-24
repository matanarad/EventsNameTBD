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
import { useForm } from "react-hook-form";

const ticketHolderQuestionsList = [
  {
    name: "Full Name",
    type: "text",
  },
  {
    name: "Age",
    type: "number",
  },
  {
    name: "Phone Number",
    type: "tel",
  },
];
function TicketsPage() {
  const [eventImage, setEventImage] = useState("");
  const [eventOwner, setEventOwner] = useState({});
  const [eventAddress, setEventAddress] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [ticketsList, setTicketsList] = useState([]);
  const [formData, setFormData] = useState({}); // State to hold form data
  const [eventMinAge, setEventMinAge] = useState(0);
  const { eventId, userID } = useParams();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  function calculateTotalPrice(tickets) {
    let totalPrice = 0;
    tickets.forEach((ticket) => {
      totalPrice += parseInt(ticket.price) * parseInt(ticket.quantity);
    });

    return totalPrice;
  }

  function calculateNumberOfTickets(tickets) {
    let numberOfTickets = 0;
    tickets.forEach((ticket) => {
      numberOfTickets += parseInt(ticket.quantity);
    });

    return numberOfTickets;
  }

  useEffect(() => {
    // ToDo Get From BE - eventId
    setEventMinAge(18);
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

  const onSubmit = (data) => {
    console.log(ticketsList);

    const ticketData = [];
    // Group the form data by ticket index
    const groupedData = Object.entries(data).reduce((acc, [key, value]) => {
      const [fieldName, index] = key.split("_");
      acc[index] = { ...acc[index], [fieldName]: value };
      return acc;
    }, {});

    // Map over the grouped data and transform it into the desired format
    Object.values(groupedData).forEach((ticket) => {
      const formattedTicket = {
        "Full Name": ticket["Full Name"],
        Age: parseInt(ticket["Age"]),
        "Phone Number": ticket["Phone Number"],
      };
      ticketData.push(formattedTicket);
    });

    console.log(ticketData); // Output the transformed data
  };

  return (
    <div className="TicketsPage">
      <Link to={`/event/${userID}/${eventId}`}>
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
      <form onSubmit={handleSubmit(onSubmit)}>
        {[...Array(calculateNumberOfTickets(ticketsList))].map((_, index) => {
          const ticketIndex = index + 1;
          return (
            <div className="tickets-box" key={ticketIndex}>
              <div className="tickets-title">{ticketIndex}. Ticket info</div>
              {ticketHolderQuestionsList.map((question) => {
                const questionKey = `${question.name}_${ticketIndex}`;
                return (
                  <div className="ticket-question" key={questionKey}>
                    <div className="ticket-input-container">
                      <input
                        type={question.type}
                        {...register(questionKey, {
                          required: true,
                          ...(question.name === "Age" && { min: eventMinAge }),
                        })}
                        className={`input ${
                          errors[questionKey] ? "error" : ""
                        }`}
                        onChange={(e) => {
                          setFormData({
                            ...formData,
                            [questionKey]: e.target.value,
                          });
                        }}
                      />
                      {errors[questionKey] && (
                        <div className="ticket-err-cut">
                          {errors[questionKey].type === "required"
                            ? "This field is required."
                            : `Minimum age is ${eventMinAge}.`}
                        </div>
                      )}
                      <div className="ticket-cut">{question.name}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          );
        })}

        <button type="submit" className="order-ticket-button">
          GO TO CHECKOUT - {calculateTotalPrice(ticketsList)}₪
        </button>
      </form>
    </div>
  );
}

export default TicketsPage;
