const router = require("express").Router();
const yourStatusController = require("../controllers/yourStatusController");

// addPost
router.post(
    "/add-status",
    // middlewareController.verifyToken,
    yourStatusController.addYourStatus
);
// getPost
router.get("/:id", yourStatusController.getYourStatus);
// putPost
router.put("/:id", yourStatusController.putYourStatus);
// deletePost
router.delete("/:id", yourStatusController.deleteYourStatus);
router.delete("/delete-many/:id", yourStatusController.deleteAllYourStatus);
module.exports = router;
