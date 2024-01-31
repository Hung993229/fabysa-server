const router = require("express").Router();
const shopController = require("../controllers/shopController");
// SanPham
router.post("/san-pham", shopController.addSanPham);
router.get("/san-pham", shopController.getSanPham);
router.get("/san-pham-dan", shopController.getSanPhamDan);
router.get("/kho-tong-si", shopController.getKhoTongSi);
router.post("/arr-san-pham", shopController.getArrIdSanPham);
router.put("/san-pham/:id", shopController.putSanPham);
router.delete("/san-pham/:id", shopController.deleteSanPham);
// San Pham
// Thong Tin Shop
router.post("/thong-tin-shop", shopController.addThongTinShop);
router.get("/thong-tin-shop", shopController.getThongTinShop);
router.get("/thong-tin-all-shop", shopController.getAllThongTinShop);
router.put("/thong-tin-shop/:id", shopController.putThongTinShop);
router.delete("/thong-tin-shop/:id", shopController.deleteThongTinShop);
// Thong Tin Shop
// Don hang
router.post("/don-hang", shopController.addDonHang);
router.get("/don-hang", shopController.getDonHang);
router.put("/don-hang/:id", shopController.putDonHang);
router.delete("/don-hang/:id", shopController.deleteDonHang);
// Don hang
// Gio Hang
router.post("/gio-hang", shopController.addGioHang);
router.get("/all-gio-hang", shopController.getAllGioHang);
router.get("/gio-hang", shopController.getGioHang);
router.put("/gio-hang/:id", shopController.putGioHang);
router.delete("/gio-hang/:id", shopController.deleteGioHang);
// Gio Hang

module.exports = router;
