import {Button, Card} from "antd";
import {deleteProduct} from "../api/products.js";


function ProductCard({id, name, description, image, onDelete, onDetail, onUpdate}) {

    const handleDelete = async () => {
        await deleteProduct(id);
        onDelete(id);
    };

    const handleGetDetail = async () => {
        onDetail(id)
    }

    const handleUpdate = async () => {
        onUpdate(id)
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
                    <Button className={"mr-3"} color="primary" variant="outlined" onClick={handleGetDetail}>
                        Details
                    </Button>
                    <Button color="purple" variant="outlined" onClick={handleUpdate}>
                        Update
                    </Button>
                </div>

            </Card>
        </>
    )
}

export default ProductCard