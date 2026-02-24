const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Ticket = sequelize.define('Ticket', {
    Ticket_ID: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false
    },
    Title: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: { msg: "Ticket title cannot be empty" }
        }
    },
    Description: {
        type: DataTypes.TEXT, // Using TEXT because issue descriptions can be long
        allowNull: false,
        validate: {
            notEmpty: { msg: "Please provide a description of the issue" }
        }
    },
    Status: {
        type: DataTypes.ENUM('Open', 'In Progress', 'Resolved', 'Closed'),
        defaultValue: 'Open'
    },
    Priority: {
        type: DataTypes.ENUM('Low', 'Medium', 'High', 'Critical'),
        defaultValue: 'Medium'
    }
    
}, {
    timestamps: true, 
    tableName: 'tickets'
});

module.exports = Ticket;