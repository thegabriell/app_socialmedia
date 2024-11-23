const express = require('express');
const router = express.Router();


router.get('/home',(req,res)=>{
    res.render('home');
});

router.get('/',(req,res)=>{
    res.render('index');
});

router.get('/feed',(req,res)=>{
    res.render('feed');
});

router.get('/profile',(req,res)=>{
    res.render('profile');
});

router.get('/messages',(req,res)=>{
    res.render('messages');
});

module.exports = router;



