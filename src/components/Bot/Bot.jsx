import React from 'react';
import { Button, Card, DatePicker, Form, Input, Select } from 'antd';
import "../../App.css"

const { TextArea } = Input

const { Option } = Select

const Bot = () => {

    const onFinish = (/** @type {any} */ values) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (/** @type {any} */ errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <Card className='card-styles'
            title={<span className='header-styles'>Bot</span>}
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
                    name="bot"
                    label="Name"
                >
                    <Select
                        placeholder="Select a bot"
                        allowClear
                    >
                        <Option value="bot_1">Bot 1</Option>
                        <Option value="bot_2">Bot 2</Option>
                        <Option value="bot_3">Bot 3</Option>
                        <Option value="bot_4">Bot 4</Option>
                    </Select>
                </Form.Item>

                <Form.Item
                    label="Date Time"
                    name="datetime"
                >
                    <DatePicker style={{ width: 400 }} />
                </Form.Item>

                <Form.Item
                    name="task"
                    label="Task"
                >
                    <Input placeholder='What do you want the bot to do' />
                </Form.Item>

                <Form.Item
                    name="leader"
                    label="Leader"
                >
                    <Input placeholder='Notify Leader' />
                </Form.Item>

                <Form.Item
                    name="message"
                    label="Message"
                >
                    <TextArea rows={5} placeholder='Comments' />
                </Form.Item>

                <Form.Item style={{ float: "right" }} >
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </Card>)
};

export default Bot;