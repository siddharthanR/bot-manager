import React from 'react';
import { Button, Card, Form, Input, message } from 'antd';
import "../../App.css"
import axios from 'axios';
import { PRODUCTION_URL } from '../Constant';
import NavigationBarTemplate from '../NavigationBarTemplate/NavigationBarTemplate';
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const navigate = useNavigate()

    const onFinish = async (/** @type {any} */ requestBody) => {
        try {
            let responseData = await axios.post(`${PRODUCTION_URL}/auth/login`, requestBody, {
                headers: {
                    "Access-Control-Allow-Origin": "*"
                }
            });
            if (responseData.status === 200 || responseData.status === 202) {
                message.success(`Bot Manager welcomes you ${requestBody.userName}`)
                sessionStorage.setItem("token", responseData["data"]["accessToken"])
                sessionStorage.setItem("username", requestBody.userName)
                navigate("/home")
            }
            navigate("/home")
        } catch (error) {
            message.error(error.message)
        }
    };

    const onFinishFailed = (/** @type {any} */ errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const goToRegisterUser = () => {
        navigate("/signup")
    }

    const goToForgotPassword = () => {
        navigate("/forgot-password")
    }

    return (
        <>
            <NavigationBarTemplate />
            <Card
                className='card-styles'
                title={<span className='header-styles'>Login</span>}
                style={{ width: 500 }}
                extra={<span onClick={goToRegisterUser} style={{ color: "#1677FF", cursor: "pointer" }}>Register New User ?</span>}
            >
                <Form
                    name="login-form"
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

                    <span onClick={goToForgotPassword} style={{ color: "#1677FF", cursor: "pointer" }}>Forgot password ?</span>

                    <Form.Item>
                        <Button style={{ float: "right" }} type="primary" htmlType="submit">
                            Login
                        </Button>
                    </Form.Item>


                </Form>
            </Card>
        </>
    )
};
export default Login;