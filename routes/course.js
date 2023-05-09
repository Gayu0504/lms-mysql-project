var express = require("express");
var Course = require("../models/Course");
var fs = require("fs");
var router = express.Router();

router.put("/",(req,res)=>{
        let body = req.body;
        let course = new Course();
        course.trainerid = body.trainerid;
        course.name = body.name;
        course.description = body.description;
        let randomname = (Math.random()+1).toString(36).substring(7) + ".png";
        course.imgpath = "coursepics/"+randomname+".png";
        let base64image = body.img;

        // base64image = base64image.replace(/^data:image\/[a-z]*;base64,/, "");
        if(base64image !="")
        {
            base64image = base64image.replace(/^data:image\*;base64,/,"");

            fs.writeFile("assets/"+course.imgpath,base64image,"base64", function(err){
                if(err){
                    console.log("error while saving image" + err);
                }
            });
        }

        course.save().then((result)=>{
            res.end(JSON.stringify({status:"success",data:result}));
        },(err)=>{
            res.end(JSON.stringify({status:"failed",data:err}));
        });
});

router.get("/:trainerid",(req,res)=>{
let course = new Course();
course.trainerid = req.params.trainerid;

course.list().then((result)=>{
    res.end(JSON.stringify({status:"success",data:result}));
},(err)=>{
    res.end(JSON.stringify({status:"failed",data:err}));
});

});

router.get("/:trainerid/:id",(req,res)=>{
let course = new Course();
course.id = req.params.id;

course.get().then((result)=>{
    res.end(JSON.stringify({status:"success",data:result}));
},(err)=>{
    res.end(JSON.stringify({status:"failed",data:err}));
});
});

router.post("/",(req,res)=>{
    let body = req.body;
    let course = new Course();
    course.id = body.id;
    course.name = body.name;
    course.description = body.description;
    
    course.update().then((result)=>{
        res.send(JSON.stringify({status:"success",data:result}));
    },(err)=>{
        res.send(JSON.stringify({status:"failed",data:err}));
    });
});

router.delete("/:id",(req,res)=>{
    let course = new Course();
    course.id = req.params.id;

    course.delete().then((result)=>{
        res.end(JSON.stringify({status:"success",data:result}));
    },(err)=>{
        res.end(JSON.stringify({status:"failed",data:err}));
    });
});

module.exports= router;