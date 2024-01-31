const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SanPhamSchema = new Schema(
    {
        AnhSanPham: {
            type: String,
        },
        TenSanPham: {
            type: String,
        },
        nhomSanPham: {
            type: String,
        },
        giaKhuyenMai: {
            type: Number,
        },
        giaNiemYet: {
            type: Number,
        },
       
        giaNhap: {
            type: String,
        },
        giaCtv: {
            type: String,
        },
        giaSi: {
            type: String,
        },
        thongTinSanPham: {
            type: String,
        },
        tinhTrang: {
            type: String,
        },
        TenShop: {
            type: String,
        },

        xa: {
            type: String,
        },
        huyen: {
            type: String,
        },
        tinh: {
            type: String,
        },
        vaiTro: {
            type: String,
        },
        idtk:{
            type: String,
        },

        user: {
            type: Schema.Types.ObjectId,
            ref: "users",
        },
    },
    { timestamps: true }
);
module.exports = mongoose.model("SanPham", SanPhamSchema);
