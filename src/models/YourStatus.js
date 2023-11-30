const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const yourstatusSchema = new Schema(
    {
        yourIdYeuCauKetNoi: {
            type: String
        },
        dongYKetNoi: {
            type: String
        },
        tuChoiKetNoi: {
            type: String
        },
        huyKetNoi: {
            type: String
        },
        hoTen: {
            type: String,
        },
        namSinh: {
            type: String,
        },
        queQuan: {
            type: String,
        },
        dienThoai: {
            type: String,
        },
        user: {
            type: Schema.Types.ObjectId,
            ref: "users",
        },
    },
    { timestamps: true }
);
module.exports = mongoose.model("yourstatus", yourstatusSchema);
