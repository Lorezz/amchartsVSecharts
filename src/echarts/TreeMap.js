import ReactEcharts from 'echarts-for-react';

const data = [
  {
    name: 'Abilitazione cloud',
    value: 34,
    itemStyle: {
      color: '#5c6f82',
    },
  },
  {
    name: 'Adozione PagoPa e AppIo',
    value: 32,
    itemStyle: {
      color: '#BFDFFF',
    },
  },
  {
    name: 'Esperienza cittadino',
    value: 26,
    itemStyle: {
      color: '#207BD6',
    },
  },
  {
    name: 'Adozione identità digitale',
    value: 7,
    itemStyle: {
      color: '#004D99',
    },
    children: [
      {
        name: 'Adozione identità digitalo',
        value: 5,
      },
      {
        name: 'Esperienza cittadino',
        value: 2,
        itemStyle: {
          color: '#6AAAEB',
        },
      },
    ],
  },
];
const options = {
  textStyle: {
    fontFamily: 'Roboto Mono',
    fontWeight: 'normal',
    fontSize: 12,
  },
  toolbox: {
    show: true,
    left: 'center',
    top: 'top',
    feature: {
      dataView: {},
      restore: {},
      saveAsImage: {},
    },
  },
  series: [
    {
      type: 'treemap',
      roam: false,
      label: {
        show: true,
        formatter: '{b}',
        normal: {
          textStyle: {
            ellipsis: true,
          },
        },
      },
      visualMin: -100,
      visualMax: 100,
      visualDimension: 3,
      data,
    },
  ],
  legend: {
    show: false,
    left: 'auto',
    top: 0,
  },
  tooltip: {},
};

function App() {
  return (
    <ReactEcharts
      option={options}
      style={{ width: '900px', height: '500px' }}
    ></ReactEcharts>
  );
}

export default App;
