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
    provider_specialty: {
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
    email: {
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
});