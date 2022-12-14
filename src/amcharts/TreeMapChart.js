import { useEffect, useRef } from 'react';
import * as am5 from '@amcharts/amcharts5';
import * as am5hierarchy from '@amcharts/amcharts5/hierarchy';
import am5themes_Animated from '@amcharts/amcharts5/themes/Animated';
import * as am5plugins_exporting from '@amcharts/amcharts5/plugins/exporting';

function App() {
  const ref = useRef(null);

  const myData = [
    {
      name: 'Abilitazione cloud',
      value: 34,
    },
    {
      name: 'Adozione PagoPa e AppIo',
      value: 32,
    },
    {
      name: 'Esperienza cittadino',
      value: 26,
    },
    {
      name: 'Adozione identità digitale',
      value: 7,
      children: [
        {
          name: 'Adozione identità digitale',
          value: 5,
        },
        {
          name: 'Esperienza cittadino',
          value: 2,
        },
      ],
    },
  ];

  // const data = [
  //   {
  //     name: 'First',
  //     children: [
  //       {
  //         name: 'A1',
  //         value: 100,
  //       },
  //       {
  //         name: 'A2',
  //         value: 60,
  //       },
  //       {
  //         name: 'A3',
  //         value: 30,
  //       },
  //     ],
  //   },
  //   {
  //     name: 'Second',
  //     children: [
  //       {
  //         name: 'B1',
  //         value: 135,
  //       },
  //       {
  //         name: 'B2',
  //         value: 98,
  //       },
  //       {
  //         name: 'B3',
  //         value: 56,
  //       },
  //     ],
  //   },
  //   {
  //     name: 'Third',
  //     children: [
  //       {
  //         name: 'C1',
  //         value: 335,
  //       },
  //       {
  //         name: 'C2',
  //         value: 148,
  //       },
  //       {
  //         name: 'C3',
  //         value: 126,
  //       },
  //       {
  //         name: 'C4',
  //         value: 26,
  //       },
  //     ],
  //   },
  //   {
  //     name: 'Fourth',
  //     children: [
  //       {
  //         name: 'D1',
  //         value: 415,
  //       },
  //       {
  //         name: 'D2',
  //         value: 148,
  //       },
  //       {
  //         name: 'D3',
  //         value: 89,
  //       },
  //       {
  //         name: 'D4',
  //         value: 64,
  //       },
  //       {
  //         name: 'D5',
  //         value: 16,
  //       },
  //     ],
  //   },
  //   {
  //     name: 'Fifth',
  //     children: [
  //       {
  //         name: 'E1',
  //         value: 687,
  //       },
  //       {
  //         name: 'E2',
  //         value: 148,
  //       },
  //     ],
  //   },
  // ];

  function setupChart(root) {
    const colors = [
      am5.color(0x5c6f82),
      am5.color(0xbfdfff),
      am5.color(0x207bd6),
      am5.color(0x004d99),
      am5.color(0x6aaaeb),
      am5.color(0x94c4f5),
      am5.color(0x0066cc),
    ];
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
        style={{ width: '100%', maxWidth: '900px', height: '500px' }}
      ></div>
    </div>
  );
}

export default App;

/* Imports */
