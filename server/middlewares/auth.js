const { tokenVerifier } = require("../helpers/jwt");
const { Item } = require("../models/");

const authentication = (req,res,next) => {
    console.log("Authentication");
    const { access_token } = req.headers;
    if (access_token) {
        const decoded = tokenVerifier(access_token);
        req.userData = decoded;
        // console.log("Access token >, ", decoded);
        next();
    } else (
        res.send({
            message: "Token not found",
        })
    )
};

const authorization = async (req,res,next) => {
    console.log("Authorization");
    try {
        const id = +req.params.id;
        const UserId = req.userData.id;
        const item = await Item.findOne({
            where: { id },
        });
        if(item) {
            if(item.UserId === UserId){
                next();
            }else{
                throw {
                    message: "You are not allowed.",
                };
            }
        }else{
            throw{
                message: "Item not found.",
            };
        }
    }catch (err) {
        res.send(err);
    }
}

module.exports = {
    authentication,
    authorization,
}