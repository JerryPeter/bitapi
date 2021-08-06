require('dotenv').config();

const jwt = require('jsonwebtoken');

const bcryptjs = require("bcryptjs");

const validator = require("fastest-validator");

const { App } = require('../models');

const JWT_SECRET = process.env.JWT_SECRET;

const SALT = process.env.SALT;


// --- SELECT ALL DATA ---------
function index(req, res, next) {
    App.findAll().then((data)=>{
        res.send(data);   
    }).catch((err)=>{
        res.send(err);
    });
}

// --- SHOW SPESIFIC DATA ---------
function show(req, res, next) {
    const id = req.params.id;
    App.findByPk(id).then((data)=>{
        if (data === null){
            res.status(400).json({
                message: "Data tidak ditemukan ..."
            });            
        } else {
            res.send(data);   
        }        
    }).catch((err)=>{
        res.send(err);
    });
}


// --- CREATE NEW DATA ---------
function create(req, res, next) {
    let datetime = new Date();
    const data ={
        name : req.body.name,
        namespace : req.body.namespace,
        icon : req.body.icon,
        description : req.body.description,
        createdBy : req.user.userid,
        updatedBy : req.user.userid,
        createdAt : datetime,    
        updatedAt : datetime,
        isActive : 1,
        isDeleted: 0
    }
    App.create(data).then((result)=>{
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
        name : req.body.name,
        namespace : req.body.namespace,
        icon : req.body.icon,
        description : req.body.description,
        updatedBy : req.user.userid,    
        updatedAt : datetime,
        isActive : req.body.isActive
    }  
    App.update(data, {where: {id:id}}).then((result)=>{
        res.send("Update Success");
    }).catch((err)=> {
        res.send(err);
    });        
}

// --- SOFT DELETE ---------
function destroy(req, res, next) {
    const id = req.params.id;
    let datetime = new Date();
    const data = {       
        deletedBy: req.user.userid,
        deletedAt: datetime,
        isDeleted: 1
    }    
    App.update(data, {where: {id:id}}).then((result)=>{
        res.send("Update Success");
    }).catch((err)=> {
        res.send(err);
    });        
}

module.exports= {
    index,
    show,
    create,
    update,
    destroy
}