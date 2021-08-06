'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Apps', [
    {
      name: 'User Management',    
      namespace : 'usrmgmt',
      icon : 'usrmgmt',
      description: 'Aplikasi untuk pengelolaan User',
      isActive: true,
      isDeleted: false,  
      createdBy:0,
      updatedBy:0,      
      createdAt: new Date(),
      updatedAt: new Date()
    }      
  ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Apps', null, {});
  }
};
