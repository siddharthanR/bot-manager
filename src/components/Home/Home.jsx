import React from 'react';
import { Card, Table, Tag } from 'antd';
import "../../App.css"

const columns = [
    {
        title: 'Date',
        dataIndex: 'date',
        key: 'date',
    },
    {
        title: 'Time',
        dataIndex: 'time',
        key: 'time',
    },
    {
        title: 'Bot',
        dataIndex: 'bot',
        key: 'bot',
    },
    {
        title: 'Action',
        key: 'action',
        dataIndex: 'action',
        render: (/** @type {any} */ action) => (
            action === 'Start' ? <>
                <Tag color={"green"} key={action}>
                    {action.toUpperCase()}
                </Tag>
            </> : <>
                <Tag color={"volcano"} key={action}>
                    {action.toUpperCase()}
                </Tag>
            </>
        )
    },
    {
        title: 'Comments',
        key: 'comments',
        dataIndex: 'comments',
    },
]

const data = [
    { key: 1, date: '24 May 2024', time: '12:00 AM', bot: 'Bot 1', action: 'Start', comments: "Wait until further notice from the leader" },
    { key: 2, date: '25 May 2024', time: '13:00 PM', bot: 'Bot 2', action: 'Start', comments: "Wait until further notice from the leader" },
    { key: 3, date: '26 May 2024', time: '14:00 PM', bot: 'Bot 3', action: 'Stop', comments: "Wait until further notice from the leader" },
    { key: 4, date: '27 May 2024', time: '15:00 PM', bot: 'Bot 4', action: 'Start', comments: "Wait until further notice from the leader" },
    { key: 5, date: '28 May 2024', time: '16:00 PM', bot: 'Bot 5', action: 'Stop', comments: "Wait until further notice from the leader" },
    { key: 6, date: '29 May 2024', time: '17:00 PM', bot: 'Bot 6', action: 'Start', comments: "Wait until further notice from the leader" },
    { key: 7, date: '30 May 2024', time: '18:00 PM', bot: 'Bot 7', action: 'Stop', comments: "Wait until further notice from the leader" },
    { key: 8, date: '31 May 2024', time: '19:00 PM', bot: 'Bot 8', action: 'Stop', comments: "Wait until further notice from the leader" },
    { key: 8, date: '01 Jun 2024', time: '20:00 PM', bot: 'Bot 9', action: 'Start', comments: "Wait until further notice from the leader" },
]

const App = () => <Card className='container-styles' title={<div style={{ fontSize: "30px", fontWeight: "bold", textAlign: "center" }}>Your Schedule</div>}>
    <Table columns={columns} dataSource={data} /></Card>;

export default App;