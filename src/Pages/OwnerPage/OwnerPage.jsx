import { useEffect, useState } from "react";
import "./OwnerPage.css";
import { useParams } from "react-router-dom";
import plusIcon from "../../img/plus.svg";
import { Link } from "react-router-dom";
import EventBox from "./component/EventBox";

function OwnerPage() {
  const { ownerId } = useParams();
  const [clientName, setClientName] = useState("");
  const [eventsList, setEventList] = useState([]);
  useEffect(() => {
    //ToDo get from BE
    setClientName("מתן ארד");
    setEventList([123, 456, 789, 897]);
  }, []);
  return (
    <div className="OwnerPage">
      <div className="Heder">
        {/* <div className="welcome">Create New Event</div> */}
        <Link to={`/createEvent/${ownerId}`}>
          <img src={plusIcon} className="add-icon"></img>
        </Link>
      </div>
      {eventsList.map((id) => {
        return <EventBox id={id} key={id} />;
      })}
    </div>
  );
}

export default OwnerPage;
