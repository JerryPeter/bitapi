'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('CompanyTypes', [
    {
      type: 'HOLDING',    
      description: 'Type Holding data',
      isActive: true,
      isDeleted: false,  
      createdBy:0,
      updatedBy:0,      
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      type: 'SUBHOLDING',    
      description: 'Type Sub Holding data',
      isActive: true,
      isDeleted: false,  
      createdBy:0,
      updatedBy:0,      
      createdAt: new Date(),
      updatedAt: new Date()
    },    
    {
      type: 'PROJECT',    
      description: 'Type Project data',
      isActive: true,
      isDeleted: false,  
      createdBy:0,
      updatedBy:0,      
      createdAt: new Date(),
      updatedAt: new Date()
    },   
    {
      type: 'PT',    
      description: 'Type PT data',
      isActive: true,
      isDeleted: false,  
      createdBy:0,
      updatedBy:0,      
      createdAt: new Date(),
      updatedAt: new Date()
    },     
    {
      type: 'CABANG',    
      description: 'Type Cabang data',
      isActive: true,
      isDeleted: false,  
      createdBy:0,
      updatedBy:0,      
      createdAt: new Date(),
      updatedAt: new Date()
    },    
    {
      type: 'AREA',    
      description: 'Type AREA data',
      isActive: true,
      isDeleted: false,  
      createdBy:0,
      updatedBy:0,      
      createdAt: new Date(),
      updatedAt: new Date()
    },     
    {
      type: 'REGION',    
      description: 'Type REGION data',
      isActive: true,
      isDeleted: false,  
      createdBy:0,
      updatedBy:0,      
      createdAt: new Date(),
      updatedAt: new Date()
    },      
  ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('CompanyTypes', null, {});
  }
};
