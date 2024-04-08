const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Listing = require("./models/listing.js");

const mongoURL = "mongodb://127.0.0.1:27017/wanderlust";

main().then(() => {
    console.log("connected to DB");
})
.catch((err) => {
    console.log(err);
});

async function main(){
    await mongoose.connect(mongoURL);
}

app.get("/testListing", async (req, res) => {
    let sampleListing = new Listing({
        title: "My New Villa",
        description: "By the beach",
        price: 1200,
        location: "Colangute, Goa",
        country: "India",
    });

    await sampleListing.save();
    console.log("Sample was saved successfully");
    res.send("successful testing");
});

app.get('/', (req, res) => {
    res.send("Hi, I am root");
});

app.listen(8080, () => {
    console.log("Server is listening to port 8080");
});