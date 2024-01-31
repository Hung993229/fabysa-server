const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const GioHangSchema = new Schema(
    {
        idShop: {
            type: String,
        },
        gioHang: {
            type: Array,
        },
        user: {
            type: String,
        },
    },
    { timestamps: true }
);
module.exports = mongoose.model("GioHang", GioHangSchema);
