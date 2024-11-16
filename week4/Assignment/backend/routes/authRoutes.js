const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const z = require('zod');
const User = require('/Users/om/Desktop/Desktop Files/0-100/week4/Assignment/backend/models/userModel.js');
const jwtPassword = "OM@Asmita2208/2506"; 

const userSchemaSignIN = z.object({
    fName: z.string().min(1, { message: "First name is required" }),
    lName: z.string().min(1, { message: "Last name is required" }),
    pNo: z.string().min(10, { message: "Contact number should be 10 digits" })
           .max(10, { message: "Contact number is too long" }),
    email: z.string().email({ message: "Invalid email address" }),
    username: z.string().min(3, { message: "Username must be at least 3 characters" })
                .regex(/^\S+$/, { message: "Username should not contain spaces" }),
    password: z.string().min(8, { message: "Password must be at least 8 characters" })
                .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, { 
                    message: "Password must contain at least 1 uppercase, 1 lowercase, 1 number, and 1 special character"
                }),
    cPassword: z.string().min(8, { message: "Confirm password is required" })
  }).refine(data => data.password === data.cPassword, { 
    path: ["cPassword"], 
    message: "Passwords don't match" 
  });

  function validateSignIn(req, res, next) {
    const response = userSchemaSignIN.safeParse(req.body);
    if (!response.success) {
      const errors = response.error.errors.map(error => ({
        path: error.path.join('.'),
        message: error.message
      }));
      return res.status(400).json({ errors });
    }
    next();
  }

  async function userExist(req, res, next) {
    const email = req.body.email;
    try {
      const user = await User.findOne({ email });
      if (user) {
        return res.status(409).json({ msg: "User already exists!" });
      }
      next();
    } catch (err) {
      res.status(500).json({ error: "Internal server error" });
    }
 }

router.post('/create-user', validateSignIn, userExist, async (req, res) => {
    const { fName, lName, pNo, email, username, password } = req.body;
    const newUser = new User({
      fName,
      lName,
      pNo,
      email,
      username,
      password,
      createdAt: new Date()
    });
  
    try {
      await newUser.save();
      res.json({ msg: "User created successfully!" });
    } catch (err) {
      res.status(500).json({ error: "Failed to create user" });
}});

const userSchemaLogIn = z.object({
    username: z.string().min(3, "Please enter your username or email")
      .refine(input => {
        const isEmail = z.string().email().safeParse(input).success;
        const isValidUsername = /^[^\s]+$/.test(input);
        return isEmail || isValidUsername;
      }, {
        message: "Username must not contain spaces or must be a valid email address!"
      }),
    password: z.string().min(1, "Please enter password")
  });
  
function logInValidate(req, res, next) {
    const response = userSchemaLogIn.safeParse(req.body);
    if (!response.success) {
        const errors = response.error.errors.map(err => ({
        path: err.path.join('.'),
        msg: err.message
      }));
      return res.status(400).json({ errors });
    }
    next();
}
  
async function logIn(req, res, next) {
    const { username, password } = req.body;
    try {
      const user = await User.findOne({
        $or: [
          { email: username },
          { username }
        ]
      });
  
      if (!user) {
        return res.status(401).json({ msg: "User does not exist!" });
      }
  
      if (user.password !== password) {
        return res.status(401).json({ msg: "Incorrect password!" });
      }
  
      req.user = user;  
      next();
    } catch (error) {
      res.status(500).json({ msg: "Internal server error!" });
    }
}
  

router.post('/login', logInValidate, logIn, (req, res) => {
    const token = jwt.sign({ _id: req.user._id }, jwtPassword, { expiresIn: '1h' });
    res.json({ token });
});
  
module.exports = router;