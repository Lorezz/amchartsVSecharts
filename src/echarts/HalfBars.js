import ReactEcharts from 'echarts-for-react';

const labelOption = {
  show: true,
  // rotate: 90,
  formatter: '{c}  {name|{a}}',
  fontSize: 8,
  rich: {
    name: {},
  },
};

const options = {
  textStyle: {
    fontFamily: 'Roboto Mono',
    fontWeight: 'bold',
    fontSize: 13,
  },
  grid: { top: 40, bottom: 60, right: 40, left: '40%' },
  yAxis: {
    type: 'category',
    data: [
      '1.4.5 Digitalizzazione degli avvisi pubblici',
      '1.4.4 Adozione identità digitale',
      '1.2 Abilitazione e facilitazione migrazione al Cloud',
      '1.3.1 Piattaforma Digitale Nazionale Dati',
      '1.4.1 Esperienza del cittadino nei servizi pubblici',
      '1.4.3 Adozione PagoPa e AppIo',
    ],
  },
  xAxis: {
    type: 'value',
  },

  series: [
    // {
    //   name: "title",
    //   baseline: "bottom",
    //   color: "white",
    //   data: [
    //     { name: "1.4.5 Digitalizzazione degli avvisi pubblici", value: 500 },
    //     { name: "1.4.4 Adozione identità digitale", value: 500 },
    //     {
    //       name: "1.2 Abilitazione e facilitazione migrazione al Cloud",
    //       value: 500
    //     },
    //     { name: "1.3.1 Piattaforma Digitale Nazionale Dati", value: 500 },
    //     {
    //       name: "1.4.1 Esperienza del cittadino nei servizi pubblici",
    //       value: 500
    //     },
    //     { name: "1.4.3 Adozione PagoPa e AppIo", value: 500 }
    //   ],
    //   type: "bar",
    //   label: {
    //     show: true,
    //     position: "insideLeft",
    //     formatter: "{b}",
    //     offset: [5, 0]
    //   }
    // },
    {
      name: 'stanziati',
      baseline: 'bottom',
      color: '#94c4f5',
      data: [200, 400, 500, 360, 200, 280],
      type: 'bar',
      smooth: true,
      barWidth: '20%',
      // label: labelOption,
      itemStyle: {
        borderRadius: [0, 10, 10, 0],
      },
    },
    {
      name: 'spesi',
      color: '#0066cc',
      data: [150, 280, 300, 350, 250, 320],
      type: 'bar',
      smooth: true,
      barWidth: '20%',
      // label: labelOption,
      itemStyle: {
        borderRadius: [0, 10, 10, 0],
      },
    },
  ],
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
  tooltip: {},
};

function App() {
  return (
    <ReactEcharts
      option={options}
       style={{ width: '900px', height: '500px' }}
    ></ReactEcharts>
  );;
}

export default App;
