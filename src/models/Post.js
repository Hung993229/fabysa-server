const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// post la thong tin khach hang
const PostSchema = new Schema(
    {
        banner: { type: String },
        avatar: { type: String },
        hoTen: { type: String },
        soDienThoai: { type: String },
        gioiTinh: { type: String },
        // ngay sinh
        ngaySinh: { type: String },
        thangSinh: { type: String },
        namSinh: { type: String },
        // Hien Dang Song
        tinh: { type: String },
        huyen: { type: String },
        xa: { type: String },
        thonXom: { type: String },
        cash: { type: Number },
        vaiTro: { type: Number },
        user: {
            type: Schema.Types.ObjectId,
            ref: "users",
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("posts", PostSchema);
