var mongodb = require('./mongodb');
var Schema = mongodb.Schema;
var fakeDataSchema = new Schema({
    id : Number,
    name : String,
    city : String,
    state : String,
    country : String,
    company : String,
    favoriteNumber : Number
});

var fakeData = mongodb.model("fakeData", fakeDataSchema);
var fakeDataDAO = function(){};

//保存信息
fakeDataDAO.prototype.save = function(obj, callback) {
    var instance = new fakeData(obj);
    instance.save(function(err){
        callback(err);
    });
};

//获取列表信息
fakeDataDAO.prototype.getFakeDataList = function(query, callback) {
    fakeData.find(query, '-_id -__v', {}, callback);
};

//获取单条信息
fakeDataDAO.prototype.getFakeData = function(query, callback) {

    fakeData.findOne(query, '-_id -__v', {},  function(err, res){
        if (err) {
            console.log(err.message);
        }
        //console.log(res);
        return res;
    });
};


module.exports = new fakeDataDAO();