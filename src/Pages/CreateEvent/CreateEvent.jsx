import { useState } from "react";
import "./CreateEvent.css";
import { useForm } from "react-hook-form";

function CreateEvent() {
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
          <div className="cut">{"Choose File"}</div>
          <label className="placeholder">{"Choose File"}</label>

          <label htmlFor="file" className="custom-file-label">
            {selectedFile ? selectedFile.name : "Choose File"}
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
