const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Lead = sequelize.define('Lead', {
    Lead_ID: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false
    },
    Client_Name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: { msg: "Client name cannot be empty" }
        }
    },
    Email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isEmail: { msg: "Must be a valid email address" },
            notEmpty: true
        }
    },
    Budget: {
        type: DataTypes.FLOAT,
        allowNull: true,
        validate: {
            min: { args: [0], msg: "Budget cannot be negative" }
        }
    },
    Status: {
        type: DataTypes.ENUM('New', 'Qualified', 'Lost', 'Converted'),
        defaultValue: 'New'
    }
}, {
    timestamps: true, // Automatically adds createdAt and updatedAt
    tableName: 'leads'
});

module.exports = Lead;