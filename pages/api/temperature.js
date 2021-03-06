var MongoClient = require('mongodb').MongoClient

var url = process.env.MONGO_SRV //temporarily hardcoded

export default async (req, res) => {

    //import MongoClient as opposed to Mongoose to get simple object from the database without defining schema
    try {
        MongoClient.connect(url, function (err, db) {
            if (err) throw err
            var dbo = db.db("brewmaster");
            dbo.collection("temperature").findOne({}, {sort:{$natural:-1}}, function (err, result) {
                if (err) throw err
                res.status(200).send(result.payload)
                db.close()
            })
        })
    } catch (error) {
        console.log(error)
    }

}