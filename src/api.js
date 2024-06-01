import axios from "axios";

// const BASE_URL = "http://192.168.1.70:5462/api/";
const BASE_URL = "http://localhost:5462/api/";
export async function createNewEvent(data) {
  //   try {
  // Create FormData object
  const formData = new FormData();

  formData.append("managers", [data.managers]);
  formData.append("owner_id", data.owner_id);
  formData.append("public", data.public);
  formData.append("min_age", data.min_age);
  formData.append("photo", data.photo);
  formData.append("event_date", data.event_date);
  formData.append("location", data.location);
  formData.append("title", data.title);
  formData.append("description", data.description);

  // formData.append("new_event", JSON.stringify(_data));
  console.log(formData);
  axios
    .post(`${BASE_URL}events`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    .then((response) => {
      console.log("Response:", response.data);
    })
    .catch((error) => {
      console.error("Error sending data:", error);
    });

  // Send POST request
  //     const response = await axios.post(`${BASE_URL}events`, formData, {
  //       headers: {
  //         "Content-Type": "multipart/form-data", // Ensure proper content type for file upload
  //       },
  //     });

  //     console.log("Response:", response.data);
  //     return response.data;
  //   } catch (error) {
  //     console.error("Error sending data:", error);
  //     throw error;
  //   }
}
