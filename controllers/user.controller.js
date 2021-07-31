require('dotenv').config();

const jwt = require('jsonwebtoken');

const bcryptjs = require("bcryptjs");

const { User } = require('../models');

const JWT_SECRET = process.env.JWT_SECRET;
const SALT = process.env.SALT;

console.log(SALT);

// --- SELECT ALL DATA ---------
function index(req, res, next) {
    User.findAll().then((users)=>{
        res.send(users);   
    }).catch((err)=>{
        res.send(err);
    });
}

// --- SHOW SPESIFIC DATA ---------
function show(req, res, next) {
    const id = req.params.id;
    User.findByPk(id).then((users)=>{
        res.send(users);   
    }).catch((err)=>{
        res.send(err);
    });
}

// --- CREATE NEW DATA ---------
function create(req, res, next) {
    const data ={
        username : req.body.username,
        email : req.body.email,
        password : req.body.password,
        fullname : req.body.fullname,
        bio : req.body.bio,
        pic : req.body.pic,        
        createdBy: req.body.createdBy,
        updatedBy: req.body.updatedBy,
        isDeleted:req.body.isDeleted
    }
    User.create(data).then((result)=>{
        res.send("Insert Sukses ...");
    }).catch((err)=> {
        res.send(err);
    });    
}

//--- Direct Insert 
// function create(req, res, next) {
//     //console.log(`Data : ${req.body}`);
//     // const data ={
//     //     username : "Jack Due",
//     //     email : "jack@due.com",
//     //     password : "qwerty",
//     //     createdBy:0,
//     //     updateBy:0        
//     // }
//     // User.create(data).then((result)=>{
//     //     res.send("Insert Sukses ...");
//     // }).catch((err)=> {
//     //     res.send(err);
//     // });    
// }

// --- UPDATE DATA ---------
function update(req, res, next) {
    const id = req.params.id;
    console.log(`Data : ${req.body}`);
    const data ={
        username : req.body.username,
        email : req.body.email,
        password : req.body.password,
        fullname : req.body.fullname,
        bio : req.body.bio,
        pic : req.body.pic,        
        createdBy: req.body.createdBy,
        updatedBy: req.body.updatedBy,
        isDeleted:req.body.isDeleted     
    }    
    User.update(data, {where: {id:id}}).then((result)=>{
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

// --- DELETE DATA FISIK PAKAI DESTROY ---------
// function destroy(req, res, next) {

//     const id = req.params.id;
//     const userId = 1;

//     console.log(`Data : ${req.body}`);    
//     console.log(`Data : ${id}`); 

//     User.destroy({where: {id:id}}).then((result)=>{
//         res.status(201).json({
//             message: "Post update succesfully",
//             post: result 
//         });
//     }).catch((err)=> {
//         res.status(500).json({
//             message: "Something went wrong",
//             error: error 
//         });     
//     });         
// }



// --- SIGN UP / REGISTER ---------
function signup(req, res, next) {

    User.findOne({where:{email:req.body.email}}).then(result => {
        if (result) {
            res.status(409).json({
                message: "Alamat Email sudah digunakan ...",
            });            
        } else {
            // Jika Email belum digunakan

            // CREATE SALT PASSWORD
            bcryptjs.genSalt(10, function(err, salt) {
                // HASH PASSWORD DENGAN SALT HASIL GENERATED
                bcryptjs.hash(req.body.password, salt, function(err, hash){

                    const data = {
                        username : req.body.username,
                        email : req.body.email,
                        password : hash,
                        fullname : req.body.fullname,
                        bio : req.body.bio,
                        pic : req.body.pic,        
                        createdBy: req.body.createdBy,
                        updatedBy: req.body.updatedBy,
                        isDeleted:req.body.isDeleted
                    }
                    User.create(data).then((result)=>{
                        res.status(201).json({
                            message: `Register user sukses ... ${salt}`,
                        });
                    }).catch((err)=> {
                        res.status(500).json({
                            message: "Something went wrong ...",
                        });
                    });   
                });
            });
        }
    }).catch(err => {
        res.status(500).json({
            message: "Something went wrong ...",
        });
    });
}


function signin(req, res) {
    User.findOne({where:{email : req.body.email}}).then(user => {
        if (user === null) {
            res.status(401).json({
                message: "Invalid Credintial ...",
            });
        } else {
            console.log(`BODY ${req.body.password}, ${user.password}`);

            bcryptjs.compare(req.body.password, user.password, function(err, result){
                if (result){
                    // Password cocok, selanjutnya generate token
                    const token = jwt.sign({
                        email : user.email,
                        userid : user.id
                    }, JWT_SECRET, function(err, token){
                        res.status(200).json({
                            message: "Authentication Sukses !!",
                            token : token
                        });                        
                    });
                } else {
                    res.status(401).json({
                        message: "Invalid Credintial ...",
                    });                    
                }
            });
        }
    }).catch(err => {
        res.status(500).json({
            message: "Something went wrong ...",
        });
    });
}

function login(req, res) {
    User.findOne({where:{email : req.body.email}}).then(user => {
        if (user === null) {
            // Jika user tidak terdaftar didalam system
            res.status(401).json({
                message: "Alamat email tidak terdaftar ...",
            });
        } else {
            // Jika user terdaftar didalam system

            // Check password dari database dengan password yang dikirim dari body.param
            if (req.body.password == user.password){
                // Password cocok, selanjutnya generate token berisi informasi EMAIL, USERNAME dan USERID
                const token = jwt.sign({
                    email : user.email,
                    username: user.username,
                    userid : user.id
                }, ACCESS_TOKEN_SCREET, function(err, token){
                    res.status(200).json({
                        message: "Authentication Sukses ...",
                        token : token
                    });                        
                });             
            } else {
                res.status(401).json({
                    message: "Password tidak valid ...",
                });                
            }
        }
    }).catch( err => {
        // Jika ada error saat proses query
        res.status(401).json({
            message: `ERROR : ${err}`,
        });
    });
}


// --- REGISTER ---------
function register(req, res, next) {

    User.findOne({where:{email:req.body.email}}).then(result => {
        if (result) {
            res.status(409).json({
                message: "Alamat Email sudah digunakan ...",
            });            
        } else {
            // Jika Email belum digunakan
            
            var salt = bcryptjs.genSaltSync(10);
            var hash = bcryptjs.hashSync("B4c0/\/", salt);

            // Load hash from your password DB.
            var check = bcryptjs.compareSync("B4c0/\/", hash); // true
            var check2 = bcryptjs.compareSync("not_bacon", hash); // false

            
            res.status(200).json({
                message: "Authentication Sukses ...",
                salt : salt,
                hash : hash,
                check : check,
                check2 : check2
            });  

        }
    }).catch(err => {
        res.status(500).json({
            message: "Something went wrong ...",
        });
    });
}

module.exports= {
    index,
    create,
    update,
    destroy,
    show,
    signup,
    signin,
    login,
    register
}