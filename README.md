# CDP recruitement javascript master

CDP recruitement javascript master is a command-line interface in Node.js working on a list of elements available in `data.js` : 
- filter a list of elements containing a pattern
- count the sub-elements of a list

## filter

This program filters a list of elements containing a pattern.

Details : 
- Only animals containing the pattern passed as argument (eg. `ry`) are displayed. The order is kept intact.
- Empty array after filtering are NOT returned.

## count

This program count the number of sub-elements and appending it in the name, eg. `Satanwi [2]`.

## Run locally

```shell script
$ node app.js --count
$ node app.js --count
$ node app.js --help
```

## Tests
to run the tests you have to install the test library first :
```shell script
$ npm install
```

Then you can run all the test
```shell script
$ npm test
```

Or a specific test
```shell script
$ npm test -t 'filter'
```