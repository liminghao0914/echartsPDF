// https://echarts.apache.org/examples/zh/editor.html?c=bar-tick-align

option = {
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow'
    }
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true,
    height:"50%"
  },
  xAxis: [
    {
      type: 'value',
      axisLabel:{
        textStyle:{
          color: "black",
          fontSize: "15px",
          fontFamily: "Times New Roman"
        }
      }
    }
  ],
  yAxis: [
    {
      type: 'category',
      data: ['Less than 1 year', '1-2 years', '3-5 years', '6-9 years', 'More than 10 years'],
      axisTick: {
        alignWithLabel: true
      },
      axisLabel:{
        textStyle:{
          color: "black",
          fontSize: "16px",
          fontFamily: "Times New Roman"
        }
      }
    }
  ],
  series: [
    {
      name: 'Direct',
      type: 'bar',
      barWidth: '40%',
      data: [2.7, 20, 32, 30.7, 14.7]
    }
  ]
};
