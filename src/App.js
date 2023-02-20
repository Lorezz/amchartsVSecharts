import TreeMap from './echarts/TreeMap';
import TreeMapChart from './amcharts/TreeMapChart';
import jsonData from './COMUNI_data.json';
import { useEffect, useState } from 'react';
function App() {
  // const [data, setData] = useState(null);

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
    <div>
      <TreeMapChart myData={jsonData} />
      <TreeMap data={jsonData} />
    </div>
  );
}

export default App;
