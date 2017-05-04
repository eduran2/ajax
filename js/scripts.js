// @codekit-prepend "jquery.js";
// @codekit-prepend "semantic.js";

//'load()' method

// $('#data').load('/data/data.txt');

// $('#data').load('/data/data.html');

// $('#data').load('/data/data.json');

// Handshaek With AirTable
var Airtable = require('airtable');
Airtable.configure({
    endpointUrl: 'https://api.airtable.com',
    apiKey: 'keyLlzAYzDGxQW5Mc'
});
var base = Airtable.base('appXIdTrzhBLHwRHa');


// AJAX Call

base('Entertainers').select({
    view: 'Grid view'
}).firstPage(function(err, records) {
    if (err) { console.error(err); return; }
    records.forEach(function(record) {
        console.log('Retrieved', record.get('Name'));
    });
});

//DISPLAY TO PAGE HERE

// To fetch the next page of records, call `fetchNextPage`.
    // If there are more records, `page` will get called again.
    // If there are no more records, `done` will get called.
    fetchNextPage();

}, function done(err) {
    if (err) { console.error(err); return; }
});

