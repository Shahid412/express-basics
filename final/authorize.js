const authorize = (req, res, next) => {
    const {user }= req.query
    if (user==='blank'){
        req.user={name:'blank', id : 3}
        next()
    }
    else {
        res.status(401).send('Unauthorized')
    }
    //console.log('authorize') // simply logged without any if condition 

}

module.exports= authorize