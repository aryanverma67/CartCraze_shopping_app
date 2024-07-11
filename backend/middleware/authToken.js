const jwt = require('jsonwebtoken');

const authToken = async (req, res, next) => {
    try {
        const token = req.cookies?.token;
        console.log("Token:",token);


        if (!token) {
            return res.status(200).json({
                message: "Please Login...!",
                error: true,
                success: false
            });
        }

        jwt.verify(token, process.env.TOKEN_SECRET_KEY, (err, decoded) => {
            if (err) {
                console.log("JWT verification error:", err);
                return res.status(401).json({
                    message: "Invalid token",
                    error: true,
                    success: false
                });
            }

            console.log("Decoded token:", decoded);
            req.userId = decoded?._id;

            next();
        });

    } catch (err) {
        res.status(400).json({
            message: err.message || err,
            data: [],
            error: true,
            success: false
        });
    }
};

module.exports = authToken;
