const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize');

const Patient = sequelize.define('Patient', {
    first_name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: 'Please enter first name'
            },
            len: {
                args: [0, 100],
                msg: 'first name cannot be longer than 100 characters'
            }
        }
    },
    last_name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: 'Please enter last name'
            },
            len: {
                args: [0, 100],
                msg: 'last name cannot be longer than 100 characters'
            }
        }
    },
    date_of_birth: {
        type: DataTypes.DATE
    },
    gender: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: 'Please enter gender'
            },
            len: {
                args: [0, 30],
                msg: 'gender cannot be longer than 30 characters'
            }
        }
    },
    language: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: 'Please enter language'
            },
            len: {
                args: [0, 30],
                msg: 'language cannot be longer than 30 characters'
            }
        }
    },
    phone_number: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: 'Please enter phone number'
            },
            len: {
                args: [0, 100],
                msg: 'Phone number cannot be longer than 100 characters'
            }
        }
    },
});

module.exports = Patient;

