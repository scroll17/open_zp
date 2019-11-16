'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('Deputies', {
            id: {
                allowNull: false,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            fio: {
                type: Sequelize.STRING,
                unique: true,
                allowNull: false,
                validate: {
                    notEmpty: true,
                },
            },
            info: {
                type: Sequelize.TEXT,
                allowNull: false,
                validate: {
                    notEmpty: true,
                },
            },
            citizenship: {
                type: Sequelize.STRING,
                allowNull: true,
                defaultValue: null,
                validate: {
                    notEmpty: true,
                },
            },
            education: {
                type: Sequelize.STRING,
                allowNull: true,
                defaultValue: null,
                validate: {
                    isEmail: true,
                },
            },
            maritalStatus: {
                type: Sequelize.STRING,
                allowNull: true,
                defaultValue: null,
                validation: {
                    notEmpty: true,
                },
            },
            link: {
                type: Sequelize.STRING,
                allowNull: false,
                validate: {
                    notEmpty: true,
                },
            },
            photo: {
                type: Sequelize.STRING,
                allowNull: false,
                validate: {
                    notEmpty: true,
                },
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE,
                defaultValue: Sequelize.NOW
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('Deputies');
    }
};