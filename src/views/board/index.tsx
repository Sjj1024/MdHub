import * as echarts from 'echarts'
import { useRef, useEffect } from 'react'
import './index.scss'

export default function MainBoard() {
    const colRef = useRef(null)
    const pieRef = useRef(null)
    const gaugeRef = useRef(null)
    const echartInit = () => {
        // 基于准备好的dom，初始化echarts实例
        const myChart = echarts.init(colRef.current)
        // 绘制图表
        myChart.setOption({
            title: {
                text: 'ECharts 入门示例',
            },
            tooltip: {},
            xAxis: {
                data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子'],
            },
            yAxis: {},
            series: [
                {
                    name: '销量',
                    type: 'bar',
                    data: [5, 20, 36, 10, 10, 20],
                },
            ],
        })
    }

    const pieInit = () => {
        const myChart = echarts.init(pieRef.current)
        const option = {
            title: {
                text: 'Referer of a Website',
                subtext: 'Fake Data',
                left: 'center',
            },
            tooltip: {
                trigger: 'item',
            },
            legend: {
                orient: 'vertical',
                left: 'left',
            },
            series: [
                {
                    name: 'Access From',
                    type: 'pie',
                    radius: '50%',
                    data: [
                        { value: 1048, name: 'Search Engine' },
                        { value: 735, name: 'Direct' },
                        { value: 580, name: 'Email' },
                        { value: 484, name: 'Union Ads' },
                        { value: 300, name: 'Video Ads' },
                    ],
                    emphasis: {
                        itemStyle: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)',
                        },
                    },
                },
            ],
        }

        option && myChart.setOption(option)
    }

    // 仪表盘
    const gaugeInit = () => {
        const myChart = echarts.init(gaugeRef.current)
        const option = {
            title: {
                text: '速度仪表盘',
                subtext: '假数据',
                left: 'center',
            },
            tooltip: {
                formatter: '{a} <br/>{b} : {c}%',
            },
            series: [
                {
                    name: 'Pressure',
                    type: 'gauge',
                    progress: {
                        show: true,
                    },
                    detail: {
                        valueAnimation: true,
                        formatter: '{value}',
                    },
                    data: [
                        {
                            value: 50,
                            name: 'SCORE',
                        },
                    ],
                },
            ],
        }

        option && myChart.setOption(option)
    }
    useEffect(() => {
        // 等render后再获取元素和渲染图标
        echartInit()
        // 饼图案例
        pieInit()
        // 速度仪表盘
        gaugeInit()
    }, [])

    return (
        <div className="echart-box">
            {/* 入门案例 */}
            <div ref={colRef} className="first-charts"></div>
            {/* 饼图 */}
            <div ref={pieRef} className="pie-charts"></div>
            {/* 速度仪表盘 */}
            <div ref={gaugeRef} className="pie-charts"></div>
        </div>
    )
}
