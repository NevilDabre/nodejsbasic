function login(req,res,next){

    console.log(req.body);

    if(req.body.password ==='1'){
        next()
    }else{
        throw 'Error'
    }

}

exports.login = login;