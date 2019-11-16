'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('Radiation', {
            id: {
                allowNull: false,
                primaryKey: true,
                autoIncrement: true,
                type: Sequelize.INTEGER,
            },
            date: {
                type: Sequelize.DATE,
                allowNull: false,
                validate: {
                    isDate: true
                },
            },
            time: {
                type: Sequelize.STRING,
                allowNull: false,
                validate: {
                    notEmpty: true
                },
            },
            indicator: {
                type: Sequelize.REAL,
                allowNull: false,
                validate: {
                    isNumeric: true
                },
            },
            createdAt: {
                type: Sequelize.DATE,
                defaultValue: Sequelize.NOW
            },
            updatedAt: {
                type: Sequelize.DATE
            }
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('Radiation');
    }
};
