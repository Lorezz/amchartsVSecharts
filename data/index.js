const fs = require('fs');
const csv = require('csvtojson');
const csvFilePath = './sample.csv';

async function csvToJson() {
  const jsonArray = await csv().fromFile(csvFilePath);
  fs.writeFileSync('./sample.json', JSON.stringify(jsonArray, null, 2));
}

function uniqueFieldList(list, field) {
  return [...new Set(list.map((item) => item[field]))];
}

function getValue(list) {
  return list.reduce((sum, item) => {
    let parsed = 1;
    try {
      parsed = item['importo_finanziamento']
        ? parseInt(item['importo_finanziamento'])
        : 1;
    } catch (error) {
      console.log(error);
    }
    return sum + parsed;
  }, 0);
}

// function recurse(
//   list,
//   currentfield,
//   fields = ['regione', 'provincia', 'comune'],
//   sumField = 'importo_finanziamento'
// ) {
//   const currentFieldList = uniqueFieldList(list, currentfield);

//   const index = fields.indexOf(currentfield);
//   let nextField = null;
//   if (index < fields.length - 1) {
//     nextField = fields[index + 1];
//   }

//   const children = currentFieldList.reduce((all, field) => {
//     const currentData = list.filter((item) => item[currentfield] === field);
//     const name = field;
//     const value = getValue(currentData, sumField);

//     let children = null;
//     if (nextField) {
//       children = recurse(currentData, nextField, fields, sumField);
//     }
//     return [...all, { name, value, children }];
//   }, []);

//   return children;
// }

function transformJSon() {
  const jsonData = require('./sample.json');

  const regions = uniqueFieldList(jsonData, 'regione');
  const data = regions.reduce((all, region) => {
    //NAME
    const name = region;

    //VALUE
    const regionList = jsonData.filter((item) => item.regione === region);
    const value = getValue(regionList);

    //CHILDREN
    const province = uniqueFieldList(regionList, 'provincia');
    const children = province.reduce((allProvince, provincia) => {
      //NAME
      const name = provincia;

      //VALUE
      const provinceList = regionList.filter(
        (item) => item.provincia === provincia
      );
      const value = getValue(provinceList);

      // //CHILDREN
      // const comuni = uniqueFieldList(provinceList, 'comune');
      // const children = comuni.reduce((allComuni, comune) => {
      //   //NAME
      //   const name = comune;
      //   const comuneList = provinceList.filter(
      //     (item) => item.comune === comune
      //   );
      //   //VALUE
      //   const value = getValue(comuneList);

      //   //CHILDREN
      //   const children = null;
      //   return [...allComuni, { name, value, children }];
      // }, []);

      return [...allProvince, { name, value, children: null }];
    }, []);

    return [...all, { name, value, children }];
  }, []);

  fs.writeFileSync('./nestedData.json', JSON.stringify(data, null, 2));
}

(async () => {
  transformJSon();
})();
