/** @jsx React.DOM */

var React = require('react/addons');
var columnMetaController = require('./../../models/columnMeta');
var fakeDataController = require('./../../models/fakeData');
/* create factory with griddle component */
var Griddle = React.createFactory(require('griddle-react'));

var fakeData = fakeDataController.getFakeDataList({});
console.log('fakeData' + fakeData);
var columnMeta = columnMetaController.getColumnMetaList({});
var resultsPerPage = 100;

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
  });

/* Module.exports instead of normal dom mounting */
module.exports = ReactApp;