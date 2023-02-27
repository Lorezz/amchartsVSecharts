import { useEffect, useRef } from 'react';
import * as am5 from '@amcharts/amcharts5';
import * as am5hierarchy from '@amcharts/amcharts5/hierarchy';
import am5themes_Animated from '@amcharts/amcharts5/themes/Animated';
import * as am5plugins_exporting from '@amcharts/amcharts5/plugins/exporting';

function App({ myData }) {
  const ref = useRef(null);

  // const myData = [
  //   {
  //     name: 'Abilitazione cloud',
  //     value: 34,
  //   },
  //   {
  //     name: 'Adozione PagoPa e AppIo',
  //     value: 32,
  //   },
  //   {
  //     name: 'Esperienza cittadino',
  //     value: 26,
  //   },
  //   {
  //     name: 'Adozione identità digitale',
  //     value: 7,
  //     children: [
  //       {
  //         name: 'Adozione identità digitale',
  //         value: 5,
  //       },
  //       {
  //         name: 'Esperienza cittadino',
  //         value: 2,
  //       },
  //     ],
  //   },
  // ];

  function setupChart(root) {
    const colors = [
      am5.color(0x003366),
      am5.color(0x004d99),
      am5.color(0x0066cc),
      am5.color(0x207ad5),
      am5.color(0x4392e0),
      am5.color(0xd48d22),
      am5.color(0xcc7a00),
      am5.color(0xb36b00),
      am5.color(0x995c00),
      am5.color(0x804d00),
    ];
    const myTheme = am5.Theme.new(root);
    myTheme.rule('Label').setAll({
      fill: am5.color(0x111111),
      fontSize: '0.8em',
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

    // Create wrapper container
    let container = root.container.children.push(
      am5.Container.new(root, {
        width: am5.percent(100),
        height: am5.percent(100),
        layout: root.verticalLayout,
      })
    );

    // Create series
    // https://www.amcharts.com/docs/v5/charts/hierarchy/#Adding
    let series = container.children.push(
      am5hierarchy.Treemap.new(root, {
        singleBranchOnly: false,
        downDepth: 1,
        upDepth: -1,
        initialDepth: 3,
        valueField: 'value',
        categoryField: 'name',
        childDataField: 'children',
        nodePaddingOuter: 0,
        nodePaddingInner: 0,
      })
    );

    series.get('colors').set('colors', colors);
    series.rectangles.template.setAll({
      strokeWidth: 2,
    });

    // Generate and set data
    // https://www.amcharts.com/docs/v5/charts/hierarchy/#Setting_data
    // let maxLevels = 2;
    // let maxNodes = 10;
    // let maxValue = 100;

    series.data.setAll([
      {
        name: 'Root',
        children: myData,
      },
    ]);
    series.set('selectedDataItem', series.dataItems[0]);

    // Make stuff animate on load
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
        style={{ width: '100%', height: '500px' }}
      ></div>
    </div>
  );
}

export default App;

/* Imports */
