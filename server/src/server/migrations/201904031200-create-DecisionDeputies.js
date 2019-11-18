'use strict';
module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable('DecisionDeputies', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			title: {
				type: Sequelize.TEXT,
				allowNull: false,
				validate: {
					notEmpty: true,
				},
			},
			dateAccepted: {
				type: Sequelize.DATE,
				allowNull: false,
				validate: {
					isDate: true
				}
			},
			link: {
				type: Sequelize.STRING,
				allowNull: false,
				validate: {
					notEmpty: true,
				},
			}
		});
	},
	down: (queryInterface, Sequelize) => {
		return queryInterface.dropTable('DecisionDeputies');
	}
};