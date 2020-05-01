import connectDB from '../../utils/connectDb'
import User from '../../models/User'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

connectDB()

export default async (req, res) => {
    const { email, password } = req.body
    try {
        //Check to see if the user exist with the provided email
        const user = await User.findOne({ email }).select('+password')

        //If not, return error
        if (!user) {
            return res.status(404).send("No user exists with that email")
        }

        //Check to see if the users's password matches the one in the database
        const passwordsMatch = await bcrypt.compare(password, user.password)

        //If so, generate a token
        if (passwordsMatch) {
            const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET,
                { expiresIn: '7d' })

            //Send that token to the client
            res.status(200).json(token)

        } else {
            res.status(401).send("Invalid password")
        }
    } catch (error) {
        console.error(error)
        res.status(500).send("Internal server error in logging in")
    } 
}