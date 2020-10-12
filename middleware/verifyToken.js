module.exports = (req, res, next) => {
    let tk =req.headers["access-token"]

    if(tk){

    }else{
        return res.status(400).json({
            mess: "Not access token set "
        })
    }
    next()
}