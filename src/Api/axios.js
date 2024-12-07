import axios from "axios";

const axiosInstance = axios.create({
  //local instance of firebase functions
  // baseURL: "http://localhost:3679/clone-253c3/us-central1/api",

  // deployed version of firebase function 
  // baseURL: "http://127.0.0.1:5001/clone-253c3/us-central1/api",

  // deployed version of amazon server on render.com
  baseURL: "https://amazon-api-deploy-4tbk.onrender.com/",
});

export { axiosInstance };
