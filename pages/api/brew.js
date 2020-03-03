import Brew from '../../models/Brew'
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
    const brew = await Brew.findOne({ _id })
    res.status(200).json(brew)
}

async function handleDeleteRequest(req, res) {
    const { _id } = req.query
    try {
        //Delete brew by id
        await Brew.findOneAndDelete({ _id })
        res.status(204).json({})
    } catch (error) {
        console.error(error)
        res.status(500).send("Error deleting Brew")
    }
}

async function handlePostRequest(req, res) {
    const { name, subtype, type, batches, ingredients, description, brewingInstructions } = req.body
    try {
        if (!name || !type || !batches ) {
            return res.status(422).send("Brew missing one or more required fields")
        }
        const brew = await new Brew({
            name, 
            subtype, 
            type, 
            batches, 
            ingredients,
            description, 
            brewingInstructions
        }).save()
        res.status(201).json(brew)
    } catch (error) {
        console.error(error)
        res.status(500).send("Internal server error in creating brew")
    }
}