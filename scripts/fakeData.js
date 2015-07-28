#!/usr/bin/node
var fakeData = require('./../models/fakeData.js');
var fs = require('fs');

var path = './../app/data/fakeData.json';
getString(path);
function getString(str) {
    var data = fs.readFileSync(str, 'utf8');
    console.log(data);
    data = JSON.parse(data);
    data.forEach(function (res) {
        fakeData.save(res, function (err) {
            if (err) {
                console.log(err);
            }
            console.log(res.id);
        });
    });
}

