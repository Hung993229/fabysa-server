const router = require("express").Router();
const statusController = require("../controllers/statusController");

// addPost
router.post(
    "/add-status",
    // middlewareController.verifyToken,
    statusController.addStatus
);
// getPost
router.get("/:id", statusController.getStatus);
// putPost
router.put("/:id", statusController.putStatus);
// deletePost
// router.delete("/:id", statusController.deleteStatus);
// getAllPost
// router.get(
//     "/",
// middlewareController.verifyToken,
//     statusController.getAllStatus
// );
module.exports = router;
