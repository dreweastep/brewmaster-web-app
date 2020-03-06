import Brew from '../../models/Brew'
import connectDb from '../../utils/connectDb';

connectDb()

export default async (req, res) => {
    try {
        let brews = [];
        brews = await Brew.find()
        res.status(200).json(brews)
    } catch (error) {
        console.log(error)
    }

}