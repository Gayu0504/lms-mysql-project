var express = require("express");
var Trainer = require("../models/Trainer");
var router = express.Router();

router.put("/",(req,res)=>{
        let body = req.body;
        let trainer = new Trainer();
        trainer.name = body.name;
        trainer.email = body.email;
        trainer.mobileno = body.mobileno;
        trainer.password = body.password;
        trainer.website = body.website;
        trainer.save().then((result)=>{
            res.end(JSON.stringify({status:"success",data:result}));
        },(err)=>{
            res.end(JSON.stringify({status:"failed",data:err}));
        });
});

router.get("/",(req,res)=>{
let trainer = new Trainer();
trainer.list().then((result)=>{
    res.end(JSON.stringify({status:"success",data:result}));
},(err)=>{
    res.end(JSON.stringify({status:"failed",data:err}));
});

});

router.get("/:id",(req,res)=>{
let trainer = new Trainer();
trainer.id = req.params.id;
trainer.get().then((result)=>{
    res.end(JSON.stringify({status:"success",data:result}));
},(err)=>{
    res.end(JSON.stringify({status:"failed",data:err}));
});
});

router.post("/",(req,res)=>{
    let body = req.body;
    let trainer = new Trainer();
    trainer.id = body.id;
    trainer.name = body.name;
    trainer.email = body.email;
    trainer.mobileno = body.mobileno;
    trainer.password = body.password;
    trainer.website = body.website;
    trainer.update().then((result)=>{
        res.end(JSON.stringify({status:"success",data:result}));
    },(err)=>{
        res.end(JSON.stringify({status:"failed",data:err}));
    });
});

router.delete("/:id",(req,res)=>{
    let trainer = new Trainer();
    trainer.id = req.params.id;
    trainer.delete().then((result)=>{
        res.end(JSON.stringify({status:"success",data:result}));
    },(err)=>{
        res.end(JSON.stringify({status:"failed",data:err}));
    });
});

module.exports= router;