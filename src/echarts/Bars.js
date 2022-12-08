import ReactEcharts from 'echarts-for-react';

const labelOption = {
  show: true,
  // rotate: 90,
  formatter: '{c}  {name|{a}}',
  fontSize: 12,
  rich: {
    name: {},
  },
};

const myData = [
  {
    label: '1.4.5',
    name: '1.4.5 Digitalizzazione degli avvisi pubblici',
    stanziati: 200,
    spesi: 150,
  },
  {
    label: '1.4.4',
    name: '1.4.4 Adozione identità digitale',
    stanziati: 400,
    spesi: 280,
  },
  {
    label: '1.2',
    name: '1.2 Abilitazione e facilitazione migrazione al Cloud',
    stanziati: 500,
    spesi: 300,
  },
  {
    label: '1.3.1',
    name: '1.3.1 Piattaforma Digitale Nazionale Dati',
    stanziati: 360,
    spesi: 350,
  },
  {
    label: '1.4.1',
    name: '1.4.1 Esperienza del cittadino nei servizi pubblici',
    stanziati: 200,
    spesi: 250,
  },
  {
    label: '1.4.3',
    name: '1.4.3 Adozione PagoPa e AppIo',
    stanziati: 280,
    spesi: 320,
  },
];

const options = {
  textStyle: {
    fontFamily: 'Roboto Mono',
    fontWeight: 'bold',
    fontSize: 13,
  },
  grid: { top: 40, bottom: 60, right: 40, left: 50 },
  yAxis: {
    type: 'category',
    data: myData.map((v) => v.label),
  },
  xAxis: {
    type: 'value',
  },

  series: [
    {
      name: '',
      baseline: 'bottom',
      color: 'white',
      data: myData.map((v) => {
        const name = v.name;
        return { value: 0, name };
      }),
      type: 'bar',
      label: {
        show: true,
        position: 'insideLeft',
        formatter: '{b}',
        offset: [5, 0],
      },
    },
    {
      name: 'stanziati',
      baseline: 'bottom',
      color: '#94c4f5',
      data: myData.map((v) => v.stanziati),
      type: 'bar',
      smooth: true,
      // barWidth: "40%",
      // label: labelOption,
      itemStyle: {
        borderRadius: [0, 10, 10, 0],
      },
    },
    {
      name: 'spesi',
      color: '#0066cc',
      data: myData.map((v) => v.spesi),
      type: 'bar',
      smooth: true,
      // barWidth: "20%",
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
      style={{ width: '100%', maxWidth: '900px', height: '500px' }}
    />
  );
}

export default App;
