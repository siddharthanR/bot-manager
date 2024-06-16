import React from 'react';
import ReactECharts from 'echarts-for-react';

const PieChart = () => {
    const option = {
        title: {
            text: 'Bot Usage',
            left: 'center'
        },
        tooltip: {
            trigger: 'item'
        },
        legend: {
            orient: 'vertical',
            left: 'left'
        },
        series: [
            {
                name: 'Access From',
                type: 'pie',
                radius: '50%',
                data: [
                    { value: 33, name: 'Bot 1' },
                    { value: 40, name: 'Bot 2' },
                    { value: 11, name: 'Bot 3' },
                    { value: 5, name: 'Bot 4' },
                    { value: 11, name: 'Bot 5' }
                ],
                emphasis: {
                    itemStyle: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ]
    };

    return <>
        <ReactECharts option={option} style={{ height: '400px', width: '100%' }} />
    </>

};

export default PieChart;