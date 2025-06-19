import axios from "axios";

const API = axios.create({
  baseURL: "https://stylique-backend.onrender.com/api",
  // baseURL: "http://localhost:5050/api"
});

export  const userSignUp = async (data) => await API.post("/register", data,{ withCredentials: true });
export const userSignIn = async (data) => await API.post("/login", data,{ withCredentials: true });
export const userLogout = async () => await API.get("/logout",{ withCredentials: true });

export const showProducts = async () => await API.get("/showproducts",{ withCredentials: true });
export const showProduct = async (id) => 
await API.get(`/showproducts/${id}`, { withCredentials: true });


export  const addProduct = async (data) => await API.post("/product/add", data,{ withCredentials: true });
export  const editProduct = async (id,data) => await API.put(`/product/edit/${id}`,data,{ withCredentials: true });
export  const deleteProduct = async (id) => await API.delete(`/product/delete/${id}`,{ withCredentials: true });

export default API;
