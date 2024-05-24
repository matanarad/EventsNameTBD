import { useEffect, useState } from "react";
import "./MyEventsPage.css";
import { useParams } from "react-router-dom";
import plusIcon from "../../img/plus.svg";
import { Link } from "react-router-dom";
import EventBox from "./component/EventBox";

function MyEventsPage() {
  const { userID } = useParams();
  const [eventsList, setEventList] = useState([]);
  const [isQRPopUpActive, setIsQRPopUpActive] = useState({
    status: false,
    QR: "",
  });
  const [isCancelPopUpActive, setIsCancelPopUpActive] = useState({
    status: false,
    transactionId: "",
  });

  useEffect(() => {
    //ToDo get from BE
    // {
    //   ID: id
    //   relationship: owner, manager, member
    // }
    setEventList([
      { ID: 124, relationship: "owner" },
      { ID: 125, relationship: "manager" },
      { ID: 1233, relationship: "member" },
      { ID: 123, relationship: "member" },
    ]);
  }, []);

  return (
    <div className="MyEventsPage">
      {isQRPopUpActive.status ? (
        <div
          className="popup-overlay"
          onClick={() => {
            setIsQRPopUpActive({
              status: false,
              QR: "",
            });
          }}
        >
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <img src={isQRPopUpActive.QR} alt="Popup" className="popup-image" />
          </div>
        </div>
      ) : (
        ""
      )}
      {isCancelPopUpActive.status ? (
        <div
          className="popup-overlay"
          onClick={() => {
            setIsCancelPopUpActive({
              status: false,
              transactionId: "",
            });
          }}
        >
          <div
            className="cancel-popup-content"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="popup-message">
              Are you sure you want to cancel the order?
            </div>
            <div className="popup-buttons">
              <button
                className="confirm-button"
                onClick={() => {
                  console.log(
                    "ToDo cancel order ->",
                    isCancelPopUpActive.transactionId
                  );
                }}
              >
                Yes
              </button>
              <button
                className="cancel-button"
                onClick={() => {
                  setIsCancelPopUpActive({
                    status: false,
                    transactionId: "",
                  });
                }}
              >
                No
              </button>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
      <Link to={`/createEvent/${userID}`}>
        <img src={plusIcon} className="add-icon" alt="None"></img>
      </Link>
      {eventsList.map((event) => {
        return (
          <EventBox
            eventID={event.ID}
            key={event.ID}
            relationship={event.relationship}
            setIsQRPopUpActive={setIsQRPopUpActive}
            setIsCancelPopUpActive={setIsCancelPopUpActive}
          />
        );
      })}
    </div>
  );
}

export default MyEventsPage;
