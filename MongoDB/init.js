const mongoose = require('mongoose');
const Chat = require("./models/chat.js");

main()
    .then(() =>{
        console.log('connection successful');
    })
    .catch((err) => console.log(err));
    
async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}

let allChats = [
    {
        from: "Rohit",
        to:"Mohit",
        msg: "Teach me JS",
        created_at: new Date(),

    },
    {
        from: "Ranveer",
        to: "Akshay",
        msg: "Bring me some fruits",
        created_at: new Date(),

    },
    {
        from: "Rahul",
        to: "Virat",
        msg: "You are the G.O.A.T.",
        created_at: new Date(),

    },
    {
        from: "Tony",
        to:"Peter",
        msg:"love you 3000",
        created_at: new Date(),

    },
];

Chat.insertMany(allChats);