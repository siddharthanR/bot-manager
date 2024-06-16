import React, { useState } from 'react';
import { Avatar, Layout, Menu, Popover } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import './ParentLayout.css'
import { Outlet, useNavigate } from 'react-router-dom';

const { Header } = Layout;

const ParentLayout = () => {

    const navigate = useNavigate()

    const [currentScreen, setCurrentScreen] = useState(['1'])

    const renderNavigation = () => {
        return [
            { title: "Home", key: 1 },
            { title: "Dashboard", key: 2 },
            { title: "Bots", key: 3 },
            { title: "Contact", key: 4 },
        ].map((navigation) => ({
            key: navigation.key,
            label: `${navigation.title}`,
        }));
    }

    const onNavigationChange = (/** @type {any} */ value) => {
        setCurrentScreen(value.keyPath)
        switch (Number(value.key)) {
            case 1:
                navigate("/home")
                break
            case 2:
                navigate("/dashboard")
                break
            case 3:
                navigate("/bot")
                break;
            case 4:
                navigate("/contact")
                break;
            default:
                navigate("/")
                break
        }
    }

    const initiateLogOut = () => {
        sessionStorage.clear()
        navigate("/login")
    }

    const content = (
        <div>
            <p style={{ cursor: "pointer" }} onClick={initiateLogOut}>Log out</p>
        </div>
    )

    return (
        <Layout>
            <Header
                style={{
                    display: 'flex',
                    alignItems: 'center',
                }}
            >
                <div className='title-style'>BOT MANAGER</div>
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={currentScreen}
                    onSelect={onNavigationChange}
                    items={renderNavigation()}
                    style={{
                        flex: 1,
                        minWidth: 0,
                    }}
                />
                <Popover content={content} title={<>Welcome {sessionStorage.getItem("username")}</>} trigger="click">
                    <Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
                </Popover>

            </Header>
            <Outlet />
        </Layout>
    );
};

export default ParentLayout;