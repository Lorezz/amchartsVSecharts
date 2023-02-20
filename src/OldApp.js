import ECharts from './echarts/App.js';
import AmCharts from './amcharts/App.js';

function App() {
  return (
    <div className="split">
      <AmCharts />
      <ECharts />
    </div>
  );
}

export default App;
