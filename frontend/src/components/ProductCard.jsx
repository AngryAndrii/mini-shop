import {Button, Card} from "antd";
import {deleteProduct} from "../api/products.js";


function ProductCard({id, name, description, image, onDelete, onDetail}) {

    const handleDelete = async () => {
        await deleteProduct(id);
        onDelete(id);
    };

    const handleGetDetail = async () => {
        onDetail(id)
    }

    return (
        <>
            <Card title={name} style={{width: 300}}
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
                <div>
                    <Button className={"mr-3"} color="danger" variant="outlined" onClick={handleDelete}>
                        Delete
                    </Button>
                    <Button color="primary" variant="outlined" onClick={handleGetDetail}>
                        Details
                    </Button>
                </div>

            </Card>
        </>
    )
}

export default ProductCard