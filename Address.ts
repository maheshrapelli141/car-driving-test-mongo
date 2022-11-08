import mongoose from "mongoose";

const AddressSchema = new mongoose.Schema({
    person: {
        type: mongoose.Types.ObjectId,
        ref: "Person"
    },
    street: String,
    city: String,
    country: String
});

export default mongoose.model("Address",AddressSchema);