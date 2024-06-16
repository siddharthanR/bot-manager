import React from 'react';
import { Button, Card, Form, Input, message } from 'antd';
import "../../App.css"
import axios from 'axios';
import { PRODUCTION_URL } from '../Constant';
import NavigationBarTemplate from '../NavigationBarTemplate/NavigationBarTemplate';
import { useNavigate } from 'react-router-dom';

const ForgotPassword = () => {

    const navigate = useNavigate()

    const onFinish = async (/** @type {any} */ requestBody) => {
        try {
            await axios.post(`${PRODUCTION_URL}/auth/login`, JSON.stringify(requestBody));
        } catch (error) {
            message.error(error.message)
        }
    };

    const onFinishFailed = (/** @type {any} */ errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const goBackToLogin = () => {
        navigate("/login")
    }

    return (
        <>
            <NavigationBarTemplate />
            <Card
                className='card-styles'
                title={<span className='header-styles'>Forgot Password</span>}
                extra={<span onClick={goBackToLogin} style={{ color: "#1677FF", cursor: "pointer" }}>Back To Login</span>}
                style={{ width: 500 }}
            >
                <Form
                    name="forgot-password-form"
                    layout='vertical'
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item
                        label="Name"
                        name="name"
                        rules={[
                            {
                                required: true,
                                message: 'Please enter your name!',
                            },
                        ]}
                    >
                        <Input placeholder='Name' />
                    </Form.Item>

                    <Form.Item
                        label="Email"
                        name="email"
                        rules={[
                            {
                                required: true,
                                message: 'Please enter your email!',
                            },
                        ]}
                    >
                        <Input placeholder='Email' />
                    </Form.Item>

                    <Form.Item
                        label="New Password"
                        name="newpassword"
                        rules={[
                            {
                                required: true,
                                message: 'Please enter your new password!',
                            },
                        ]}
                    >
                        <Input.Password placeholder='Password' />
                    </Form.Item>

                    <Form.Item>
                        <Button style={{ float: "right" }} type="primary" htmlType="submit">
                            Save Password
                        </Button>
                    </Form.Item>


                </Form>
            </Card>
        </>
    )
};
export default ForgotPassword;