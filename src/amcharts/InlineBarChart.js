import * as am5 from '@amcharts/amcharts5';
import * as am5xy from '@amcharts/amcharts5/xy';
import am5themes_Animated from '@amcharts/amcharts5/themes/Animated';
import { useEffect, useRef } from 'react';
import * as am5plugins_exporting from '@amcharts/amcharts5/plugins/exporting';

function App() {
  const ref = useRef(null);

  const data = [
    {
      label: '1.4.5',
      name: '1.4.5 Digitalizzazione degli avvisi pubblici',
      stanziati: 200,
      spesi: 150,
      fake: 500,
    },
    {
      label: '1.4.4',
      name: '1.4.4 Adozione identità digitale',
      stanziati: 400,
      spesi: 280,
      fake: 500,
    },
    {
      label: '1.2',
      name: '1.2 Abilitazione e facilitazione migrazione al Cloud',
      stanziati: 500,
      spesi: 300,
      fake: 500,
    },
    {
      label: '1.3.1',
      name: '1.3.1 Piattaforma Digitale Nazionale Dati',
      stanziati: 360,
      spesi: 350,
      fake: 500,
    },
    {
      label: '1.4.1',
      name: '1.4.1 Esperienza del cittadino nei servizi pubblici',
      stanziati: 200,
      spesi: 250,
      fake: 500,
    },
    {
      label: '1.4.3',
      name: '1.4.3 Adozione PagoPa e AppIo',
      stanziati: 280,
      spesi: 320,
      fake: 500,
    },
  ];
  useEffect(() => {
    if (ref?.current) {
      let root = am5.Root.new(ref.current);

      // const colors = [
      //   am5.color(0x5c6f82),
      //   am5.color(0xbfdfff),
      //   am5.color(0x207bd6),
      //   am5.color(0x004d99),
      //   am5.color(0x6aaaeb),
      // ];
      const colors = [
        am5.color(0xffffff),
        am5.color(0x94c4f5),
        am5.color(0x0066cc),
      ];
      const myTheme = am5.Theme.new(root);
      myTheme.rule('Label').setAll({
        fill: am5.color(0x111111),
        fontSize: '0.8em',
        fontFamily: 'monospace',
      });

      root.setThemes([am5themes_Animated.new(root), myTheme]);

      let exporting = am5plugins_exporting.Exporting.new(root, {
        menu: am5plugins_exporting.ExportingMenu.new(root, {}),
        htmlOptions: {
          disabled: true,
        },
      });
      console.log('exporting', exporting);

      // Create chart
      // https://www.amcharts.com/docs/v5/charts/xy-chart/
      let chart = root.container.children.push(
        am5xy.XYChart.new(root, {
          panX: false,
          panY: false,
          layout: root.verticalLayout,
        })
      );

      chart.get('colors').set('colors', colors);

      // Create axes
      // https://www.amcharts.com/docs/v5/charts/xy-chart/axes/
      let yAxis = chart.yAxes.push(
        am5xy.CategoryAxis.new(root, {
          categoryField: 'label',
          renderer: am5xy.AxisRendererY.new(root, {
            inversed: true,
            cellStartLocation: 0.1,
            cellEndLocation: 0.9,
          }),
        })
      );

      yAxis.data.setAll(data);

      let xAxis = chart.xAxes.push(
        am5xy.ValueAxis.new(root, {
          renderer: am5xy.AxisRendererX.new(root, {}),
          min: 0,
        })
      );

      function createFakeSeries(field, name) {
        let series = chart.series.push(
          am5xy.ColumnSeries.new(root, {
            name: name,
            xAxis: xAxis,
            yAxis: yAxis,
            valueXField: field,
            categoryYField: 'label',
            sequencedInterpolation: true,
          })
        );

        series.columns.template.setAll({
          height: am5.p50,
        });

        series.data.setAll(data);

        // series.bullets.push(function () {
        //   return am5.Bullet.new(root, {
        //     locationX: 1,
        //     locationY: 0.5,
        //     sprite: am5.Label.new(root, {
        //       centerY: am5.p50,
        //       text: '{valueY}',
        //       populateText: true,
        //       fontFamily: 'monospace',
        //     }),
        //   });
        // });
        series.bullets.push(function () {
          return am5.Bullet.new(root, {
            locationX: 0,
            locationY: 0,
            sprite: am5.Label.new(root, {
              centerY: am5.p50,
              text: '{name}',
              fill: am5.color(0x000000),
              populateText: true,
              fontFamily: 'monospace',
              fontWeight: 'bold',
              fontSize: '1em',
            }),
          });
        });
        series.appear();

        return series;
      }

      // Add series
      // https://www.amcharts.com/docs/v5/charts/xy-chart/series/
      function createSeries(field, name) {
        let series = chart.series.push(
          am5xy.ColumnSeries.new(root, {
            name: name,
            xAxis: xAxis,
            yAxis: yAxis,
            valueXField: field,
            categoryYField: 'label',
            sequencedInterpolation: true,
            tooltip: am5.Tooltip.new(root, {
              fontFamily: 'monospace',
              pointerOrientation: 'horizontal',
              labelText: `[bold]${name}[/]\n{categoryY}: {valueX}`,
            }),
          })
        );

        series.columns.template.setAll({
          height: am5.p50,
        });

        series.data.setAll(data);
        series.appear();

        return series;
      }

      createFakeSeries('fake', '');
      createSeries('stanziati', 'Stanziati');
      createSeries('spesi', 'Spesi');

      // Add legend
      // https://www.amcharts.com/docs/v5/charts/xy-chart/legend-xy-series/
      let legend = chart.children.push(
        am5.Legend.new(root, {
          centerX: am5.p50,
          x: am5.p50,
        })
      );

      legend.data.setAll(chart.series.values);

      // Add cursor
      // https://www.amcharts.com/docs/v5/charts/xy-chart/cursor/
      let cursor = chart.set(
        'cursor',
        am5xy.XYCursor.new(root, {
          behavior: 'zoomY',
        })
      );
      cursor.lineY.set('forceHidden', true);
      cursor.lineX.set('forceHidden', true);

      // Make stuff animate on load
      // https://www.amcharts.com/docs/v5/concepts/animations/
      chart.appear(1000, 100);

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
