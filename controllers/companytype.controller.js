require('dotenv').config();

const jwt = require('jsonwebtoken');

const bcryptjs = require("bcryptjs");

const validator = require("fastest-validator");

const { CompanyType } = require('../models');

const JWT_SECRET = process.env.JWT_SECRET;

const SALT = process.env.SALT;


// --- SELECT ALL DATA ---------
function index(req, res, next) {
    CompanyType.findAll().then((CompanyType)=>{
        res.send(CompanyType);   
    }).catch((err)=>{
        res.send(err);
    });
}

// --- SHOW SPESIFIC DATA ---------
function show(req, res, next) {
    const id = req.params.id;
    CompanyType.findByPk(id).then((CompanyType)=>{
        res.send(CompanyType);   
    }).catch((err)=>{
        res.send(err);
    });
}

// --- CREATE NEW DATA ---------
function create(req, res, next) {
    const data ={
        type : req.body.type,
        description : req.body.description,
        createdBy : req.body.createdBy,
        createdAt : req.body.createdAt,    
        isActive : req.body.isActive,            
        isDeleted:req.body.isDeleted      
    }
    CompanyType.create(data).then((result)=>{
        res.send("Insert Sukses ...");
    }).catch((err)=> {
        res.send(err);
    });    
}

// --- UPDATE DATA ---------
function update(req, res, next) {
    const id = req.params.id;
    let datetime = new Date();
    const data ={
        type : req.body.type,
        description : req.body.description,        
        updatedBy : req.user.userid,
        updatedAt : datetime,
        isActive : req.body.isActive     
    }    
    CompanyType.update(data, {where: {id:id}}).then((result)=>{
        res.send("Update Success");
    }).catch((err)=> {
        res.send(err);
    });        
}

// --- SOFT DELETE ---------
function destroy(req, res, next) {
    const id = req.params.id;
    let datetime = new Date();

    console.log(`Data : ${req.body}`);
    const data ={       
        deletedBy: req.user.userid,
        deletedAt: datetime,
        isDeleted: true     
    }
        
    CompanyType.update(data, {where: {id:id}}).then((result)=>{
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