const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

let refreshTokens = [];
const authController = {
    registerUser: async (req, res) => {
        try {
            const salt = await bcrypt.genSalt(10);
            const hashed = await bcrypt.hash(req.body.password, salt);
            const hashed2 = await bcrypt.hash(req.body.email, salt);
            // create user new
            const newUser = await new User({
                username: req.body.username,
                email: hashed2,
                password: hashed,
            });
            //  save to DB
            const user = await newUser.save();
            return res.status(200).json(user);
        } catch (err) {
            return res.status(500).json(err);
        }
    },
    // generateAccessToken
    generateAccessToken: (user) => {
        return jwt.sign(
            {
                id: user.id,
                admin: user.admin,
            },
            process.env.JWT_ACCESS_KEY,
            { expiresIn: "365d" }
        );
    },
    // generateRefreshToken
    generateRefreshToken: (user) => {
        return jwt.sign(
            {
                id: user.id,
                admin: user.admin,
            },
            process.env.JWT_REFRESH_KEY,
            { expiresIn: "365d" }
        );
    },
    // login
    loginUser: async (req, res) => {
        try {
            const user = await User.findOne({ username: req.body.username });
            if (!user) {
                return res.status(404).json("wrong username");
            }
            const validPassword = await bcrypt.compare(
                req.body.password,
                user.password
            );
            if (!validPassword) {
                res.status(404).json("wrong password");
            }
            if (user && validPassword) {
                const accessToken = authController.generateAccessToken(user);
                const refreshToken = authController.generateRefreshToken(user);
                refreshTokens.push(refreshToken);

                res.cookie("refreshToken", refreshToken, {
                    httpOnly: true,
                    secure: false,
                    path: "/",
                    sameSite: "strict",
                });
                const { email, password, ...others } = user._doc;
                return res.status(200).json({ ...others, accessToken });
            }
        } catch (err) {
            return res.status(500).json(err);
        }
    },
    requestRefreshToken: async (req, res) => {
        // take refresh token from user
        const refreshToken = req.cookies.refreshToken;
        if (!refreshToken) return res.status(401).json("you are not auth");
        if (!refreshTokens.includes(refreshToken)) {
            return res.status(403).json("refreshToken is not valid");
        }

        jwt.verify(refreshToken, process.env.JWT_REFRESH_KEY, (err, user) => {
            if (err) {
                console.log(err);
            }
            refreshTokens = refreshTokens.filter(
                (token) => token !== refreshToken
            );

            // Create new accessToken, refreshToken

            const newAccessToken = authController.generateAccessToken(user);
            const newRefreshToken = authController.generateRefreshToken(user);
            refreshTokens.push(newRefreshToken);
            res.cookie("refreshToken", newRefreshToken, {
                httpOnly: true,
                secure: false,
                path: "/",
                sameSite: "strict",
            });
            return res.status(200).json({ accessToken: newAccessToken });
        });
    },
    // logout
    userLogout: async (req, res) => {
        res.clearCookie("refreshToken");
        refreshTokens = refreshTokens.filter(
            (token) => token !== req.cookies.refreshToken
        );
        return res.status(200).json("Logout success!");
    },
};

module.exports = authController;
