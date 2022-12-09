import ReactEcharts from 'echarts-for-react';
import * as echarts from 'echarts';

import data from './italy-with-regions.json';

function App() {
  function getOptions(data) {
    echarts.registerMap('IT', data);
    const options = {
      color: ['#5c6f82', '#BFDFFF', '#207BD6', '#004D99', '#6AAAEB'],
      title: {
        text: 'Population Density italy regions',
        subtext: 'Data from Wikipedia',
      },
      tooltip: {
        trigger: 'item',
        formatter: '{a}<br/>{b}<br/>{c}',
      },
      textStyle: {
        fontFamily: 'Roboto Mono',
        fontWeight: 'bold',
        fontSize: 12,
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
      visualMap: {
        min: 0,
        max: 600,
        text: ['High', 'Low'],
        realtime: false,
        calculable: true,

        inRange: {
          color: ['#94c4f5', '#0066cc'],
        },
      },
      series: [
        {
          name: 'Regioni',
          type: 'map',
          map: 'IT',
          label: {
            show: true,
          },
          select: { disabled: true },
          emphasis: {
            // focus: "self",
            itemStyle: {
              areaColor: 'lightblue',
              borderWidth: 0.5,
              color: '#eee',
            },
          },
          zoom: 1.2,
          data: [
            { name: 'Abruzzo', value: 30 },
            { name: 'Basilicata', value: 23 },
            { name: 'Calabria', value: 55 },
            { name: 'Campania', value: 77 },
            { name: 'Emilia-romagna', value: 232 },
            { name: 'Friuli venezia giulia', value: 34 },
            { name: 'Lazio', value: 46 },
            { name: 'Liguria', value: 432 },
            { name: 'Lombardia', value: 534 },
            { name: 'Marche', value: 453 },
            { name: 'Piemonte', value: 54 },
            { name: 'Piemonte', value: 435 },
            { name: 'Molise', value: 54 },
            { name: 'Provincia Autonoma di Bolzano/Bozen', value: 213 },
            { name: 'Trentino-alto adige/sudtirol', value: 432 },
            { name: 'Puglia', value: 34 },
            { name: 'Sardegna', value: 56 },
            { name: 'Sicilia', value: 67 },
            { name: 'Toscana', value: 78 },
            { name: 'Umbria', value: 42 },
            { name: "Valle d'aosta", value: 54 },
            { name: 'Veneto', value: 44 },
          ],
        },
      ],
    };
    return options;
  }

  data.features.map((f) => console.log(f.properties));

  return data ? (
    <ReactEcharts
      option={getOptions(data)}
      style={{ width: '100%', height: 800 }}
    ></ReactEcharts>
  ) : (
    <div>loading...</div>
  );
}

export default App;
