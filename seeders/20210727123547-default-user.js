'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', 
    [
    {
      username: 'superuser',
      password: 'qwerty',
      email: 'super@user.com',
      fullname: 'Super User',
      pic: 'default.png',
      bio: '[Put your bio here]',
      createdAt: new Date(),
      createdBy: 0,
      updatedAt: new Date(),
      updatedBy: 0,
      isDeleted:false
    },
    {
      username: 'administrator',
      password: 'qwerty',
      email: 'administrator@user.com',
      fullname: 'Admin User',
      pic: 'default.png',
      bio: '[Put your bio here]',
      createdAt: new Date(),
      createdBy: 0,
      updatedAt: new Date(),
      updatedBy: 0,
      isDeleted:false    
    },
    {
      username: 'tester',
      password: 'qwerty',
      email: 'tester@user.com',
      fullname: 'Tester User',
      pic: 'default.png',
      bio: '[Put your bio here]',
      createdAt: new Date(),
      createdBy: 0,
      updatedAt: new Date(),
      updatedBy: 0,
      isDeleted:false    
    },
    {
      username: 'developer',
      password: 'qwerty',
      email: 'developer@user.com',
      fullname: 'Developer User',
      pic: 'default.png',
      bio: '[Put your bio here]',
      createdAt: new Date(),
      createdBy: 0,
      updatedAt: new Date(),
      updatedBy: 0,
      isDeleted:false    
    }  
  ]);
  },
  down: async (queryInterface, Sequelize) => {
     return queryInterface.bulkDelete('People', null, {});    
  }
};