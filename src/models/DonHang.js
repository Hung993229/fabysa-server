const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DonHangSchema = new Schema(
    {
        tenSp: {
            type: String,
        },
        linkSp: {
            type: String,
        },
        donGia: {
            type: Number,
        },
        slSP: {
            type: Number,
        },
        thanhTien: {
            type: Number,
        },
        goldDaTT: {
            type: Number,
        },
        soTienCanTT: {
            type: Number,
        },
        phuongThucTT: {
            type: String,
        },
        // nguoimua
        sdtNguoiMua: {
            type: String,
        },
        hoTenNguoiMua: { type: String },
        dcNguoiNMua: {
            type: String,
        },
        ghiChuNguoiMua: {
            type: String,
        },
        // Ctv
        userCTV: { type: String },
        hhCtv: { type: Number },
        // hoahongSan
        phiSan: {
            type: Number,
        },
        hhSan: {
            type: Number,
        },
        // nguoi ban
        giamTru: { type: String },
        // trang thi 1-dathang 2-dang giao 3-da giao 4-huydon
        trangThaiDH: {
            type: Number,
        },
        usershop: {
            type: Schema.Types.ObjectId,
            ref: "users",
        },
    },
    { timestamps: true }
);
module.exports = mongoose.model("DonHang", DonHangSchema);
