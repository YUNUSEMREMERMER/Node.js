import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    complated: {
        type: Boolean,
        default:false
    }
},{collection: "Todo", timestamps: true})

export const todo = mongoose.model("Todo", todoSchema)