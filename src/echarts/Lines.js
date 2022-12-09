import ReactEcharts from 'echarts-for-react';

const data = [
  {
    date: new Date(2019, 5, 12).getTime(),
    value1: 50,
    value2: 48,
    previousDate: new Date(2019, 5, 5),
  },
  {
    date: new Date(2019, 5, 13).getTime(),
    value1: 53,
    value2: 51,
    previousDate: '2019-05-06',
  },
  {
    date: new Date(2019, 5, 14).getTime(),
    value1: 56,
    value2: 58,
    previousDate: '2019-05-07',
  },
  {
    date: new Date(2019, 5, 15).getTime(),
    value1: 52,
    value2: 53,
    previousDate: '2019-05-08',
  },
  {
    date: new Date(2019, 5, 16).getTime(),
    value1: 48,
    value2: 44,
    previousDate: '2019-05-09',
  },
  {
    date: new Date(2019, 5, 17).getTime(),
    value1: 47,
    value2: 42,
    previousDate: '2019-05-10',
  },
  {
    date: new Date(2019, 5, 18).getTime(),
    value1: 59,
    value2: 55,
    previousDate: '2019-05-11',
  },
];

const options = {
  color: ['#5c6f82', '#BFDFFF', '#207BD6', '#004D99', '#6AAAEB'],
  textStyle: {
    fontFamily: 'Roboto Mono',
    fontWeight: 'bold',
    fontSize: 13,
  },
  xAxis: {
    type: 'category',
    data: data.map((item) => item.previousDate),
  },
  yAxis: {
    type: 'value',
  },
  series: [
    {
      name: 'Value 1',
      data: data.map((item) => item.value1),
      type: 'line',
    },
    {
      name: 'Value 2',
      data: data.map((item) => item.value2),
      type: 'line',
    },
  ],
  tooltip: {},
  legend: {
    left: 'center',
    top: 'bottom',
  },
  toolbox: {
    show: true,
    left: 'center',
    top: 'top',
    feature: {
      dataView: {},
      // restore: {},
      saveAsImage: {},
    },
  },
};

function App() {
  return (
    <ReactEcharts
      option={options}
      style={{ width: '100%', maxWidth: '900px', height: '500px' }}
    />
  );
}

export default App;
