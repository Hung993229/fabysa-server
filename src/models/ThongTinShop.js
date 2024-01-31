const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ThongTinShopSchema = new Schema(
    {
        Banner: {
            type: String,
        },
        TenShop: {
            type: String,
        },
        dcShop: {
            type: String,
        },
        sdtShop: {
            type: String,
        },
        sloganShop: {
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
        cash: { type: Number },
        taikhoan: { type: Number },
        idChuShop: { type: String },
        idNhanVien: { type: String },
        linkZalo: { type: String },
        linkFacebook: { type: String },
        khachSi: { type: Array },
        khachCtv: { type: Array },

        user: {
            type: Schema.Types.ObjectId,
            ref: "users",
        },
    },
    { timestamps: true }
);
module.exports = mongoose.model("ThongTinShop", ThongTinShopSchema);
