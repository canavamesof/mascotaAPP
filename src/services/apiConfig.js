import axios from "axios";

export default () => {
  return axios.create({
    baseURL: "http://localhost:3000", // la ruta sobre la cual esta corriendo json-server
    headers: {
      'Accept': "application/json",
      "Content-Type": "application/json",
    },
  });
};
