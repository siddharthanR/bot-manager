import React from 'react';
import LineChart from '../Charts/LineChart';
import PieChart from '../Charts/PieChart';
import BarChart from '../Charts/BarChart';
import "../../App.css"
import { Card, Col, Row } from 'antd';

const Dashboard = () => {

    return (
        <>
            <Row>
                <Col span={12}>
                    <Card className='container-styles'><BarChart /></Card>
                </Col>
                <Col span={12}>
                    <Card className='container-styles'><PieChart /></Card>
                </Col>
            </Row>
            <Card className='container-styles'><LineChart /></Card>
        </>
    )
};

export default Dashboard;