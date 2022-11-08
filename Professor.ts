import mongoose from "mongoose";

const ProfessorSchema = new mongoose.Schema({
    person: {
        type: mongoose.Types.ObjectId,
        ref: "Person"
    },
    salary: Number
});

export default mongoose.model("Professor",ProfessorSchema);