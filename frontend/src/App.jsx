import ProductCard from "./components/ProductCard.jsx";
import {useEffect, useState} from "react";
import {getProducts} from "./api/products.js";
import {Button, Modal} from "antd";
import CreateForm from "./components/CreateForm.jsx";

function App() {
    const [products, setProducts] = useState([])
    const [isModalOpen, setIsModalOpen] = useState(false)

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

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    return (
        <div className={"m-5"}>
            <Button className={"block mx-auto w-1/2"} type="primary" onClick={showModal}>
                Create product
            </Button>
            <Modal
                title="Create product"
                closable={{'aria-label': 'Custom Close Button'}}
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
            >
                <CreateForm />
            </Modal>
            <div className={"flex flex-wrap gap-4 mt-5"}>
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
        </div>

    )
}

export default App
