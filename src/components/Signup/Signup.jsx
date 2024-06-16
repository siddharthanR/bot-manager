import React from 'react';
import { Button, Card, Form, Input, message } from 'antd';
import "../../App.css"
import axios from 'axios';
import { PRODUCTION_URL } from '../Constant';
import NavigationBarTemplate from '../NavigationBarTemplate/NavigationBarTemplate';
import { useNavigate } from 'react-router-dom';

const Signup = () => {

    const navigate = useNavigate()

    const onFinish = async (/** @type {any} */ requestBody) => {
        try {
            let responseData = await axios.post(`${PRODUCTION_URL}/auth/sign-up`, requestBody, {
                headers: {
                    "Access-Control-Allow-Origin": "*"
                }
            });
            if (responseData && responseData.data && responseData.data.success) {
                message.success("New user registered successfully")
                navigate("/login")
            }
        } catch (error) {
            message.error(error.message)
        }
    };

    const onFinishFailed = (/** @type {any} */ errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const goToLogin = () => {
        navigate("/login")
    }

    return (
        <>
            <NavigationBarTemplate />
            <Card
                className='card-styles'
                title={<span className='header-styles'>Register</span>}
                extra={<span onClick={goToLogin} style={{ color: "#1677FF", cursor: "pointer" }}>Existing User ?</span>}
                style={{ width: 500 }}
            >
                <Form
                    name="register-form"
                    layout='vertical'
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item
                        label="Name"
                        name="userName"
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
                        label="Password"
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Please enter your password!',
                            },
                        ]}
                    >
                        <Input.Password placeholder='Password' />
                    </Form.Item>

                    <Form.Item style={{ float: "right" }} >
                        <Button type="primary" htmlType="submit">
                            Register
                        </Button>
                    </Form.Item>
                </Form>
            </Card>
        </>
    )
};

export default Signup;