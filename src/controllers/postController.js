const Post = require("../models/Post");

const postController = {
    addPost: async (req, res) => {
        const {
            banner,
            avatar,
            hoTen,
            soDienThoai,
            gioiTinh,
            ngaySinh,
            thangSinh,
            namSinh,
            tinh,
            huyen,
            xa,
            thonXom,
            cash,
            vaiTro,
            user,
        } = req.body;

        if (!hoTen) {
            return res.status(400).json({
                success: false,
                message: "Title and user is required",
            });
        }
        if (hoTen) {
            try {
                const newPost = new Post({
                    banner,
                    avatar,
                    hoTen,
                    soDienThoai,
                    gioiTinh,
                    ngaySinh,
                    thangSinh,
                    namSinh,
                    tinh,
                    huyen,
                    xa,
                    thonXom,
                    cash,
                    vaiTro,
                    user,
                });

                await newPost.save();

                res.json(newPost);
            } catch (error) {
                console.log(error);
                return res.status(500).json({
                    success: false,
                    message: "Internal server error",
                });
            }
        }
    },
    getPost: async (req, res) => {
        try {
            const post = await Post.findOne({ user: req.params.id });
            return res.status(200).json(post);
        } catch (err) {
            return res.status(500).json(err);
        }
    },
    putPost: async (req, res) => {
        const {
            banner,
            avatar,
            hoTen,
            soDienThoai,
            gioiTinh,
            ngaySinh,
            thangSinh,
            namSinh,
            tinh,
            huyen,
            xa,
            thonXom,
            cash,
            vaiTro,
            user,
        } = req.body;
        try {
            let updatedPost = {
                banner,
                avatar,
                hoTen,
                soDienThoai,
                gioiTinh,
                ngaySinh,
                thangSinh,
                namSinh,
                tinh,
                huyen,
                xa,
                thonXom,
                cash,
                vaiTro,
                user,
            };
            const postUpdateCondition = {
                _id: req.params.id,
                // user: req.userId,
            };

            updatedPost = await Post.findOneAndUpdate(
                postUpdateCondition,
                updatedPost,
                {
                    new: true,
                }
            );
            // User not authorised to update post or post not found
            if (!updatedPost)
                return res.status(401).json({
                    success: false,
                    message: "Post not found or user not authorised",
                });

            return res.json(updatedPost);
        } catch (error) {
            console.log(error);
            return res.status(500).json({
                success: false,
                message: "Internal server error",
            });
        }
    },
    deletePost: async (req, res) => {
        try {
            const post = await Post.findById(req.params.id);
            return res.json("delete post success");
        } catch (error) {
            console.log(error);
            return res.status(500).json({
                success: false,
                message: "Internal server error",
            });
        }
    },
    // getAllPost
    getAllPost: async (req, res) => {
        try {
            const allPost = await Post.find();

            return res.status(200).json(allPost);
        } catch (err) {
            return res.status(500).json(err);
        }
    },
};
module.exports = postController;
