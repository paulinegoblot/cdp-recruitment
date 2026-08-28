const { data } = require('./data.js');
const { HELP, FILTER, COUNT } = require('./src/constant.js');
const { filterCountires } = require('./src/filter/filter.js');
const { addCountToCountries } = require('./src/count/count.js');

const options = process.argv.slice(2);

if (!options.length || options.includes(HELP)) {
  console.log(`node app.js [options]
    options :
        --help          print node command line options
        --filter=...    print the list with animals matching the given filter
        --count         print the list with the count of subelements
    `);
  process.exit(9);
}

const filterOption = options.find((option) => option.startsWith(FILTER));
if (!!filterOption) {
  const filter = filterOption.split('=')[1];
  if (!filter) {
    console.log(`Value expected after '=' (eg. --filter=ry)`);
    process.exit(9);
  }

  const filteredCountries = filterCountires(data, filter);
  console.log(JSON.stringify(filteredCountries, null, 2));
  process.exit();
}

if (options.includes(COUNT)) {
  const coutriesWithCount = addCountToCountries(data);
  console.log(JSON.stringify(coutriesWithCount, null, 2));
  process.exit();
}
console.log('Unknown option, use --help to see available options')
process.exit()