import jwt from "jsonwebtoken";

const isAuthenticated = async (req , res, next)=>{

    try{
        const token = req.cookie.token;
        if(!token){
            return res.status(400).json({
                message: "User not Authenticated..",

            })
        }
        const decode = jwt.verify(token,process.env.JWT_SECRET_KEY);
        if (!decode){
            return res.status(400).json({message:"Token is not verified.."});
        }

        console.log(decode);
        req.id=decode.userId;

        next();
    }
    catch(error){
        console.log(error);
    }
}

export default isAuthenticated;