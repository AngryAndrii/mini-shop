import {Form, Input, InputNumber} from "antd";


const layout = {
    labelCol: {span: 8},
    wrapperCol: {span: 16},
};
const validateMessages = {
    required: '${label} is required!',
    types: {
        number: '${label} is not a valid number!',
    },
};



function CreateForm({ form, onFinish }) {
    return (
        <Form
            form={form}
            {...layout}
            name="create-product"
            onFinish={onFinish}
            style={{ maxWidth: 600 }}
            validateMessages={validateMessages}
        >
            <Form.Item name="name" label="Name" rules={[{ required: true }]}>
                <Input />
            </Form.Item>

            <Form.Item name="description" label="Description" rules={[{ required: true }]}>
                <Input.TextArea />
            </Form.Item>

            <Form.Item
                name="price"
                label="Price"
                rules={[
                    { required: true, message: 'Enter price' },
                    {
                        pattern: /^\d+(\.\d{1,2})?$/,
                        message: 'Price must be in format 12.99',
                    },
                ]}
            >
                <InputNumber step={0.01} />
            </Form.Item>

            <Form.Item
                name="stock"
                label="Stock"
                rules={[{ type: 'integer', min: 0, max: 100000, required: true }]}
            >
                <InputNumber />
            </Form.Item>

            <Form.Item name="category" label="Category" rules={[{ required: true }]}>
                <Input />
            </Form.Item>

            <Form.Item name="image" label="Image url" rules={[{ required: true }]}>
                <Input />
            </Form.Item>
        </Form>
    );
}
export default CreateForm