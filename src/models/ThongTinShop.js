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
        vaiTro: { type: String },
        user: {
            type: Schema.Types.ObjectId,
            ref: "users",
        },
    },
    { timestamps: true }
);
module.exports = mongoose.model("ThongTinShop", ThongTinShopSchema);
