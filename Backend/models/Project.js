const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Project = sequelize.define('Project', {
    Project_ID: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false
    },
    Client_Name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Country: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Project_Value: {
        type: DataTypes.FLOAT,
        allowNull: false,
        validate: { min: 0 }
    },
    Start_Date: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    Deadline: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    Actual_Completion_Date: {
        type: DataTypes.DATEONLY,
        allowNull: true // Can be null if project is ongoing
    },
    Project_Status: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'Not Started'
    },
    Assigned_Team_Size: {
        type: DataTypes.INTEGER,
        defaultValue: 1
    },
    Technology: {
        type: DataTypes.STRING,
        allowNull: true
    },
    Total_Hours_Logged: {
        type: DataTypes.FLOAT,
        defaultValue: 0,
        validate: { min: 0 } // Prevents the negative hours issue from DA-2
    },
    Overtime_Hours: {
        type: DataTypes.FLOAT,
        defaultValue: 0,
        validate: { min: 0 }
    },
    Resource_Overallocated: {
        type: DataTypes.BOOLEAN,
        defaultValue: false // Maps the Yes/No to a clean boolean
    },
    Client_Satisfaction: {
        type: DataTypes.INTEGER,
        allowNull: true,
        validate: { min: 1, max: 5 } // Strict 1-5 rating
    }
}, {
    timestamps: true,
    tableName: 'projects'
});

module.exports = Project;