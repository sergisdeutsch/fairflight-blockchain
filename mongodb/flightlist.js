var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.connect("mongodb://fairflight-mongo:oJQdgXjpwcf5nL7MJ38tY6B1rs4AZH2T1wr4TErRdGaPGMyZsrkaBRQtgg48fkiEAdirwDNUqDoVJg3lVudp6A%3D%3D@fairflight-mongo.documents.azure.com:10255/?ssl=true")
    .then(() => {
        console.log("Successfully conected to mongodb")
    })


var flitghSchema = new Schema({
    _id: String,
    blockchainId: String,
    userId: String,
    departure: String,
    arrival: String,
    from: String,
    to: String,
    date: String,
    price: Number,
    airline: String,
    delay: Number,
    percentRefund: Number,
    totalRefund: Number
});

var flightModel = mongoose.model('flightlist', flitghSchema)

function addFlight(flightinfo) {
    console.log('Inside addFlight', flightinfo)
    var flight = new flightModel(flightinfo);
    return flight.save()
}

module.exports = { flightModel, addFlight }