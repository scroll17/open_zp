'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('GrivnaRates', {
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
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('GrivnaRates');
    }
};