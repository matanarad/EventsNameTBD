import { useState } from "react";
import "./CreateEvent.css";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import backIcon from "../../img/backIcon.svg";

function CreateEvent() {
  const { userID } = useParams();

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

  const [selectedFile, setSelectedFile] = useState(null);

  const [preview, setPreview] = useState("");

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
      setPreview(URL.createObjectURL(file));
    } else {
      setSelectedFile(null);
      setPreview("");
    }
  };

  const questionsList = [
    {
      name: "Event Title",
      type: "text",
    },
    {
      name: "Event Date",
      type: "date",
    },
    {
      name: "Event Time",
      type: "time",
    },
    {
      name: "Event Description",
      type: "text",
    },
    {
      name: "Event Address",
      type: "text",
    },
    {
      name: "Event minimum age",
      type: "number",
    },
  ];
  return (
    <div className="CreateEvent">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Link to={`/MyEventsPage/${userID}`}>
          <button className="return-bar">
            <img className="icon" src={backIcon} alt="None" />
            {/* <div>Return to event page</div> */}
          </button>
        </Link>
        <div className="title">Create New Event</div>
        {questionsList.map((question) => {
          return (
            <div className="input-container ic2" key={question.name}>
              <input
                {...register(question.name, { required: true })}
                id={question.name}
                className="input"
                type={question.type}
                placeholder=" "
              />
              <div className="cut">{question.name}</div>
              <label className="placeholder">{question.name}</label>
            </div>
          );
        })}
        <div className="input-container ic2">
          <input
            {...register("image_file", { required: true })}
            id="file"
            className="file-input input"
            type="file"
            onChange={handleFileChange}
          />
          <div className="cut">{"Choose Event Image"}</div>
          <label className="placeholder">{"Choose Event Image"}</label>

          <label htmlFor="file" className="custom-file-label">
            {selectedFile ? selectedFile.name : "Choose Event Image"}
          </label>
        </div>
        <button type="submit" className="submit">
          Submit
        </button>
      </form>
      {preview && <img src={preview} alt="Preview" className="preview-image" />}
    </div>
  );
}

export default CreateEvent;
