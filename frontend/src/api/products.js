import axios from "axios";

// const API = "http://localhost:8000/products";

const API = import.meta.env.VITE_API_URL

export const getProduct = async (id) => {
    const {data} = await axios.get(`${API}/${id}`)
    return data
}

export const getProducts = async () => {
    const {data} = await axios.get(API);
    return data;
};

export const createProduct = async (values) => {
    const {data} = await axios.post(API, values);
    return data;
};

export const deleteProduct = async (id) => {
    await axios.delete(`${API}/${id}`);
};

export const searchProducts = async (name) => {
    const response = await fetch(
        `${API}/search?name=${name}`
    );

    if (!response.ok) {
        throw new Error("Search failed");
    }

    return await response.json();
};

export const updateProduct = async (id, values) => {
    const { data } = await axios.put(`${API}/${id}`, values);
    return data;
};