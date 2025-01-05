import express from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import SignUp from '../schema/userData.js';

const router = express.Router();

router.post('/signup', async (req, res) => {
    try {
        const { Name, Email, Password, Salary, Mobile, Address } = req.body;
        const existingUser = await SignUp.findOne({ Email });
        console.log(req.body);

        if (!existingUser) {
            const saltRounds = 10;
            const hashedPassword = await bcrypt.hash(Password, saltRounds);

            const newUser = new SignUp({
                Name,
                Email,
                Password: hashedPassword,
                Salary,
                Mobile,
                Address,
            });

            const response = await newUser.save();
            if (response) {
                res.send({ message: "Success" });
            }
        } else {
            res.status(400).send({ message: "User already exists" });
        }
    } catch (err) {
        res.status(500).send({ message: "Error signing up" });
    }
});


router.post('/login', async (req, res) => {
    try {
        const { Name, Password } = req.body;
        // console.log("Request Body:", req.body);

        const existingUser = await SignUp.findOne({ Name });
        // console.log("User Found:", existingUser);
        if (existingUser) {
            const hashedPassword = existingUser.Password;
            const verifyPassword = await bcrypt.compare(Password, hashedPassword);

            if (verifyPassword) {
                const token = jwt.sign({ Name }, "iycds87", { expiresIn: '5h' });
                res.send({ message: "success", token });
            } else {
                res.status(401).send({ message: "Password is incorrect" });
            }
        } else {
            res.status(404).send({ message: "User not found" });
        }
    } catch (err) {
        // console.error("Login Error:", err);
        res.status(500).send({ message: "Error logging in" });
    }
});
export default router;
