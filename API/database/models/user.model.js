const { Model } = require("sequelize");

module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("user", {
      'username': {
        type: Sequelize.STRING
      },
      'device_timestamp': {
        type: Sequelize.DATE
      },
      'card_id': {
        type: Sequelize.INTEGER
      },
      'device_people': {
        type: Sequelize.INTEGER
      } ,




    },{
        tableName:'roomdata'
    });

  
    return User;
  };