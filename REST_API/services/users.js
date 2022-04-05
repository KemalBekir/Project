const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user');



const JWT_SECRET = 'dadsadadadadsdfgsafads';
const blacklist = [];

//TODO: Change required fields depending on requiremenets
async function register(email, password) {
    const existing = await User.findOne({ email: new RegExp(`^${email}$`, 'i') });

    if (existing) {
        throw new Error('Email already exists');
    }

    const user = new User({
        email,
        hashedPassword: await bcrypt.hash(password, 10)
    });

    await user.save();

    return createSession(user);
}

function logout(token){
    blacklist.push(token);
}

async function login(email, password) {
    const user = await User.findOne({ email: new RegExp(`^${email}$`, 'i') });

    if (!user) {
        throw new Error('Incorrect email or password');
    }

    const match = await bcrypt.compare(password, user.hashedPassword);

    if(!match){
        throw new Error('Incorrect email or password');
    }


    return createSession(user);
}

function createSession(user){
    return {
        email: user.email,
        _id: user._id,
        accessToekN: jwt.sign({
            email: user.email,
            _id: user._id
        }, JWT_SECRET)
    };
}

function verifySession(token){
    if(blacklist.includes(token)){
        throw new Error('Token is ivalidated');
    }
    
    const payload = jwt.verify(token, JWT_SECRET);
    return {
        email: payload.email,
        _id: payload._id,
        token: token
    };
}

module.exports = {
    login,
    register,
    logout,
    verifySession,
}