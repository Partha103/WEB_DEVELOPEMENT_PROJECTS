const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const listingSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: String,
    image: {
        type: String,
        default: "https://www.istockphoto.com/signature/photo/modern-luxury-house-with-private-infinity-pool-in-dusk-gm1319453433-406317068",
        set: (v) => typeof v === 'string' && v.trim() !== "" ? v.trim() : "https://www.istockphoto.com/signature/photo/modern-luxury-house-with-private-infinity-pool-in-dusk-gm1319453433-406317068",
    },
    price: Number,
    location: String,
    country: String,
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;