import { Client } from '../dist/index.js';

const Learnhub = new Client("learnHub");

async function user(){
    const User = Learnhub.getUser("testuser@test.com");
    return User;
}

async function logUser(){
    const email = await user();
    console.log(email);
}

logUser();