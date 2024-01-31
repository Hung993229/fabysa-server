const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const yourstatusSchema = new Schema(
    {
        khachSi: { type: Array },
        sanPhamCtv: { type: Array },
        sanPhamSi: { type: Array },
        idShop: { type: String },
        user: {
            type: Schema.Types.ObjectId,
            ref: "users",
        },
    },
    { timestamps: true }
);
module.exports = mongoose.model("yourstatus", yourstatusSchema);
