import Bars from './Bars';
import HalfBars from './HalfBars';
import Donut from './Donut';
import TreeMap from './TreeMap';
import Geo from './Geo';
// import ProvaGeo from './ProvaGeo';
import '../index.css';
function App() {
  return (
    <div className="container">
      <div className="chart-container">
        <h1 style={{ padding: 10 }}>ECharts</h1>
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
      <div className="chart-container">
        <HalfBars />
      </div>
      <div className="chart-container">
        <Bars />
      </div>
      <div className="chart-container">
        <Donut />
      </div>
      <div className="chart-container">
        <TreeMap />
      </div>
      <div className="chart-container">
        <Geo />
      </div>
    </div>
  );
}

export default App;
