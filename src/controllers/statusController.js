const Status = require("../models/Status");
const statusController = {
    addStatus: async (req, res) => {
        const { cash, dienThoai, yourIdDangKetNoi, skip, user } = req.body;

        try {
            const newStatus = new Status({
                cash,
                dienThoai,
                yourIdDangKetNoi,
                skip,
                user,
            });

            await newStatus.save();

            res.json({
                success: true,
                message: "Tao moi thanh Cong",
                status: newStatus,
            });
        } catch (error) {
            console.log(error);
            return res.status(500).json({
                success: false,
                message: "Internal server error",
            });
        }
    },
    getStatus: async (req, res) => {
        try {
            const status = await Status.findOne({ user: req.params.id });
            return res.status(200).json({
                success: true,
                message: "Fetch thành công!",
                status,
            });
        } catch (err) {
            return res.status(500).json(err);
        }
    },
    putStatus: async (req, res) => {
        const { cash, dienThoai, yourIdDangKetNoi, skip, user } = req.body;
        try {
            let updateStatus = {
                cash,
                dienThoai,
                yourIdDangKetNoi,
                skip,
                user,
            };

            const updateStatusCondition = {
                _id: req.params.id,
            };

            updateStatus = await Status.findOneAndUpdate(
                updateStatusCondition,
                updateStatus,
                {
                    new: true,
                }
            );
            // User not authorised to update post or post not found
            if (!updateStatus)
                return res.status(401).json({
                    success: false,
                    message: "Post not found or user not authorised",
                });

            return res.json({
                success: true,
                message: "Cập nhật thành công!",
                status: updateStatus,
            });
        } catch (error) {
            console.log(error);
            return res.status(500).json({
                success: false,
                message: "Internal server error",
            });
        }
    },
    // getAllStatus: async (req, res) => {},
};

module.exports = statusController;
