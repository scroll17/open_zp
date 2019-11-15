//Radiation

module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Radiation', {
        id: {
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            type: DataTypes.INTEGER,
        },
        date: {
            type: DataTypes.DATE,
            allowNull: false,
            validate: {
                isDate: true
            },
        },
        time: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            },
        },
        indicator: {
            type: DataTypes.REAL,
            allowNull: false,
            validate: {
                isNumeric: true
            },
        }
    }, {
        paranoid: true,
        freezeTableName: true
    });
};
