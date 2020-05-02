import User from '../../models/User'

export default async (req, res) => {
    try {
        const { _id } = req.query
        const user = await User.findOne({ _id })
        res.status(200).json(user)
        } catch (error) {
        console.error(error)
        res.status(403).send("Please login again")
    }
}