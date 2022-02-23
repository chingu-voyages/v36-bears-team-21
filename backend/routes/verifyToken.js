const jwt = require("jsonwebtoken")

const verifyToken=(req, res, next)=>{
    const authHeader=req.headers.token;
    if (authHeader) {
        const token=authHeader.split(" ")[1]
        jwt.verify(token, process.env.JWT_SEC, (err, user)=>{
            if (err) {
                res.status(401).json("Token not found")
            }else {
                res.user=user
                next()
            }
        })
    }else{
        res.status(401).json("You are not authenticated")
    }
};
const verifyTokenAndAuthorization=(req, res, next)=>{
    verifyToken(req,req, ()=>{
        if(req.user.id===req.params.id || req.user.isAdmin){
            next()
        }else{
            res.status(200).json("You are not allowed to do that")
        }
    })
}

module.exports={verifyToken, verifyTokenAndAuthorization};