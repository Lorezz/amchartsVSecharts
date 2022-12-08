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
        <h1>AMCharts</h1>
        <h2>Valutazione requisiti:</h2>
        <h4>
          Valutazione amcharts in base alla lista dei requisiti con un valore da
          uno a 5
        </h4>
        <ul>
          <li>documentazione 3</li>
          <li>supporto/manutenzione 4</li>
          <li>accessibilità 4</li>
          <li>responsive 3</li>
          <li>personalizzazione 3</li>
          <li>copertura tipologie di grafici richiesti 5</li>
          <li>versatilità utilizzo 4</li>
        </ul>
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
