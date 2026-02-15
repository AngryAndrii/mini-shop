import axios from "axios";

const API = "http://localhost:8000/products";

export const getProducts = async () => {
    const { data } = await axios.get(API);
    return data;
};

export const createProduct = async (values) => {
    const { data } = await axios.post(API, values);
    return data;
};

export const deleteProduct = async (id) => {
    await axios.delete(`${API}/${id}`);
};