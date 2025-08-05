import rateLimit from "../config/upstash.js";

const rateLimiter = async (req, res, next) => {
    try{
        const {success} = await rateLimit.limit("my-limit-key");

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
