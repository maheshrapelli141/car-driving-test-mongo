import mongoose from "mongoose";

const PersonSchmea = new mongoose.Schema({
    name: String
});

export default mongoose.model("Person", PersonSchmea);