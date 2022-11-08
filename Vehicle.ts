import mongoose from "mongoose";

const VehicleSchema = new mongoose.Schema({
    person: {
        type: mongoose.Types.ObjectId,
        ref: "Person"
    },
    plateNumber: Number,
    model: String
});

export default mongoose.model("Vehicle",VehicleSchema);