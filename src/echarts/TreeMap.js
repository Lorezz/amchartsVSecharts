import ReactEcharts from 'echarts-for-react';

const sampleData = [
  {
    name: 'Abilitazione cloud',
    value: 34,
  },
  {
    name: 'Adozione PagoPa e AppIo',
    value: 32,
  },
  {
    name: 'Esperienza cittadino',
    value: 26,
  },
  {
    children: [
      {
        name: 'Adozione identità digitale',
        value: 5,
      },
      {
        name: 'Esperienza cittadino',
        value: 2,
      },
    ],
  },
];

function App({ data }) {
  function getLevelOption() {
    return [
      {
        itemStyle: {
          borderColor: '#777',
          borderWidth: 0,
          gapWidth: 1,
        },
        upperLabel: {
          show: false,
        },
      },
      {
        itemStyle: {
          borderColor: '#555',
          borderWidth: 5,
          gapWidth: 1,
        },
        emphasis: {
          itemStyle: {
            borderColor: '#ddd',
          },
        },
      },
      {
        colorSaturation: [0.35, 0.5],
        itemStyle: {
          borderWidth: 5,
          gapWidth: 1,
          borderColorSaturation: 0.6,
        },
      },
    ];
  }
  function options(data) {
    return {
      color: ['#5c6f82', '#BFDFFF', '#207BD6', '#004D99', '#6AAAEB'],
      textStyle: {
        fontWeight: 'normal',
        fontSize: 12,
      },
      series: [
        {
          type: 'treemap',
          // roam: false,
          upperLabel: {
            show: true,
            height: 30,
          },
          itemStyle: {
            borderColor: '#fff',
          },
          // levels: getLevelOption(),

          // label: {
          //   show: true,
          //   // formatter: '  {b} ',
          //   // normal: {
          //   //   textStyle: {
          //   //     ellipsis: true,
          //   //   },
          //   // },
          // },
          // visualMin: -100,
          // visualMax: 100,
          // visualDimension: 3,
          data,
        },
      ],
    };
  }

  if (!data || data.length === 0) return null;

  return (
    <ReactEcharts
      option={options(data)}
      style={{ width: '100%', height: '500px' }}
    />
  );
}

export default App;
