/** @jsx React.DOM */

var React = require('react/addons');
var async = require('async');
var columnMetaController = require('./../../models/columnMeta');
var fakeDataController = require('./../../models/fakeData');
/* create factory with griddle component */
var Griddle = React.createFactory(require('griddle-react'));
//var ReactApp;

async.parallel({
    fakeData : function(callback) {
        setTimeout(function () {
            fakeDataController.getFakeDataList({}, callback);
        }, 100);
    },
    columnMeta : function(callback) {
        setTimeout(function () {
            columnMetaController.getColumnMetaList({}, callback)
        }, 200);
    }
},
    function(err, results) {
        if (err) {
            console.log(err.message);
        }
        var fakeData = JSON.parse("{ \"fakeData\" :" + JSON.stringify(results.fakeData) + "}");
        var columnMeta = JSON.parse("{ \"columnMeta\" :" + JSON.stringify(results.columnMeta) + "}");
        var resultsPerPage = 100;
        module.exports = React.createClass({
            componentDidMount: function () {
                console.log(JSON.stringify(results.fakeData));
            },
            render: function () {
                return (
                    <div id="table-area">

                        <Griddle results={fakeData}
                                 columnMetadata={columnMeta}
                                 resultsPerPage={resultsPerPage}
                                 tableClassName="table"/>

                    </div>
                )
            }
        });
    }
);
/*fakeDataController.getFakeDataList({},function(err, fakeData){
    console.log(fakeData);
});

columnMetaController.getColumnMetaList({},function(err, columnMeta){
    console.log(columnMeta);
});*/


/*var resultsPerPage = 100;
var ReactApp = React.createClass({
    componentDidMount: function () {
        console.log(fakeData);
    },
    render: function () {
        return (
            <div id="table-area">

                <Griddle results={fakeData}
                         columnMetadata={columnMeta}
                         resultsPerPage={resultsPerPage}
                         tableClassName="table"/>

            </div>
        )
    }
});*/

/*
module.exports = ReactApp;
*/
