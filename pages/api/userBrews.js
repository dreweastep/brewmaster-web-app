import Brew from '../../models/Brew'
import connectDb from '../../utils/connectDb';

connectDb()

export default async (req, res) => {
    try {
        let brews = [];
        const { _id } = req.query
        brews = await Brew.find({"userID":_id})
        res.status(200).json(brews)
    } catch (error) {
        console.log(error)
    }

}