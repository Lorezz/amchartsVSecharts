import TreeMap from './echarts/TreeMap';
import TreeMapChart from './amcharts/TreeMapChart';
import jsonData2 from './COMUNI_data.json';
import jsonData from './data.json';
import { useEffect, useState } from 'react';
function App() {
  // const [data, setData] = useState(null);
  const [levelOptions, setLevelOptions] = useState(false);
  const [depth, setDepth] = useState(false);
  // useEffect(() => {
  //   const dataByRegion = jsonData.reduce((acc, item) => {
  //     const region = item['Regione'];
  //     if (!acc.has(region)) {
  //       acc.set(region, []);
  //     }
  //     acc.get(region).push(item);
  //     return acc;
  //   }, new Map());

  //   setData(formattedData);
  // }, []);

  return (
    <>
      <button className="btn" onClick={() => setLevelOptions(!levelOptions)}>
        levelOptions: {levelOptions ? 'on' : 'off'}
      </button>
      <button className="btn" onClick={() => setDepth(!depth)}>
        depth: {depth ? 'on' : 'off'}
      </button>
      <h1>PROVINCE</h1>
      <div style={{ backgroundColor: '#efefef' }}>
        <TreeMapChart myData={jsonData} />
        <TreeMap data={jsonData} levelOptions={levelOptions} depth={null} />
      </div>

      <h1>COMUNI</h1>
      <div style={{ backgroundColor: '#f4f4f4' }}>
        <TreeMapChart myData={jsonData2} />
        <TreeMap
          data={jsonData2}
          levelOptions={levelOptions}
          depth={depth ? 2 : null}
        />
      </div>
    </>
  );
}

export default App;
