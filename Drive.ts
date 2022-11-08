import mongoose from "mongoose";

const DriveSchema = new mongoose.Schema({
    vehicle: {
        type: mongoose.Types.ObjectId,
        ref: "Vehicle"
    },
    distance: Number,
    date: Date
});

export default mongoose.model("Drive",DriveSchema);