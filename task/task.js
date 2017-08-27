var myChart = echarts.init(document.getElementById('radar-graph'));

option = {
  title: {
      text: ''
  },
  tooltip: {},
  legend: {
      data: []
  },
  radar: {
      // shape: 'circle',
      name: {
          textStyle: {
              color: '#fff',
              backgroundColor: '#999',
              borderRadius: 3,
              fontSize: '12px',
              padding: [3, 5]
         }
      },
      indicator: [
         { name: '产出达成率', max: 6500},
         { name: '良率', max: 16000},
         { name: '异常比', max: 30000},
         { name: '拦检达成率', max: 38000},
         { name: '综合能力', max: 52000},
         { name: 'DPPM', max: 25000}
      ],
      splitArea: {
        areaStyle: {
            color: ['rgba(114, 172, 209, 0.2)',
            'rgba(114, 172, 209, 0.4)', 'rgba(114, 172, 209, 0.6)',
            'rgba(114, 172, 209, 0.8)', 'rgba(114, 172, 209, 1)'],
            shadowColor: 'rgba(0, 0, 0, 0.3)',
            shadowBlur: 10
        }
    },
  },
  series: [{
      name: '预算 vs 开销（Budget vs spending）',
      type: 'radar',
      // areaStyle: {normal: {}},
      data : [
          {
              value : [4300, 10000, 28000, 35000, 50000, 19000],
              name : '预算分配（Allocated Budget）'
          },
           {
              value : [5000, 14000, 28000, 31000, 42000, 21000],
              name : '实际开销（Actual Spending）'
          }
      ]
  }]
};

myChart.setOption(option);