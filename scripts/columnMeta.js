#!/usr/bin/node
var columnMeta = require('./../models/columnMeta.js');
var fs = require('fs');

var path = './../app/data/columnMeta.json';
getString(path);
function getString(str) {
    var data = fs.readFileSync(str, 'utf8');
    console.log(data);
    data = JSON.parse(data);
    data.forEach(function (res) {
        columnMeta.save(res, function (err) {
            if (err) {
                console.log(err);
            }
            console.log(res.order);
        });
    });
}

