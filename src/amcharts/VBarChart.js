import * as am5 from '@amcharts/amcharts5';
import * as am5xy from '@amcharts/amcharts5/xy';
import am5themes_Animated from '@amcharts/amcharts5/themes/Animated';
import { useEffect, useRef } from 'react';

function App() {
  const ref = useRef(null);
  useEffect(() => {
    if (ref?.current) {
      let root = am5.Root.new(ref.current);
      const colors = [am5.color(0x94c4f5), am5.color(0x0066cc)];
      const myTheme = am5.Theme.new(root);
      myTheme.rule('Label').setAll({
        fill: am5.color(0x111111),
        fontSize: '0.8em',
        fontFamily: 'Roboto Mono',
      });
      root.setThemes([am5themes_Animated.new(root)], myTheme);

      let chart = root.container.children.push(
        am5xy.XYChart.new(root, {
          panY: false,
          layout: root.verticalLayout,
        })
      );
      chart.get('colors').set('colors', colors);
      // Define data
      let data = [
        {
          category: 'Research',
          value1: 1000,
          value2: 588,
        },
        {
          category: 'Marketing',
          value1: 1200,
          value2: 1800,
        },
        {
          category: 'Sales',
          value1: 850,
          value2: 1230,
        },
      ];

      // Create Y-axis
      let yAxis = chart.yAxes.push(
        am5xy.ValueAxis.new(root, {
          renderer: am5xy.AxisRendererY.new(root, {}),
        })
      );

      // Create X-Axis
      let xAxis = chart.xAxes.push(
        am5xy.CategoryAxis.new(root, {
          renderer: am5xy.AxisRendererX.new(root, {}),
          categoryField: 'category',
        })
      );
      xAxis.data.setAll(data);

      // Create series
      let series1 = chart.series.push(
        am5xy.ColumnSeries.new(root, {
          name: 'Series',
          xAxis: xAxis,
          yAxis: yAxis,
          valueYField: 'value1',
          categoryXField: 'category',
          tooltip: am5.Tooltip.new(root, {
            labelText: '[bold]Income[/]\n{categoryX}: {valueY}',
          }),
        })
      );
      series1.data.setAll(data);

      let series2 = chart.series.push(
        am5xy.ColumnSeries.new(root, {
          name: 'Series',
          xAxis: xAxis,
          yAxis: yAxis,
          valueYField: 'value2',
          categoryXField: 'category',
        })
      );
      series2.data.setAll(data);

      // Add legend
      let legend = chart.children.push(am5.Legend.new(root, {}));
      legend.data.setAll(chart.series.values);

      // Add cursor
      chart.set('cursor', am5xy.XYCursor.new(root, {}));

      return () => root.dispose();
    }
  }, [ref]);

  return (
    <div className="chart-container">
      <div
        id="chartdiv"
        ref={ref}
        style={{ width: '900px', height: '500px' }}
      ></div>
    </div>
  );
}

export default App;
