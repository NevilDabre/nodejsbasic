var express = require('express');

var auth = require('./auth');

var router = express.Router();

var EmpSchema = require('./modules/emp.model');

function hello(res){
    console.log('next');
    res.send('next');
    
}

router.get('/', function(req,res, next){
    console.log(3+4);
    next();
}, function(req,res, next){
    hello(res);
})

router.post('/', auth.login, function(req,res, next){
    var emp = new EmpSchema({
        id: req.body.id,
        name: req.body.name,
        created_at : new Date()
    })

    return emp.save()
        .then(function(entity){
            res.send(entity)
        })
        .catch(function(err){
            res.send({
                message: 'Error Occured',
                err: err
            }).status(400);
        })
})

router.delete('/', function(req,res, next){
    res.send('Hello from delete');
})

router.put('/', function(req,res, next){
    res.send('Hello from put');
})


module.exports = router;