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
        <ul>
          <li>documentazione 2.5</li>
          <li>supporto/manutenzione 4</li>
          <li>accessibilità 4</li>
          <li>responsive 3.5</li>
          <li>personalizzazione 3</li>
          <li>copertura tipologie di grafici richiesti 5</li>
          <li>versatilità utilizzo 3</li>
        </ul>
      </div>
      <HBarChart />
      <InlineBarChart />
      <DonutChart />
      <LineChart />
      <TreeMapChart />
      <GeoChart />
    </div>
  );
}

export default App;
