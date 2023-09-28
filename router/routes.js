const express=require('express');
const router=express.Router();
const signUpTemplateCopy=require("../models/Signupmodels");

router.post("/signup",(request,response)=>
{
    const signedUpUser=new signUpTemplateCopy({

        fullName:request.body.fullName,
        username:request.body.username,
        email:request.body.email,
        password:request.body.password,
    })
    signedUpUser.save().then(data=>
        {
            response.json(data); //console.log
        }).catch(error=>
            {
                response.json(error)
            })
})

module.exports=router;



