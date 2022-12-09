// import VBarChart from './charts/VBarChart.js';
import HBarChart from './HBarChart.js';
import LineChart from './LineChart.js';
import InlineBarChart from './InlineBarChart.js';
import DonutChart from './DonutChart.js';
import TreeMapChart from './TreeMapChart.js';
import GeoChart from './GeoChart.js';

function App() {
  return (
    <div className="container">
      <div className="chart-container">
        <h1 style={{ padding: 10 }}>AMCharts</h1>
      </div>
      <hr />
      <HBarChart />
      <hr />
      <DonutChart />
      <hr />
      <TreeMapChart />
      <hr />
      <GeoChart />
      <hr />
      <InlineBarChart />
    </div>
  );
}

export default App;
