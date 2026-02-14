import {Button, Card} from "antd";


function ProductCard({name, description, image}) {
    return (
        <>
            <Card title={name} extra={<a href="#">More</a>} style={{width: 300}} hoverable
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
            </Card>
        </>
    )
}

export default ProductCard