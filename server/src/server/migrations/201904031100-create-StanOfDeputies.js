'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('StanOfDeputies', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            fio: {
                type: Sequelize.STRING,
                allowNull: false,
                validate: {
                    notEmpty: true,
                },
            },
            description: {
                type: Sequelize.STRING,
                allowNull: false,
                validate: {
                    notEmpty: true,
                },
            },
            faction: {
                type: Sequelize.TEXT,
                allowNull: false,
                validate: {
                    isEmail: true,
                },
            },
            commission: {
                type: Sequelize.STRING,
                allowNull: true,
                validation: {
                    notEmpty: true,
                },
            },
            constituency: {
                type: Sequelize.INTEGER,
                allowNull: true,
                validate: {
                    isInt: true,
                },
            },
            publicationTime: {
                type: Sequelize.DATE,
                allowNull: false,
                validate: {
                    isDate: true,
                }
            },
            link: {
                type: Sequelize.STRING,
                allowNull: false,
                validate: {
                    notEmpty: true,
                },
            },
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('StanOfDeputies');
    }
};
