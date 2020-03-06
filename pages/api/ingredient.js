import Ingredient from '../../models/Ingredient'
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
    const ingredient = await Ingredient.findOne({ _id })
    res.status(200).json(ingredient)
}

async function handleDeleteRequest(req, res) {
    const { _id } = req.query
    try {
        //Delete ingredient by id
        await Ingredient.findOneAndDelete({ _id })
        res.status(204).json({})
    } catch (error) {
        console.error(error)
        res.status(500).send("Error deleting Ingredient")
    }
}

async function handlePostRequest(req, res) {
    const { name, price, unit, buyLocation, quantity } = req.body
    try {
        if (!name) {
            return res.status(422).send("Ingredient missing one or more required fields")
        }
        const ingredient = await new Ingredient({
            name,
            price,
            unit,
            buyLocation,
            quantity
        }).save()
        res.status(201).json(ingredient)
    } catch (error) {
        console.error(error)
        res.status(500).send("Internal server error in creating ingredient")
    }
}