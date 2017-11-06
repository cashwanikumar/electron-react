'use strict';
module.exports = (sequelize, DataTypes) => {
    var GroceryList = sequelize.define('GroceryList', {
        name: DataTypes.STRING,
        purchased: DataTypes.STRING
    }, {
        classMethods: {
            associate: function (models) {
            // associations can be defined here
            }
        }
    });
    return GroceryList;
};