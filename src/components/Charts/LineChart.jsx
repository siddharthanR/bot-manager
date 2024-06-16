import React from 'react';
import ReactECharts from 'echarts-for-react';

const LineChart = () => {
    const option = {
        title: {
            text: 'System Idle time:(mins)',
            left: 'center'
        },
        xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                data: [10, 30, 38, 10, 49, 38, 59, 20],
                type: 'line'
            }
        ]
    };

    return <>
        <ReactECharts option={option} style={{ height: '400px', width: '100%' }} />
    </>

};

export default LineChart;