import {Button, Form, Input, InputNumber} from "antd";


const layout = {
    labelCol: {span: 8},
    wrapperCol: {span: 16},
};
const validateMessages = {
    required: '${label} is required!',
    types: {
        email: '${label} is not a valid email!',
        number: '${label} is not a valid number!',
    },
    number: {
        range: '${label} must be between ${min} and ${max}',
    },
};
const onFinish = values => {
    console.log(values);
};


function CreateForm() {
    return (<>        <Form
            {...layout}
            name="nest-messages"
            onFinish={onFinish}
            style={{maxWidth: 600}}
            validateMessages={validateMessages}
        >
            <Form.Item name={['item', 'name']} label="Name" rules={[{required: true}]}>
                <Input/>
            </Form.Item>
            <Form.Item name={['item', 'description']} label="Description">
                <Input.TextArea/>
            </Form.Item>
            <Form.Item name={['item', 'price']} label="Price" rules={[
                {required: true, message: 'Enter price'},
                {
                    pattern: /^\d+(\.\d{1,2})?$/,
                    message: 'Price must be in format 12.99',
                },
            ]}>
                <InputNumber/>
            </Form.Item>
            <Form.Item name={['item', 'stock']} label="Stock" rules={[{type: 'integer', min: 0, max: 100000}]}>
                <InputNumber/>
            </Form.Item>
            <Form.Item name={['item', 'category']} label="Category" rules={[{required: true}]}>
                <Input/>
            </Form.Item>
            <Form.Item name={['item', 'image']} label="Image url">
                <Input/>
            </Form.Item>
            <Form.Item label={null}>
                <Button type="primary" htmlType="submit">
                    Create
                </Button>
            </Form.Item>
        </Form>
        </>

    )
}

export default CreateForm