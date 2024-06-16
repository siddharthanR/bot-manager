import React from 'react';
import ReactECharts from 'echarts-for-react';

const BarChart = () => {
    const option = {
        title: {
            text: 'Bot Downtime:(mins)',
            left: 'center'
        },
        xAxis: {
            type: 'category',
            data: ['Bot 1', 'Bot 2', 'Bot 3', 'Bot 4', 'Bot 5']
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                data: [10, 30, 38, 10, 49, 38, 59, 20],
                type: 'bar'
            }
        ]
    };

    return <>
        <ReactECharts option={option} style={{ height: '400px', width: '100%' }} />
    </>

};

export default BarChart;