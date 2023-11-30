const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const statusSchema = new Schema(
    {
        cash: {
            type: Number,
        },
        dienThoai: {
            type: String,
        },
        yourIdDangKetNoi: {
            type: String
        },
        skip: {
            type: Number,
        },
        user: {
            type: Schema.Types.ObjectId,
            ref: "users",
        },
    },
    { timestamps: true }
);
module.exports = mongoose.model("status", statusSchema);
