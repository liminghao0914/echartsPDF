option = {
  tooltip: {
    trigger: 'item',
    formatter: '{a} <br/>{b}: {c} ({d}%)'
  },
  legend: {
    data: [
      'Direct',
      'Marketing',
      'Search Engine',
      'Email',
      'Union Ads',
      'Video Ads',
      'Baidu',
      'Google',
      'Bing',
      'Others'
    ]
  },
  series: [
    {
      name: 'Access From',
      type: 'pie',
      selectedMode: 'single',
      radius: [0, '20%'],
      label: {
        position: 'inner',
        fontSize: 14
      },
      labelLine: {
        show: false
      },
      data: [
        { value: 65, name: 'Watching' },
        { value: 10, name: 'Not' },
      ]
    },
    {
      name: 'Access From',
      type: 'pie',
      radius: ['30%', '40%'],
      labelLine: {
        length: 30
      },
      label: {
        formatter: ' {b|{b}}\n{hr|}\n {per|{d}%}  ',
        backgroundColor: '#F6F8FC',
        borderColor: '#8C8D8E',
        borderWidth: 1,
        borderRadius: 4,
        rich: {
          a: {
            color: '#6E7079',
            lineHeight: 22,
            align: 'center'
          },
          hr: {
            borderColor: '#8C8D8E',
            width: '100%',
            borderWidth: 1,
            height: 0
          },
          b: {
            color: '#4C5058',
            fontSize: 14,
            fontWeight: 'bold',
            lineHeight: 33
          },
          per: {
            color: '#fff',
            backgroundColor: '#4C5058',
            lineHeight: 22,
            fontSize: 16,
            align: 'center',
            borderRadius: 4
          }
        }
      },
      data: [
        { value: 5, name: 'Watch the entire video' },
        { value: 25, name: 'Watch video segments' },
        { value: 35, name: 'Both two' },
        { value: 10, name: 'Time-consuming' }
      ]
    }
  ]
};
