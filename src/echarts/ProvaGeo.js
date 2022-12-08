import ReactEcharts from 'echarts-for-react';
import * as echarts from 'echarts';
import { useEffect, useState } from 'react';
// import data from "../data/it_regions.json"

function App() {
  const [data, setData] = useState(null);

  const url =
    'https://raw.githubusercontent.com/openpolis/geojson-italy/master/geojson/limits_IT_regions.geojson';
  const colors = [
    '#5c6f82',
    '#BFDFFF',
    '#207BD6',
    '#004D99',
    '#6AAAEB',
  ].reverse();

  function getColor() {
    const index = Math.floor(Math.random() * colors.length);
    return colors[index];
  }

  function getOptions(geo) {
    echarts.registerMap('IT', geo);

    let data = [
      { name: 'Abruzzo', value: 30 },
      { name: 'Basilicata', value: 23 },
      { name: 'Calabria', value: 55 },
      { name: 'Campania', value: 77 },
      { name: 'Emilia-Romagna', value: 22 },
      { name: 'Friuli-Venezia Giulia', value: 34 },
      { name: 'Lazio', value: 46 },
      { name: 'Liguria', value: 43 },
      { name: 'Lombardia', value: 34 },
      { name: 'Marche', value: 53 },
      { name: 'Piemonte', value: 54 },
      { name: 'Piemonte', value: 77 },
      { name: 'Molise', value: 54 },
      { name: 'Provincia Autonoma di Bolzano/Bozen', value: 21 },
      { name: 'Provincia Autonoma di Trento', value: 32 },
      { name: 'Puglia', value: 34 },
      { name: 'Sardegna', value: 56 },
      { name: 'Sicilia', value: 67 },
      { name: 'Toscana', value: 78 },
      { name: 'Umbria', value: 42 },
      { name: "Valle d'Aosta/Vallée d'Aoste", value: 54 },
      { name: 'Veneto', value: 44 },
    ];
    const values = data.map((v) => {
      return {
        ...v,
        itemStyle: {
          color: getColor(),
          areaColor: getColor(),
        },
      };
    });
    const options = {
      title: {
        text: 'Population Density italy regions',
        subtext: 'Data from Wikipedia',
        sublink: url,
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
      series: [
        {
          type: 'map',
          map: 'IT',
          name: 'Regioni',
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
          nameProperty: 'reg_name',
          data: values,
        },
      ],
    };
    return options;
  }

  useEffect(() => {
    async function getData() {
      const response = await fetch(url);
      console.log('response', response.status);
      const raw = await response.json();
      console.log(raw.features.length);
      setData(raw);
    }
    getData();
  }, []);

  return data ? (
    <ReactEcharts
      option={getOptions(data)}
      style={{ width: 500, height: 800 }}
    />
  ) : (
    <div>loading...</div>
  );
}

export default App;
