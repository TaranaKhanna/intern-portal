import mongoose from "mongoose";

const internSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    referralCode: {
        type: String,
        required: true,
        unique: true
    },
    donations: {
        type: Number,
        default: 0
    }
});

const Intern = mongoose.model("Intern", internSchema);

export default Intern;