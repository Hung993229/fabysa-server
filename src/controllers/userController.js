const User = require("../models/User");

const userController = {
    // get all users
    getAllUsers: async (req, res) => {
        try {
            const user = await User.find().select("_id username admin");
            return res.status(200).json(user);
        } catch (err) {
            return res.status(500).json(err);
        }
    },

    // delete user
    deleteUsers: async (req, res) => {
        try {
            const user = await User.findById(req.params.id);
            return res.status(200).json("Delete user success!");
        } catch (err) {
            return res.status(500).json(err);
        }
    },

    
};

module.exports = userController;
