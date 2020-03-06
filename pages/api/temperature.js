var MongoClient = require('mongodb').MongoClient

var url = "mongodb://192.168.240.30:27017/"

export default async (req, res) => {
    try {
        MongoClient.connect(url, function (err, db) {
            if (err) throw err
            var dbo = db.db("brewmaster");
            dbo.collection("temperature").findOne({}, function (err, result) {
                if (err) throw err
                res.status(200).send(result.payload)
                db.close()
            })
        })
    } catch (error) {
        console.log(error)
    }

}