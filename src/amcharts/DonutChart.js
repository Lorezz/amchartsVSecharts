import { useEffect, useRef } from 'react';
import * as am5 from '@amcharts/amcharts5';
import * as am5percent from '@amcharts/amcharts5/percent';
import am5themes_Animated from '@amcharts/amcharts5/themes/Animated';
import * as am5plugins_exporting from '@amcharts/amcharts5/plugins/exporting';

function App() {
  const ref = useRef(null);

  const myData = [
    { value: 1048, name: 'Search Engine' },
    { value: 735, name: 'Direct' },
    { value: 580, name: 'Email' },
    { value: 484, name: 'Union Ads' },
    { value: 300, name: 'Video Ads' },
  ];
  const colors = [
    am5.color(0x5c6f82),
    am5.color(0xbfdfff),
    am5.color(0x207bd6),
    am5.color(0x004d99),
    am5.color(0x6aaaeb),
    am5.color(0x94c4f5),
    am5.color(0x0066cc),
  ];

  function setupChart(root) {
    const myTheme = am5.Theme.new(root);
    myTheme.rule('Label').setAll({
      fill: am5.color(0x111111),
      fontSize: '0.8em',
      fontFamily: 'monospace',
    });

    // Set themes
    // https://www.amcharts.com/docs/v5/concepts/themes/
    root.setThemes([am5themes_Animated.new(root), myTheme]);

    let exporting = am5plugins_exporting.Exporting.new(root, {
      menu: am5plugins_exporting.ExportingMenu.new(root, {}),
      htmlOptions: {
        disabled: true,
      },
    });
    console.log('exporting', exporting);

    // Create chart
    // https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/
    let chart = root.container.children.push(
      am5percent.PieChart.new(root, {
        layout: root.verticalLayout,
        innerRadius: am5.percent(50),
      })
    );
    // chart.get('colors').set('colors', colors);
    // Create series
    // https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/#Series
    let series = chart.series.push(
      am5percent.PieSeries.new(root, {
        valueField: 'value',
        categoryField: 'name',
        alignLabels: false,
      })
    );
    series.get('colors').set('colors', colors);

    chart.seriesContainer.children.push(
      am5.Label.new(root, {
        textAlign: 'center',
        centerY: am5.p50,
        centerX: am5.p50,
        text: '[bold fontSize:18px]Total 47000:\n 100[/]',
      })
    );

    // Set data
    // https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/#Setting_data
    series.data.setAll(myData);

    // Create legend
    // https://www.amcharts.com/docs/v5/charts/percent-charts/legend-percent-series/
    let legend = chart.children.push(
      am5.Legend.new(root, {
        centerX: am5.percent(50),
        x: am5.percent(50),
        marginTop: 15,
        marginBottom: 15,
      })
    );

    legend.data.setAll(series.dataItems);

    // Play initial series animation
    // https://www.amcharts.com/docs/v5/concepts/animations/#Animation_of_series
    series.appear(1000, 100);
  }

  useEffect(() => {
    if (ref?.current) {
      let root = am5.Root.new(ref.current);
      setupChart(root);
      return () => root.dispose();
    }
  }, [ref]);

  return (
    <div className="chart-container">
      <div
        id="chartdiv"
        ref={ref}
        style={{ width: '100%', maxWidth: '900px', height: '500px' }}
      />
    </div>
  );
}

export default App;

/* Imports */
