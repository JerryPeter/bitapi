const { User } = require('../models');

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

module.exports= {
    index,
    create,
    update,
    destroy,
    show
}