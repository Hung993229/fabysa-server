const yourstatus = require("../models/YourStatus");
const yourStatusController = {
    addYourStatus: async (req, res) => {
        const {
            yourIdYeuCauKetNoi,
            dongYKetNoi,
            tuChoiKetNoi,
            huyKetNoi,
            hoTen,
            namSinh,
            queQuan,
            dienThoai,
            user,
        } = req.body;

        try {
            const newYourStatus = new yourstatus({
                yourIdYeuCauKetNoi,
                dongYKetNoi,
                tuChoiKetNoi,
                huyKetNoi,
                hoTen,
                namSinh,
                queQuan,
                dienThoai,
                user,
            });

            await newYourStatus.save();

            res.json({
                success: true,
                message: "Tao moi thanh Cong",
                yourstatus: newYourStatus,
            });
        } catch (error) {
            console.log(error);
            return res.status(500).json({
                success: false,
                message: "Internal server error",
            });
        }
    },
    getYourStatus: async (req, res) => {
        try {
            const yourStatus = await yourstatus.find({
                $or: [
                    {
                        user: req.params.id,
                    },
                    { yourIdYeuCauKetNoi: req.params.id },
                ],
            });
            return res.status(200).json({
                success: true,
                message: "Fetch thành công!",
                yourStatus,
            });
        } catch (err) {
            return res.status(500).json(err);
        }
    },
    putYourStatus: async (req, res) => {
        const {
            yourIdYeuCauKetNoi,
            dongYKetNoi,
            tuChoiKetNoi,
            huyKetNoi,
            hoTen,
            namSinh,
            queQuan,
            user,
        } = req.body;
        try {
            let updateYourStatus = {
                yourIdYeuCauKetNoi,
                dongYKetNoi,
                tuChoiKetNoi,
                huyKetNoi,
                hoTen,
                namSinh,
                queQuan,
                dienThoai,
                user,
            };

            const updateYourStatusCondition = {
                _id: req.params.id,
            };

            updateYourStatus = await yourstatus.findOneAndUpdate(
                updateYourStatusCondition,
                updateYourStatus,
                {
                    new: true,
                }
            );
            // User not authorised to update post or post not found
            if (!updateYourStatus)
                return res.status(401).json({
                    success: false,
                    message: "Post not found or user not authorised",
                });

            return res.json({
                success: true,
                message: "Cập nhật thành công!",
                yourstatus: updateYourStatus,
            });
        } catch (error) {
            console.log(error);
            return res.status(500).json({
                success: false,
                message: "Internal server error",
            });
        }
    },
    // delete yourStatus
    deleteYourStatus: async (req, res) => {
        try {
            const deleteyourstatus = await yourstatus.findByIdAndDelete(
                req.params.id
            );
            return res.status(200).json({
                success: true,
                message: "Delete thành công!",
                yourstatus: null,
            });
        } catch (err) {
            return res.status(500).json(err);
        }
    },
    // Delete all yourStatus
    deleteAllYourStatus: async (req, res) => {
        try {
            const deleteallYourStatus = await yourstatus.deleteMany({
                $or: [
                    {
                        user: req.params.id,
                    },
                    { dongYKetNoi: req.params.id },
                ],
            });
            return res.status(200).json({
                success: true,
                message: 1,
                yourstatus: null,
            });
        } catch (err) {
            return res.status(500).json(err);
        }
    },
    // getAllStatus: async (req, res) => {},
};

module.exports = yourStatusController;
