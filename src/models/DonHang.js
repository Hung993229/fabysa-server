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
        giaNhap: {
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
        idPost: {
            type: String,
        },
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
        affiliate: { type: String },
        hoahongCTV: { type: Number },
        // nguoi ban
        giamTru: { type: String },
        // trang thi 1-dathang 2-dang giao 3-da giao 4-huydon
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
