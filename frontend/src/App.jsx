import ProductCard from "./components/ProductCard.jsx";
import {useCallback, useEffect, useState} from "react";
import {createProduct, getProducts} from "./api/products.js";
import {Button, Form, message, Modal} from "antd";
import CreateForm from "./components/CreateForm.jsx";

function App() {
    const [products, setProducts] = useState([])
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [form] = Form.useForm();

    const fetchProducts = useCallback(async () => {
        const products = await getProducts();
        setProducts(products);
    }, []);

    useEffect(() => {
        fetchProducts();
    }, [fetchProducts]);

    const handleDelete = (id) => {
        setProducts(prev =>
            prev.filter(product => product.id !== id)
        );
    };

    const handleCreate = async (values) => {
        try {
            await createProduct(values);
            message.success("Product created successfully");

            form.resetFields();
            setIsModalOpen(false);
            await fetchProducts();

        } catch {
            message.error("Something went wrong");
        }
    };

    const showModal = () => {
        setIsModalOpen(true);
    };

    return (
        <div className={"m-5"}>
            <Button className={"block mx-auto w-full"} type="primary" onClick={showModal}>
                Create product
            </Button>
            <Modal
                title="Create product"
                open={isModalOpen}
                onCancel={() => setIsModalOpen(false)}
                onOk={() => form.submit()}
            >
                <CreateForm form={form} onFinish={handleCreate}/>
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
