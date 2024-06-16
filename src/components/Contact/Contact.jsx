import React from 'react';
import { Button, Card, Form, Input } from 'antd';
import "../../App.css"

const { TextArea } = Input

const Contact = () => {

    const onFinish = (/** @type {any} */ values) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (/** @type {any} */ errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <Card className='card-styles'
            title={<span className='header-styles'>Contact</span>}
            style={{ width: 500 }}
        >
            <Form
                name="basic"
                layout='vertical'
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                    name="name"
                    label="Name"
                >
                    <Input placeholder='Name' />
                </Form.Item>

                <Form.Item
                    name="email"
                    label="Email"
                >
                    <Input placeholder='Email' />
                </Form.Item>

                <Form.Item
                    name="subject"
                    label="Subject"
                >
                    <Input placeholder='Subject' />
                </Form.Item>

                <Form.Item
                    name="message"
                    label="Message"
                >
                    <TextArea rows={5} placeholder='Message' />
                </Form.Item>

                <Form.Item style={{ float: "right" }} >
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </Card>
    )
};

export default Contact;