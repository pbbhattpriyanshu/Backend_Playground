const jwt = require('jsonwebtoken');

async function authArtist(req, res, next) {
    const token = req.cookies.token;

    if(!token) {
        return res.status(401).json({ message: "Unauthorized" });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        if(decoded.role !== "artist") {
            return res.status(403).json({ message: "You don't have an access to create a music" });
        }

        req.user = decoded;
        next();
    } catch (error) {
        console.log("Error verifying token:", error);
        return res.status(401).json({ message: "Unauthorized" });
    }
}

async function authUser(req, res, next) {
      const token = req.cookies.token;

    if(!token) {
        return res.status(401).json({ message: "Unauthorized" });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        if(decoded.role !== "user" && decorded.role !== "artist") {
            return res.status(403).json({ message: "You don't have an access to listen a music" });
        }

        req.user = decoded;
        next();
    } catch (error) {
        console.log("Error verifying token:", error);
        return res.status(401).json({ message: "Unauthorized" });
    }
}
module.exports = { authArtist, authUser };