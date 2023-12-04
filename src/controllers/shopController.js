const SanPham = require("../models/SanPham");
const ThongTinShop = require("../models/ThongTinShop");
const DonHang = require("../models/DonHang");
const shopController = {
    addSanPham: async (req, res) => {
        const {
            AnhSanPham,
            TenSanPham,
            giaKhuyenMai,
            giaNiemYet,
            nhomSanPham,
            sanPhamDan,
            thongTinSanPham,
            giaNhap,
            hoahongCTV,
            TenShop,
            xa,
            huyen,
            tinh,
            vaiTro,
            affiliate,
            user,
        } = req.body;

        try {
            const newSanPham = new SanPham({
                AnhSanPham,
                TenSanPham,
                giaKhuyenMai,
                giaNiemYet,
                nhomSanPham,
                sanPhamDan,
                thongTinSanPham,
                giaNhap,
                hoahongCTV,
                TenShop,
                xa,
                huyen,
                tinh,
                vaiTro,
                affiliate,
                user,
            });

            await newSanPham.save();

            res.json({
                success: true,
                message: "Tao moi thanh Cong",
                sanPham: newSanPham,
            });
        } catch (error) {
            console.log(error);
            return res.status(500).json({
                success: false,
                message: "Internal server error",
            });
        }
    },
    getSanPham: async (req, res) => {
        const { user } = req.query;
        try {
            const allSanpham = await SanPham.find({
                user: user,
            });
            return res.status(200).json({
                success: true,
                message: "Fetch thành công!",
                allSanpham,
            });
        } catch (err) {
            console.log("err", err);
            return res.status(500).json(err);
        }
    },
    getSanPhamDan: async (req, res) => {
        const { huyen } = req.query;
        try {
            const allSanpham = await SanPham.find({
                $or: [
                    {
                        $and: [
                            { huyen: huyen },
                            { sanPhamDan: "Sản Phẩm Dẫn" },
                        ],
                    },
                    { sanPhamDan: "Sản Phẩm Dẫn" },
                    { vaiTro: 2 },
                ],
            });
            return res.status(200).json({
                success: true,
                message: "Fetch thành công!",
                allSanpham,
            });
        } catch (err) {
            console.log("err", err);
            return res.status(500).json(err);
        }
    },
    getKhoTongSi: async (req, res) => {
        const { huyen } = req.query;
        try {
            const allSanpham = await SanPham.find({
                $and: [
                    { huyen: huyen },
                    { sanPhamDan: "Sản Phẩm Khác" },
                    { affiliate: "" },
                ],
            });
            return res.status(200).json({
                success: true,
                message: "Fetch thành công!",
                allSanpham,
            });
        } catch (err) {
            console.log("err", err);
            return res.status(500).json(err);
        }
    },

    putSanPham: async (req, res) => {
        const {
            AnhSanPham,
            TenSanPham,
            giaKhuyenMai,
            giaNiemYet,
            nhomSanPham,
            sanPhamDan,
            thongTinSanPham,
            giaNhap,
            hoahongCTV,
            TenShop,
            xa,
            huyen,
            tinh,
            vaiTro,
            affiliate,
            user,
        } = req.body;
        try {
            let updateSanPham = {
                AnhSanPham,
                TenSanPham,
                giaKhuyenMai,
                giaNiemYet,
                nhomSanPham,
                sanPhamDan,
                thongTinSanPham,
                giaNhap,
                hoahongCTV,
                TenShop,
                xa,
                huyen,
                tinh,
                vaiTro,
                affiliate,
                user,
            };

            const updateSanPhamCondition = {
                _id: req.params.id,
            };

            updateshop = await SanPham.findOneAndUpdate(
                updateSanPhamCondition,
                updateSanPham,
                {
                    new: true,
                }
            );
            // User not authorised to update post or post not found
            if (!updateSanPham)
                return res.status(401).json({
                    success: false,
                    message: "Post not found or user not authorised",
                });

            return res.json({
                success: true,
                message: "Cập nhật thành công!",
                shop: updateSanPham,
            });
        } catch (error) {
            console.log(error);
            return res.status(500).json({
                success: false,
                message: "Internal server error",
            });
        }
    },
    // delete shop
    deleteSanPham: async (req, res) => {
        try {
            const deleteSanPham = await SanPham.findByIdAndDelete(
                req.params.id
            );
            return res.status(200).json({
                success: true,
                message: "Delete thành công!",
                SanPham: null,
            });
        } catch (err) {
            return res.status(500).json(err);
        }
    },
    // Thong Tin Shop
    // Them Shop
    addThongTinShop: async (req, res) => {
        const {
            Banner,
            TenShop,
            dcShop,
            sdtShop,
            sloganShop,
            xa,
            huyen,
            tinh,
            cash,
            taikhoan,
            user,
            vaiTro,
        } = req.body;

        try {
            const themThongTinShop = new ThongTinShop({
                Banner,
                TenShop,
                dcShop,
                sdtShop,
                sloganShop,
                xa,
                huyen,
                tinh,
                cash,
                taikhoan,
                vaiTro,
                user,
            });

            await themThongTinShop.save();

            res.json({
                success: true,
                message: "Tao moi thanh Cong",
                shop: themThongTinShop,
            });
        } catch (error) {
            console.log(error);
            return res.status(500).json({
                success: false,
                message: "Internal server error",
            });
        }
    },
    // Get Shop
    getThongTinShop: async (req, res) => {
        const { userId } = req.query;
        try {
            const shop = await ThongTinShop.findOne({
                user: userId,
            });
            return res.status(200).json({
                success: true,
                message: "Fetch thành công!",
                shop: shop,
            });
        } catch (err) {
            console.log("err", err);
            return res.status(500).json(err);
        }
    },

    // Get All Shop
    // getAllThongTinShop: async (req, res) => {
    //     const { user } = req.query;
    //     try {
    //         const sanpham = await ThongTinShop.find({
    //             user: user,
    //         });
    //         return res.status(200).json({
    //             success: true,
    //             message: "Fetch thành công!",
    //             sanpham,
    //         });
    //     } catch (err) {
    //         console.log("err", err);
    //         return res.status(500).json(err);
    //     }
    // },

    // Put Shop

    putThongTinShop: async (req, res) => {
        const {
            Banner,
            TenShop,
            dcShop,
            sdtShop,
            sloganShop,
            xa,
            huyen,
            tinh,
            user,
            cash,
            taikhoan,
            vaiTro,
        } = req.body;
        try {
            let updateshop = {
                Banner,
                TenShop,
                dcShop,
                sdtShop,
                sloganShop,
                xa,
                huyen,
                tinh,
                user,
                cash,
                taikhoan,
                vaiTro,
            };

            const updateshopCondition = {
                _id: req.params.id,
            };

            updateshop = await ThongTinShop.findOneAndUpdate(
                updateshopCondition,
                updateshop,
                {
                    new: true,
                }
            );
            // User not authorised to update post or post not found
            if (!updateshop)
                return res.status(401).json({
                    success: false,
                    message: "Post not found or user not authorised",
                });

            return res.json({
                success: true,
                message: "Cập nhật thành công!",
                shop: updateshop,
            });
        } catch (error) {
            console.log(error);
            return res.status(500).json({
                success: false,
                message: "Internal server error",
            });
        }
    },

    // Delete Shop
    deleteThongTinShop: async (req, res) => {
        try {
            const deleteshop = await ThongTinShop.findByIdAndDelete(
                req.params.id
            );
            return res.status(200).json({
                success: true,
                message: "Delete thành công!",
                ThongTinShop: null,
            });
        } catch (err) {
            return res.status(500).json(err);
        }
    },
    // Don Hang

    addDonHang: async (req, res) => {
        const {
            tenSp,
            linkSp,
            donGia,
            giaNhap,
            slSP,
            thanhTien,
            goldDaTT,
            soTienCanTT,
            phuongThucTT,
            // nguoimua
            idPost,
            sdtNguoiMua,
            hoTenNguoiMua,
            dcNguoiNMua,
            ghiChuNguoiMua,
            // Ctv
            affiliate,
            hoahongCTV,
            // nguoi ban
            giamTru,
            trangThaiDH,
            user,
        } = req.body;
        try {
            const newDonHang = new DonHang({
                tenSp,
                linkSp,
                donGia,
                giaNhap,
                slSP,
                thanhTien,
                goldDaTT,
                soTienCanTT,
                phuongThucTT,
                // nguoimua
                idPost,
                sdtNguoiMua,
                hoTenNguoiMua,
                dcNguoiNMua,
                ghiChuNguoiMua,
                // Ctv
                affiliate,
                hoahongCTV,
                // nguoi ban
                giamTru,
                trangThaiDH,
                user,
            });

            await newDonHang.save();

            res.json({
                success: true,
                message: "Tao moi thanh Cong",
                donHang: newDonHang,
            });
        } catch (err) {
            return res.status(500).json(err);
        }
    },
    getDonHang: async (req, res) => {
        const { userId, trangThaiDH } = req.query;
        console.log("user", userId);
        console.log("trangThaiDH", trangThaiDH);
        try {
            const allDonHang = await DonHang.find({
                $or: [
                    {
                        $and: [
                            {
                                user: userId,
                            },
                            { trangThaiDH: trangThaiDH },
                        ],
                    },
                    {
                        $and: [
                            { affiliate: userId },
                            { trangThaiDH: trangThaiDH },
                        ],
                    },
                ],
            });
            return res.status(200).json({
                success: true,
                message: "Fetch thành công!",
                allDonHang: allDonHang,
            });
        } catch (err) {
            console.log("err", err);
            return res.status(500).json(err);
        }
    },
    putDonHang: async (req, res) => {
        const {
            tenSp,
            linkSp,
            donGia,
            giaNhap,
            slSP,
            thanhTien,
            goldDaTT,
            soTienCanTT,
            phuongThucTT,
            // nguoimua
            idPost,
            sdtNguoiMua,
            hoTenNguoiMua,
            dcNguoiNMua,
            ghiChuNguoiMua,
            // Ctv
            affiliate,
            hoahongCTV,
            // nguoi ban
            giamTru,
            trangThaiDH,
            user,
        } = req.body;
        try {
            let updateDonHang = {
                tenSp,
                linkSp,
                donGia,
                giaNhap,
                slSP,
                thanhTien,
                goldDaTT,
                soTienCanTT,
                phuongThucTT,
                // nguoimua
                idPost,
                sdtNguoiMua,
                hoTenNguoiMua,
                dcNguoiNMua,
                ghiChuNguoiMua,
                // Ctv
                affiliate,
                hoahongCTV,
                // nguoi ban
                giamTru,
                trangThaiDH,
                user,
            };

            const updateDonHangCondition = {
                _id: req.params.id,
            };

            updateDonHang = await DonHang.findOneAndUpdate(
                updateDonHangCondition,
                updateDonHang,
                {
                    new: true,
                }
            );
            // User not authorised to update post or post not found
            if (!updateDonHang)
                return res.status(401).json({
                    success: false,
                    message: "Post not found or user not authorised",
                });

            return res.json({
                success: true,
                message: "Cập nhật thành công!",
                donHang: updateDonHang,
            });
        } catch (error) {
            console.log(error);
            return res.status(500).json({
                success: false,
                message: "Internal server error",
            });
        }
    },
    deleteDonHang: async (req, res) => {
        try {
        } catch (err) {
            return res.status(500).json(err);
        }
    },
};

module.exports = shopController;
