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
            maintainer: {
                type: Sequelize.STRING,
                allowNull: false,
                validate: {
                    notEmpty: true,
                },
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
            deputyId: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: 'Deputies',
                    key: 'id'
                },
            },
            publicationTime: {
                type: Sequelize.DATE,
                allowNull: false,
                validate: {
                    isDate: true,
                }
            }
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('StanOfDeputies');
    }
};
