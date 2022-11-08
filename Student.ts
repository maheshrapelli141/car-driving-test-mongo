import mongoose from "mongoose";

const StudentSchema = new mongoose.Schema({
    person: {
        type: mongoose.Types.ObjectId,
        ref: "Person"
    },
    studentNumber: Number
});

export default mongoose.model("Student",StudentSchema);