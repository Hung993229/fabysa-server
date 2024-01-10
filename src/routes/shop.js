const router = require("express").Router();
const shopController = require("../controllers/shopController");
// SanPham
// addPost
router.post(
    "/san-pham",
    // middlewareController.verifyToken,
    shopController.addSanPham
);
// getPost
router.get("/san-pham", shopController.getSanPham);
// getspDan
router.get("/san-pham-dan", shopController.getSanPhamDan);
router.get("/kho-tong-si", shopController.getKhoTongSi);

// putPost
router.put("/san-pham/:id", shopController.putSanPham);
// deletePost
router.delete("/san-pham/:id", shopController.deleteSanPham);

// Thong Tin Shop
// addThongTinShop
router.post(
    "/thong-tin-shop",
    // middlewareController.verifyToken,
    shopController.addThongTinShop
);
// getThongTinShop
router.get(
    "/thong-tin-shop",
    // middlewareController.verifyToken,
    shopController.getThongTinShop
);
// // getAllThongTinShop

router.get(
    "/thong-tin-all-shop",
    // middlewareController.verifyToken,
    shopController.getAllThongTinShop
);
// putThongTinShop
router.put("/thong-tin-shop/:id", shopController.putThongTinShop);
// deleteThongTinShop
router.delete("/thong-tin-shop/:id", shopController.deleteThongTinShop);

// donHang
// adddonHang
router.post(
    "/don-hang",
    // middlewareController.verifyToken,
    shopController.addDonHang
);
// getdonHang
router.get("/don-hang", shopController.getDonHang);
// putdonHang
router.put("/don-hang/:id", shopController.putDonHang);
// deletedonHang
router.delete("/don-hang/:id", shopController.deleteDonHang);
module.exports = router;
