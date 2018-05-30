var mongoose  = require ('mongoose');
var schema = mongoose.Schema;

var PersonSchema = new schema({
    name: String
});

module.exports = mongoose.model('Person', PersonSchema);
