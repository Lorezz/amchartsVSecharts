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
        <h1>ECharts</h1>
        <h2>Valutazione requisiti:</h2>
        <h4>
          Valutazione echarts in base alla lista dei requisiti con un valore da
          uno a 5
        </h4>
        <ul>
          <li>documentazione 4</li>
          <li>supporto/manutenzione 4</li>
          <li>accessibilità 4</li>
          <li>responsive ?</li>
          <li>personalizzazione 3.5</li>
          <li>copertura tipologie di grafici richiesti 5</li>
          <li>versatilità utilizzo 5</li>
        </ul>
      </div>
      <hr />
      <div className="chart-container">
        <HalfBars />
      </div>
      <hr />
      <div className="chart-container">
        <Donut />
      </div>
      <hr />
      <div className="chart-container">
        <TreeMap />
      </div>
      <hr />
      <div className="chart-container">
        <Geo />
      </div>
      <hr />
      <Bars />
    </div>
  );
}

export default App;
