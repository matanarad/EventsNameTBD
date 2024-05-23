import { useState } from "react";
import "./CreateEvent.css";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import backIcon from "../../img/backIcon.svg";

import React from "react";
import { useForm, useFieldArray } from "react-hook-form";
import config from "../../config";
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
    name: "Event Start Time",
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
];

function CreateEvent() {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [preview, setPreview] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const { userID } = useParams();

  const { fields, append, remove } = useFieldArray({
    control,
    name: "phoneNumbers",
  });

  const onSubmit = (data) => {
    console.log(data);
  };

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
  return (
    <div className="CreateEvent">
      <Link to={`/MyEventsPage/${userID}`}>
        <button className="return-bar">
          <img className="icon" src={backIcon} alt="None" />
          {/* <div>Return to event page</div> */}
        </button>
      </Link>
      <form onSubmit={handleSubmit(onSubmit)} className="CreateEvent">
        {/* Render questions from the questions list */}
        <div className="title">Create New Event</div>
        {questionsList.map((question, index) => (
          <div className="input-container" key={question.name}>
            <input
              type={question.type}
              {...register(question.name, { required: true })}
              className={`input ${errors[question.name] ? "error" : ""}`}
            />
            <div className="cut">{question.name}</div>
          </div>
        ))}

        {/* Input for list of phone numbers */}
        <div style={{ marginTop: "2.5vh" }}>
          <label>Add Managers By Phone Numbers</label>
          {fields.map((field, index) => (
            <div
              key={index}
              style={{
                display: "grid",
                gridTemplateColumns: "1fr max-content",
                gap: "2vw",
                marginTop: "2.5vh",
              }}
            >
              <input
                type="tel"
                className={`input ${
                  errors.phoneNumbers?.[index] ? "error" : ""
                }`}
                {...register(`phoneNumbers.${index}`, { required: true })}
                defaultValue={field.value} // Populate existing values
              />
              <button
                type="button"
                onClick={() => remove(index)}
                className="remove-button"
              >
                Remove
              </button>
            </div>
          ))}
          {fields.length < config.maxNumberOfMangers && (
            <button
              type="button"
              onClick={() => append("")}
              className="add-phone-number-button"
            >
              Add Phone Number
            </button>
          )}
        </div>
        {/* Input for image */}

        <div className="input-container">
          <input
            {...register("image_file", { required: true })}
            id="file"
            className="file-input input"
            type="file"
            onChange={handleFileChange}
          />
          <label htmlFor="file" className="custom-file-label">
            {selectedFile ? selectedFile.name : "Choose Event Image"}
          </label>
        </div>
        {preview && (
          <img src={preview} alt="Preview" className="preview-image" />
        )}

        {/* Submit button */}
        <button type="submit" className="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default CreateEvent;
