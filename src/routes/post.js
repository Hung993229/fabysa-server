const router = require("express").Router();
const postController = require("../controllers/postController");
const middlewareController = require("../controllers/middlewareController");

// addPost
router.post(
    "/",
    // middlewareController.verifyToken,
    postController.addPost
);
// getPost
router.get("/:id", postController.getPost);
// putPost
router.put("/:id", postController.putPost);
// deletePost
router.delete("/:id", postController.deletePost);
// getAllPost
router.get(
    "/",
    // middlewareController.verifyToken,
    postController.getAllPost
);
module.exports = router;
