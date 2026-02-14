import ProductCard from "./components/ProductCard.jsx";
import {useEffect, useState} from "react";
import {getProducts} from "./api/products.js";

function App() {
    const [products, setProducts] = useState([])

    const fetch_products = () => {
        getProducts().then(response => {
            setProducts(response.data)
        })
    }

    useEffect(() => {
        fetch_products()
    }, []);

    const handleDelete = (id) => {
        setProducts(prev =>
            prev.filter(product => product.id !== id)
        );
    };

    return (
        <div className={"flex flex-wrap gap-4"}>
            {products.map(product => (
                <ProductCard
                    key={product.id}
                    id={product.id}
                    name={product.name}
                    description={product.description}
                    image={product.image}
                    onDelete={handleDelete}
                />
            ))}
        </div>
    )
}

export default App
