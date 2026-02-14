import {Button, Card} from "antd";


function ProductCard() {
  return (
    <>
    <Card title="Default size card" extra={<a href="#">More</a>} style={{ width: 300 }}>
      <p>Card content</p>
      <p>Card content</p>
      <p>Card content</p>
    </Card>
    </>
  )
}

export default ProductCard