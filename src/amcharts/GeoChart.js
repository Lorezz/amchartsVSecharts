import { useEffect, useRef } from 'react';
import * as am5 from '@amcharts/amcharts5';
import * as am5map from '@amcharts/amcharts5/map';
import am5geodata_italyLow from '@amcharts/amcharts5-geodata/italyLow';
import am5themes_Animated from '@amcharts/amcharts5/themes/Animated';
import * as am5plugins_exporting from '@amcharts/amcharts5/plugins/exporting';

function App() {
  const ref = useRef(null);

  const myData = [
    { name: 'Abruzzo', value: 30 },
    { name: 'Basilicata', value: 23 },
    { name: 'Calabria', value: 55 },
    { name: 'Campania', value: 77 },
    { name: 'Emilia-Romagna', value: 232 },
    { name: 'Friuli-Venezia Giulia', value: 34 },
    { name: 'Lazio', value: 46 },
    { name: 'Liguria', value: 432 },
    { name: 'Lombardia', value: 534 },
    { name: 'Marche', value: 453 },
    { name: 'Piemonte', value: 54 },
    { name: 'Piemonte', value: 435 },
    { name: 'Molise', value: 54 },
    { name: 'Provincia Autonoma di Bolzano', value: 213 },
    { name: 'Trentino-Alto Adige', value: 432 },
    { name: 'Puglia', value: 34 },
    { name: 'Sardegna', value: 56 },
    { name: 'Sicilia', value: 67 },
    { name: 'Toscana', value: 78 },
    { name: 'Umbria', value: 42 },
    { name: "Valle d'Aosta", value: 54 },
    { name: 'Veneto', value: 44 },
  ];
  //  console.log(am5geodata_italyLow);
  const data = am5geodata_italyLow.features.map((feature) => {
    const name = feature.properties.name;
    const id = feature.properties.id;
    const value = myData.find((d) => d.name === name)?.value || 0;
    return { id, value };
  });
  function setupChart(root) {
    const minColor = am5.color(0x94c4f5);
    const maxColor = am5.color(0x0066cc);

    const myTheme = am5.Theme.new(root);
    myTheme.rule('Label').setAll({
      fill: am5.color(0x111111),
      fontSize: '0.8em',
      fontFamily: 'monospace',
      fontWeight: 'bold',
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
    let chart = root.container.children.push(
      am5map.MapChart.new(root, {
        panX: 'rotateX',
        panY: 'none',
        // projection: am5map.geoAlbersUsa(),
        projection: am5map.geoMercator(),
        layout: root.verticalLayout,
      })
    );
    chart.set('zoomControl', am5map.ZoomControl.new(root, {}));
    // Create polygon series
    let polygonSeries = chart.series.push(
      am5map.MapPolygonSeries.new(root, {
        geoJSON: am5geodata_italyLow,
        valueField: 'value',
        calculateAggregates: true,
      })
    );

    polygonSeries.mapPolygons.template.setAll({
      tooltipText: '{name}: {value}',
      legendValueText:"CIAO",
    });

    polygonSeries.set('heatRules', [
      {
        target: polygonSeries.mapPolygons.template,
        dataField: 'value',
        min: minColor,
        max: maxColor,
        key: 'fill',
      },
    ]);

    polygonSeries.mapPolygons.template.events.on('pointerover', function (ev) {
      heatLegend.showValue(ev.target.dataItem.get('value'));
    });

    polygonSeries.data.setAll(data);

    let heatLegend = chart.children.push(
      am5.HeatLegend.new(root, {
        orientation: 'vertical',
        startColor: minColor,
        endColor: maxColor,
        startText: 'Lowest',
        endText: 'Highest',
        stepCount: 10,
      })
    );

    heatLegend.startLabel.setAll({
      fontSize: 12,
      fill: heatLegend.get('startColor'),
    });

    heatLegend.endLabel.setAll({
      fontSize: 12,
      fill: heatLegend.get('endColor'),
    });

    // change this to template when possible
    polygonSeries.events.on('datavalidated', function () {
      heatLegend.set('startValue', 0);
      heatLegend.set('endValue', 600);
    });
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
      <div id="chartdiv" ref={ref} style={{ width: '100%', height: 800 }}></div>
    </div>
  );
}

export default App;

/* Imports */
