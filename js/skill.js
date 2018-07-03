var myChart = echarts.init(document.getElementById('skill'));

// 指定图表的配置项和数据

var option = {
    title: {
        text: '技能树'
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        x: 'center'
    },
    radar: [{
        indicator: [{
                text: 'HTML5',
                max: 100
            },
            {
                text: 'CSS3',
                max: 100
            },
            {
                text: 'JavaScript',
                max: 100
            },
            {
                text: 'Vue',
                max: 100
            },
            {
                text: 'Sass',
                max: 100
            },
            {
                text: 'Node.js',
                max: 100
            },
            {
                text: 'Webpack',
                max: 100
            },
            {
                text: 'Java,C,C++',
                max: 100
            },
            {
                text: 'JQuery',
                max: 100
            },
            {
                text: '微信小程序',
                max: 100
            },
            {
                text: 'Element-UI',
                max: 100
            },
            {
                text: 'Echarts',
                max: 100
            },
            {
                text: 'MySQL',
                max: 100
            }
        ],
        center: ['50%', '50%'],
        radius: 150
    }],
    series: [{
        type: 'radar',
        tooltip: {
            trigger: 'item'
        },
        itemStyle: {
            normal: {
                areaStyle: {
                    type: 'default'
                }
            }
        },
        data: [{
            value: [80, 75, 60, 40, 50, 30, 40, 30, 75, 20, 80, 50, 30]
            // name: 'skill'
        }]
    }]
};

// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option); 