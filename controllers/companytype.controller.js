require('dotenv').config();

const jwt = require('jsonwebtoken');

const bcryptjs = require("bcryptjs");

const validator = require("fastest-validator");

const { CompanyTpes } = require('../models');

const JWT_SECRET = process.env.JWT_SECRET;

const SALT = process.env.SALT;



// --- SELECT ALL DATA ---------
function index(req, res, next) {
    CompanyTpes.findAll().then((CompanyTpes)=>{
        res.send(CompanyTpes);   
    }).catch((err)=>{
        res.send(err);
    });
}

// --- SHOW SPESIFIC DATA ---------
function show(req, res, next) {
    const id = req.params.id;
    CompanyTpes.findByPk(id).then((users)=>{
        res.send(users);   
    }).catch((err)=>{
        res.send(err);
    });
}

// --- CREATE NEW DATA ---------
function create(req, res, next) {
    const data ={
        type : req.body.type,
        description : req.body.description,
        cretedBy : req.body.createdby,
        createdAt : req.body.createdAt,    
        isActive : req.body.password,            
        isDeleted:req.body.isDeleted      
    }
    CompanyTpes.create(data).then((result)=>{
        res.send("Insert Sukses ...");
    }).catch((err)=> {
        res.send(err);
    });    
}

// --- UPDATE DATA ---------
function update(req, res, next) {
    const id = req.params.id;
    const data ={
        type : req.body.username,
        description : req.body.email,
        cretedBy : req.body.bio,
        createdAt : req.body.pic,    
        isActive : req.body.password,            
        isDeleted:req.body.isDeleted        
    }    
    CompanyTpes.update(data, {where: {id:id}}).then((result)=>{
        res.send("Update Success");
    }).catch((err)=> {
        res.send(err);
    });        
}

// --- SOFT DELETE ---------
function destroy(req, res, next) {
    const id = req.params.id;
    console.log(`Data : ${req.body}`);
    const data ={       
        deletedBy: req.body.deleteddBy,
        //deletedAt: req.body.updatedBy,
        isDeleted:req.body.isDeleted     
    }    
    User.update(data, {where: {id:id}}).then((result)=>{
        res.send("Update Success");
    }).catch((err)=> {
        res.send(err);
    });        
}


module.exports= {
    index,
    create,
    update,
    destroy,
    show
}