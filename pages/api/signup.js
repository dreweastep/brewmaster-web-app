import connectDB from '../../utils/connectDb'
import User from '../../models/User'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import isEmail from 'validator/lib/isEmail'
import isLength from 'validator/lib/isLength'

connectDB()

export default async (req, res) => {
    const { name, email, password } = req.body
    try {
        //Validate name / email / password
        if(!isLength(name, { min: 2, max: 20})) {
            return res.status(422).send("Name must be 2-20 characters long")
        
        } else if (!isLength(password, { min: 6})) {
            return res.status(422).send("Password must be at least 6 characters long")
        
        } else if (!isEmail(email)) {
            return res.status(422).send("Email is not valid")
        }

        //Check to see if the user already exists in the db
        const user = await User.findOne({ email })
        if (user) {
            return res.status(422).send(`User already exists with
            email ${email}`)
        }

        //If not, hash their password
        const hash = await bcrypt.hash(password, 10)

        //Create user
        const newUser = await new User({
            name, 
            email,
            password: hash
        }).save()

        //Create token for the new user
        const token = jwt.sign({ userId: newUser._id }, process.env.JWT_SECRET, {
        expiresIn: '7d'})

        //Send back token
        res.status(201).json(token)

    } catch (error) {
        console.error(error)
        res.status(500).send("Internal Server Error Signing Up User. Please try again later")
    }
}