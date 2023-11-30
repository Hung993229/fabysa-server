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
        giaKhuyenMai: {
            type: Number,
        },
        giaNiemYet: {
            type: Number,
        },
        nhomSanPham: {
            type: String,
        },
        sanPhamDan: {
            type: String,
        },
        thongTinSanPham: {
            type: String,
        },
        giaNhap: {
            type: String,
        }, 
        hoahongCTV: {
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

        user: {
            type: Schema.Types.ObjectId,
            ref: "users",
        },
    },
    { timestamps: true }
);
module.exports = mongoose.model("SanPham", SanPhamSchema);