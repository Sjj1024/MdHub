import * as echarts from 'echarts'
import { useRef, useEffect } from 'react'
import './index.scss'

export default function MainBoard() {
    const colRef = useRef(null)
    const pieRef = useRef(null)
    const gaugeRef = useRef(null)
    const radarRef = useRef(null)
    const bubbleRef = useRef(null)
    const funnelRef = useRef(null)

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

    // 雷达图
    const radarInit = () => {
        const myChart = echarts.init(radarRef.current)
        const option = {
            title: {
                text: 'Stacked Line',
            },
            tooltip: {
                trigger: 'axis',
            },
            legend: {
                data: [
                    'Email',
                    'Union Ads',
                    'Video Ads',
                    'Direct',
                    'Search Engine',
                ],
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true,
            },
            toolbox: {
                feature: {
                    saveAsImage: {},
                },
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            },
            yAxis: {
                type: 'value',
            },
            series: [
                {
                    name: 'Email',
                    type: 'line',
                    stack: 'Total',
                    data: [120, 132, 101, 134, 90, 230, 210],
                },
                {
                    name: 'Union Ads',
                    type: 'line',
                    stack: 'Total',
                    data: [220, 182, 191, 234, 290, 330, 310],
                },
                {
                    name: 'Video Ads',
                    type: 'line',
                    stack: 'Total',
                    data: [150, 232, 201, 154, 190, 330, 410],
                },
                {
                    name: 'Direct',
                    type: 'line',
                    stack: 'Total',
                    data: [320, 332, 301, 334, 390, 330, 320],
                },
                {
                    name: 'Search Engine',
                    type: 'line',
                    stack: 'Total',
                    data: [820, 932, 901, 934, 1290, 1330, 1320],
                },
            ],
        }

        option && myChart.setOption(option)
    }

    // 散点图
    const bubbleInit = () => {
        const myChart = echarts.init(bubbleRef.current)

        const data = [
            [
                [28604, 77, 17096869, 'Australia', 1990],
                [31163, 77.4, 27662440, 'Canada', 1990],
                [1516, 68, 1154605773, 'China', 1990],
                [13670, 74.7, 10582082, 'Cuba', 1990],
                [28599, 75, 4986705, 'Finland', 1990],
                [29476, 77.1, 56943299, 'France', 1990],
                [31476, 75.4, 78958237, 'Germany', 1990],
                [28666, 78.1, 254830, 'Iceland', 1990],
                [1777, 57.7, 870601776, 'India', 1990],
                [29550, 79.1, 122249285, 'Japan', 1990],
                [2076, 67.9, 20194354, 'North Korea', 1990],
                [12087, 72, 42972254, 'South Korea', 1990],
                [24021, 75.4, 3397534, 'New Zealand', 1990],
                [43296, 76.8, 4240375, 'Norway', 1990],
                [10088, 70.8, 38195258, 'Poland', 1990],
                [19349, 69.6, 147568552, 'Russia', 1990],
                [10670, 67.3, 53994605, 'Turkey', 1990],
                [26424, 75.7, 57110117, 'United Kingdom', 1990],
                [37062, 75.4, 252847810, 'United States', 1990],
            ],
            [
                [44056, 81.8, 23968973, 'Australia', 2015],
                [43294, 81.7, 35939927, 'Canada', 2015],
                [13334, 76.9, 1376048943, 'China', 2015],
                [21291, 78.5, 11389562, 'Cuba', 2015],
                [38923, 80.8, 5503457, 'Finland', 2015],
                [37599, 81.9, 64395345, 'France', 2015],
                [44053, 81.1, 80688545, 'Germany', 2015],
                [42182, 82.8, 329425, 'Iceland', 2015],
                [5903, 66.8, 1311050527, 'India', 2015],
                [36162, 83.5, 126573481, 'Japan', 2015],
                [1390, 71.4, 25155317, 'North Korea', 2015],
                [34644, 80.7, 50293439, 'South Korea', 2015],
                [34186, 80.6, 4528526, 'New Zealand', 2015],
                [64304, 81.6, 5210967, 'Norway', 2015],
                [24787, 77.3, 38611794, 'Poland', 2015],
                [23038, 73.13, 143456918, 'Russia', 2015],
                [19360, 76.5, 78665830, 'Turkey', 2015],
                [38225, 81.4, 64715810, 'United Kingdom', 2015],
                [53354, 79.1, 321773631, 'United States', 2015],
            ],
        ]
        const option = {
            backgroundColor: new echarts.graphic.RadialGradient(0.3, 0.3, 0.8, [
                {
                    offset: 0,
                    color: '#f7f8fa',
                },
                {
                    offset: 1,
                    color: '#cdd0d5',
                },
            ]),
            title: {
                text: 'Life Expectancy and GDP by Country',
                left: '5%',
                top: '3%',
            },
            legend: {
                right: '10%',
                top: '3%',
                data: ['1990', '2015'],
            },
            grid: {
                left: '8%',
                top: '10%',
            },
            xAxis: {
                splitLine: {
                    lineStyle: {
                        type: 'dashed',
                    },
                },
            },
            yAxis: {
                splitLine: {
                    lineStyle: {
                        type: 'dashed',
                    },
                },
                scale: true,
            },
            series: [
                {
                    name: '1990',
                    data: data[0],
                    type: 'scatter',
                    symbolSize: function (data) {
                        return Math.sqrt(data[2]) / 5e2
                    },
                    emphasis: {
                        focus: 'series',
                        label: {
                            show: true,
                            formatter: function (param) {
                                return param.data[3]
                            },
                            position: 'top',
                        },
                    },
                    itemStyle: {
                        shadowBlur: 10,
                        shadowColor: 'rgba(120, 36, 50, 0.5)',
                        shadowOffsetY: 5,
                        color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [
                            {
                                offset: 0,
                                color: 'rgb(251, 118, 123)',
                            },
                            {
                                offset: 1,
                                color: 'rgb(204, 46, 72)',
                            },
                        ]),
                    },
                },
                {
                    name: '2015',
                    data: data[1],
                    type: 'scatter',
                    symbolSize: function (data) {
                        return Math.sqrt(data[2]) / 5e2
                    },
                    emphasis: {
                        focus: 'series',
                        label: {
                            show: true,
                            formatter: function (param) {
                                return param.data[3]
                            },
                            position: 'top',
                        },
                    },
                    itemStyle: {
                        shadowBlur: 10,
                        shadowColor: 'rgba(25, 100, 150, 0.5)',
                        shadowOffsetY: 5,
                        color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [
                            {
                                offset: 0,
                                color: 'rgb(129, 227, 238)',
                            },
                            {
                                offset: 1,
                                color: 'rgb(25, 183, 207)',
                            },
                        ]),
                    },
                },
            ],
        }

        option && myChart.setOption(option)
    }

    // 漏斗图
    const funnelInit = () => {
        const myChart = echarts.init(funnelRef.current)
        const option = {
            title: {
                text: 'Funnel',
            },
            tooltip: {
                trigger: 'item',
                formatter: '{a} <br/>{b} : {c}%',
            },
            toolbox: {
                feature: {
                    dataView: { readOnly: false },
                    saveAsImage: {},
                },
            },
            legend: {
                data: ['Show', 'Click', 'Visit', 'Inquiry', 'Order'],
            },
            series: [
                {
                    name: 'Funnel',
                    type: 'funnel',
                    left: '10%',
                    top: 60,
                    bottom: 60,
                    width: '80%',
                    min: 0,
                    max: 100,
                    minSize: '0%',
                    maxSize: '100%',
                    sort: 'descending',
                    gap: 2,
                    label: {
                        show: true,
                        position: 'inside',
                    },
                    labelLine: {
                        length: 10,
                        lineStyle: {
                            width: 1,
                            type: 'solid',
                        },
                    },
                    itemStyle: {
                        borderColor: '#fff',
                        borderWidth: 1,
                    },
                    emphasis: {
                        label: {
                            fontSize: 20,
                        },
                    },
                    data: [
                        { value: 60, name: 'Visit' },
                        { value: 40, name: 'Inquiry' },
                        { value: 20, name: 'Order' },
                        { value: 80, name: 'Click' },
                        { value: 100, name: 'Show' },
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
        // 雷达图
        radarInit()
        // 散点图
        bubbleInit()
        // 漏斗图
        funnelInit()
    }, [])

    return (
        <div className="echart-box">
            {/* 入门案例 */}
            <div ref={colRef} className="charts-box"></div>
            {/* 饼图 */}
            <div ref={pieRef} className="charts-box"></div>
            {/* 速度仪表盘 */}
            <div ref={gaugeRef} className="charts-box"></div>
            {/* 雷达图 */}
            <div ref={radarRef} className="charts-box"></div>
            {/* 散点图 */}
            <div ref={bubbleRef} className="charts-box"></div>
            {/* 漏斗图 */}
            <div ref={funnelRef} className="charts-box"></div>
        </div>
    )
}
