import ProductCard from "./components/ProductCard.jsx";
import axios from "axios";
import {useEffect, useState} from "react";

function App() {
    const [products, setProducts] = useState([])
    
const fetch_products = () => {
    axios.get("http://localhost:8000/products")
        .then(response => {
            setProducts(response.data) // <-- ось головне
        })
}

    useEffect(() => {
        fetch_products()
    }, []);

    return (
 <div className={"flex flex-wrap gap-4"}>
        {products.map(product => (
            <ProductCard
                key={product.id}
                name={product.name}
                description={product.description}
                image={product.image}
            />
        ))}
    </div>
    )
}

export default App
