const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize');

const Provider = sequelize.define('Provider', {
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
    provider_speciality: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: 'Please enter provider specialty'
            },
            len: {
                args: [0, 100],
                msg: 'provider specialty cannot be longer than 30 characters'
            }
        }
    },
    email_address: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: {
               msg: 'Please enter a valid email address'
            },
            notEmpty: {
                msg: 'Please enter your email'
            }
        }
    },
    createdAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    },
});

module.exports = Provider;