import axios from "axios";

const API = "http://localhost:8000/products";

export const getProducts = () => {
    return axios.get(API);
};

export const deleteProduct = (id) => {
    return axios.delete(`${API}/${id}`);
}