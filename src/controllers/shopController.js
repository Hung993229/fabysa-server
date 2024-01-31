const SanPham = require("../models/SanPham");
const ThongTinShop = require("../models/ThongTinShop");
const DonHang = require("../models/DonHang");
const GioHang = require("../models/GioHang");
const shopController = {
    // San Pham
    addSanPham: async (req, res) => {
        const {
            AnhSanPham,
            TenSanPham,
            nhomSanPham,
            giaKhuyenMai,
            giaNiemYet,
            giaNhap,
            giaCtv,
            giaSi,
            thongTinSanPham,
            tinhTrang,
            TenShop,
            xa,
            huyen,
            tinh,
            vaiTro,
            idtk,
            user,
        } = req.body;

        try {
            const newSanPham = new SanPham({
                AnhSanPham,
                TenSanPham,
                nhomSanPham,
                giaKhuyenMai,
                giaNiemYet,
                giaNhap,
                giaCtv,
                giaSi,
                thongTinSanPham,
                tinhTrang,
                TenShop,
                xa,
                huyen,
                tinh,
                vaiTro,
                idtk,
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
        const { huyen, user } = req.query;

        try {
            const allSanpham = await SanPham.find({
                $and: [
                    { huyen: huyen },
                    { sanPhamDan: "Sản Phẩm Khác" },
                    { affiliate: "" },
                    { idtk: { $ne: user } },
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
    getArrIdSanPham: async (req, res) => {
        const arrIdSanPham = req.body;
        try {
            const arrSanpham = await SanPham.find({
                _id: { $in: arrIdSanPham },
            });
            // {
            // _id: { $in: arrIdSanPham.split(" ") },
            // }

            return res.status(200).json({
                success: true,
                message: "Fetch thành công!",
                arrSanpham,
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
            nhomSanPham,
            giaKhuyenMai,
            giaNiemYet,
            giaNhap,
            giaCtv,
            giaSi,
            thongTinSanPham,
            tinhTrang,
            TenShop,
            xa,
            huyen,
            tinh,
            vaiTro,
            idtk,
            user,
        } = req.body;
        try {
            let updateSanPham = {
                AnhSanPham,
                TenSanPham,
                nhomSanPham,
                giaKhuyenMai,
                giaNiemYet,
                giaNhap,
                giaCtv,
                giaSi,
                thongTinSanPham,
                tinhTrang,
                TenShop,
                xa,
                huyen,
                tinh,
                vaiTro,
                idtk,
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
    // San Pham
    // Thong Tin Shop
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
            idNhanVien,
            linkZalo,
            linkFacebook,
            khachSi,khachCtv,
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

                idNhanVien,
                linkZalo,
                linkFacebook,
                vaiTro,
                khachSi,khachCtv,
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
    getThongTinShop: async (req, res) => {
        const { id } = req.query;

        try {
            const shop = await ThongTinShop.findOne({
                _id: id,
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
    getAllThongTinShop: async (req, res) => {
        const { idShop } = req.query;
        try {
            const AllShop = await ThongTinShop.find({
                $or: [{ user: idShop }, { idNhanVien: idShop }],
            });
            return res.status(200).json({
                success: true,
                message: "Fetch thành công!",
                AllShop: AllShop,
            });
        } catch (err) {
            console.log("err", err);
            return res.status(500).json(err);
        }
    },
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

            idNhanVien,
            linkZalo,
            linkFacebook,
            khachSi,khachCtv,
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

                idNhanVien,

                linkZalo,
                linkFacebook,
                khachSi,khachCtv,
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
    // Thong Tin Shop
    // Don Hang
    addDonHang: async (req, res) => {
        const {
            khachHang,
            donHang,
            idShop,
            idCtv,
            idKhachHang,
            trangThaiDH,
            user,
        } = req.body;
        try {
            const newDonHang = new DonHang({
                khachHang,
                donHang,
                idShop,
                idCtv,
                idKhachHang,
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
        const { idShop, trangThaiDH } = req.query;
        try {
            const allDonHang = await DonHang.find({
                $and: [
                    {
                        $or: [
                            {
                                idShop: idShop,
                            },
                            { idCtv: idShop },
                        ],
                    },
                    { trangThaiDH: trangThaiDH },
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
            khachHang,
            donHang,
            idShop,
            idCtv,
            idKhachHang,
            trangThaiDH,
            user,
        } = req.body;

        try {
            let updateDonHang = {
                khachHang,
                donHang,
                idShop,
                idCtv,
                idKhachHang,
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
    // Don Hang
    // GioHang
    addGioHang: async (req, res) => {
        const { idShop, gioHang, user } = req.body;
        try {
            const newGioHang = new GioHang({ idShop, gioHang, user });

            await newGioHang.save();

            res.json({
                success: true,
                message: "Tao moi thanh Cong",
                gioHang: newGioHang,
            });
        } catch (err) {
            return res.status(500).json(err);
        }
    },
    getAllGioHang: async (req, res) => {
        const { user } = req.query;
        try {
            const allGioHang = await GioHang.find({ user: user });
            return res.status(200).json({
                success: true,
                message: "Fetch thành công!",
                allGioHang: allGioHang,
            });
        } catch (err) {
            console.log("err", err);
            return res.status(500).json(err);
        }
    },
    getGioHang: async (req, res) => {
        const { idShop, user } = req.query;

        try {
            const gioHang = await GioHang.findOne({
                $and: [{ idShop: idShop }, { user: user }],
            });
            return res.status(200).json({
                success: true,
                message: "Fetch thành công!",
                gioHang: gioHang,
            });
        } catch (err) {
            console.log("err", err);
            return res.status(500).json(err);
        }
    },
    putGioHang: async (req, res) => {
        const { idShop, gioHang, user } = req.body;
        try {
            let updateGioHang = {
                idShop,
                gioHang,
                user,
            };

            const updateGioHangCondition = {
                _id: req.params.id,
            };

            updateGioHang = await GioHang.findOneAndUpdate(
                updateGioHangCondition,
                updateGioHang,
                {
                    new: true,
                }
            );
            // User not authorised to update post or post not found
            if (!updateGioHang)
                return res.status(401).json({
                    success: false,
                    message: "Post not found or user not authorised",
                });

            return res.json({
                success: true,
                message: "Cập nhật thành công!",
                gioHang: updateGioHang,
            });
        } catch (error) {
            console.log(error);
            return res.status(500).json({
                success: false,
                message: "Internal server error",
            });
        }
    },
    deleteGioHang: async (req, res) => {
        try {
            const deleteGioHang = await GioHang.findByIdAndDelete(
                req.params.id
            );
            return res.status(200).json({
                success: true,
                message: "Delete thành công!",
                gioHang: null,
            });
        } catch (err) {
            return res.status(500).json(err);
        }
    },
    // GioHang
};

module.exports = shopController;
