import Batch from '../../models/Batch'
import connectDB from '../../utils/connectDb'

connectDB();

export default async (req, res) => {
    switch (req.method) {
        case "GET":
            await handleGetRequest(req, res)
            break;
        case "DELETE":
            await handleDeleteRequest(req, res)
            break;
        case "POST":
            handlePostRequest(req, res)
            break;
        default:
            res.status(405).send(`Method ${req.method} not allowed`)
            break;
    }
}

async function handleGetRequest(req, res) {
    const { _id } = req.query
    const batch = await Batch.findOne({ _id })
    res.status(200).json(batch)
}

async function handleDeleteRequest(req, res) {
    const { _id } = req.query
    try {
        //Delete batch by id
        await Batch.findOneAndDelete({ _id })
        res.status(204).json({})
    } catch (error) {
        console.error(error)
        res.status(500).send("Error deleting Batch")
    }
}

async function handlePostRequest(req, res) {
    const { brewStartDate, brewEndDate, brewingModifications, ingredientModifications, tastingNotes } = req.body
    try {
        if (!brewStartDate) {
            return res.status(422).send("Batch missing one or more required fields")
        }
        const batch = await new Batch({
            brewStartDate,
            brewEndDate,
            brewingModifications,
            ingredientModifications,
            tastingNotes
        }).save()
        res.status(201).json(batch)
    } catch (error) {
        console.error(error)
        res.status(500).send("Internal server error in creating batch")
    }
}