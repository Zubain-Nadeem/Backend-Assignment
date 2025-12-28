const checkUser = (req , res , next) => {
    const {name , age , email} = req.body;

    if (!name || !age || !email){
        return res.status(400).send(`All field are required`)
    }

    next()
}

module.exports = checkUser;