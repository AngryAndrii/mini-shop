import {Button, Card} from "antd";
import {deleteProduct} from "../api/products.js";


function ProductCard({id, name, description, image, onDelete}) {

    const handleDelete = async () => {
        await deleteProduct(id);
        onDelete(id);
    };

    return (
        <>
            <Card title={name} style={{width: 300}} hoverable
                  cover={
                      <img
                          draggable={false}
                          alt={name}
                          src={image}
                          onError={(e) => {
                              e.target.src = "/mock_product.jpg"
                          }}
                      />
                  }>
                <p>{description}</p>
                <Button color="danger" variant="outlined" onClick={handleDelete}>
                    Delete
                </Button>
            </Card>
        </>
    )
}

export default ProductCard