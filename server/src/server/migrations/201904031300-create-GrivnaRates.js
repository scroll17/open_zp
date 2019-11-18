'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('GrivnaRates', {
            id: {
                allowNull: false,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            date: {
                type: Sequelize.DATE,
                allowNull: false,
                validate: {
                    isDate: true
                },
            },
            EUR: {
                type: Sequelize.REAL,
                allowNull: false,
                validate: {
                    isNumeric: true
                },
            },
            USD: {
                type: Sequelize.REAL,
                allowNull: false,
                validate: {
                    isNumeric: true
                },
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE,
                defaultValue: Sequelize.NOW
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE,
                defaultValue: Sequelize.NOW
            }
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('GrivnaRates');
    }
};