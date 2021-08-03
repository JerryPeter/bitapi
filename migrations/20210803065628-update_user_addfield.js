'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.sequelize.transaction((t) => {
          return Promise.all([
            queryInterface.addColumn('users', 'mobilePhone', Sequelize.STRING, {after: 'bio' }),
            queryInterface.addColumn('users', 'phoneVerifiedAt', Sequelize.DATE, {after: 'bio' }),
            queryInterface.addColumn('users', 'emailVerifiedAt', Sequelize.STRING, {after: 'bio' }),
            queryInterface.addColumn('users', 'isPhoneVerified', Sequelize.BOOLEAN, {after: 'isDeleted' }),         
            queryInterface.addColumn('users', 'isEmailVerified', Sequelize.BOOLEAN, {after: 'isDeleted' })               
          ])
      })
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.sequelize.transaction((t) => {
          return Promise.all([
              queryInterface.removeColumn('users', 'mobilePhone', { transaction: t }),
              queryInterface.removeColumn('users', 'phoneVerifiedAt', { transaction: t }),
              queryInterface.removeColumn('users', 'emailVerifiedAt', { transaction: t }),
              queryInterface.removeColumn('users', 'isPhoneVerified', { transaction: t }),
              queryInterface.removeColumn('users', 'isEmailVerified', { transaction: t })                                 
          ])
      })
  }
};