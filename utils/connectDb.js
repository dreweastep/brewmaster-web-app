import mongoose from 'mongoose'
const connection = {}

async function connectDb() {
    try {
        if (connection.isConnected) {
            //Use existing database connection
            return
        }

        //Use new database connection
        const db = await mongoose.connect(process.env.MONGO_SRV, {
            useCreateIndex: true,
            useFindAndModify: false,
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        connection.isConnected = db.connections[0].readyState;
    } catch (error) {
        console.error(error)
    }
}

export default connectDb;