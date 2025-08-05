import rateLimit from "../config/upstash.js";

const rateLimiter = async (req, res, next) => {
    // Implement rate limiting logic here
    try{
        const {success} = await rateLimit.limit("my-limit-key");
        // we can implement limits in different identifiers (userId, IP address, etc.)
        if(!success){
            return res.status(429).json({
                message: "Too Many Requests, please try again later"
            });
        }
        // Call next() to proceed to the next middleware/route handler
        next();
    }catch(error){
        console.log("Rate Limit Error", error);
        next(error);
    }
};

export default rateLimiter;
