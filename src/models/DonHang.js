const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DonHangSchema = new Schema(
    {
        khachHang: {
            type: Object,
        },
        donHang: {
            type: Array,
        },
        idShop: { type: String },
        idCtv: { type: String },
        idKhachHang: { type: String },
        // trang thai 1-dathang 2-dang giao 3-da giao 4-huydon 5-ctv chua tt hh 6-da tt hhong
        trangThaiDH: {
            type: Number,
        },
        user: {
            type: String,
        },
    },
    { timestamps: true }
);
module.exports = mongoose.model("DonHang", DonHangSchema);
