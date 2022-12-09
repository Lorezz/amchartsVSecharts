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
