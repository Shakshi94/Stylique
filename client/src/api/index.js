import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5050/api",
});

export  const userSignUp = async (data) => await API.post("/register", data,{ withCredentials: true });
export const userSignIn = async (data) => await API.post("/login", data,{ withCredentials: true });
export const userLogout = async () => await API.get("/logout",{ withCredentials: true });


export  const addProduct = async (data) => await API.post("/product/add", data,{ withCredentials: true });
// export const userSignIn = async (data) => await API.post("/login", data,{ withCredentials: true });
// export const userLogout = async () => await API.get("/logout",{ withCredentials: true });

export default API;