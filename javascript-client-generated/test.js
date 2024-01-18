// Test

import { Client } from './dist/index.js';

const Learnhub = new Client("learnHub");

async function user(){
    const User = Learnhub.getUser("testuser@test.com");
    return User;
}

async function logUser(){
    const email = await user();
    return email;
}

function test(){
    if(logUser() == {"email": "testuser@test.com"}){
        console.log("cool");
        server.close();
    }else{
        throw new Error("returned data is incorrect");
    }
}

// Server

import express from "express";
const app = express();
app.disable('x-powered-by');

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(express.json());

const server = app.listen(3000, () => test());

async function isAuth(req, res, next) {
    const auth = req.headers["authorization"];
    if(auth == "Bearer learnHub"){
        next();
    } else {
        console.log(auth);
        console.log("sent 401");
        res.sendStatus(401);
        server.close()
    }
}

app.delete('/v2/user', isAuth, async (req, res) => {
    const email = req.query.email;
    if (email) {
        console.log(email);
        res.status(200).send("User deleted")
    }
})

app.get('/v2/user', isAuth, async (req, res) => {
    const email = req.query.email;
    if (email) {
        console.log(email);
        res.status(200).json({"email": email});
    }
})

app.post('/v2/user', isAuth, async (req, res) => {
    const { name, email } = req.body;
    if (email) {
        if (name) {
            console.log(name + '' + email);
            res.satus(201).json({"name": name, "email": email})
        } else {
            res.sendStatus(404);
        }
    } else {
        res.sendStatus(404);
    }
})
