import ReactEcharts from 'echarts-for-react';
import { useEffect, useState } from 'react';
// const sampleData = [
//   {
//     name: 'Abilitazione cloud',
//     value: 34,
//   },
//   {
//     name: 'Adozione PagoPa e AppIo',
//     value: 32,
//   },
//   {
//     name: 'Esperienza cittadino',
//     value: 26,
//   },
//   {
//     children: [
//       {
//         name: 'Adozione identità digitale',
//         value: 5,
//       },
//       {
//         name: 'Esperienza cittadino',
//         value: 2,
//       },
//     ],
//   },
// ];

function App({ data, levelOptions, depth }) {
  const [opts, setOptions] = useState(null);
  function getLevelOption() {
    return [
      {
        itemStyle: {
          borderColor: '#fff',
          borderWidth: 0,
          gapWidth: 1,
        },
        upperLabel: {
          show: false,
        },
      },
      {
        itemStyle: {
          borderColor: '#f2f7fc',
          borderWidth: 5,
          gapWidth: 1,
        },
        emphasis: {
          itemStyle: {
            borderColor: '#fff',
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
  function getOptions(data) {
    const upperLabel = levelOptions
      ? {
          show: levelOptions ? true : false,
          height: 30,
        }
      : null;
    const levels = levelOptions ? getLevelOption() : null;
    const leafDepth = depth ? depth : 'drill down';
    // const select = {
    //   disabled: true,
    //   label: {
    //     show: false,
    //   },
    // };
    // const emphasis = { disabled: true };

    console.log('leafDepth', leafDepth);

    return {
      color: [
        '#003366',
        '#004D99',
        '#0066CC',
        '#207AD5',
        '#4392E0',
        '#D48D22',
        '#CC7A00',
        '#B36B00',
        '#995C00',
        '#804D00',
      ],
      textStyle: {
        fontWeight: 'normal',
        fontSize: 12,
      },
      tooltip: {},
      series: [
        {
          type: 'treemap',
          roam: true,
          itemStyle: {
            borderColor: '#fff',
          },
          breadcrumb: {
            show: depth ? true : false,
          },
          leafDepth,
          upperLabel,
          levels,
          data,
        },
      ],
    };
  }

  useEffect(() => {
    setOptions(getOptions(data));
  }, [data, levelOptions, depth]);
  if (!opts) return null;
  return (
    <div className="chart-container">
      <ReactEcharts option={opts} style={{ width: '100%', height: '500px' }} />
    </div>
  );
}

export default App;
