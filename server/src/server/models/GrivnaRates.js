
module.exports = (sequelize, DataTypes) => {
    return sequelize.define('GrivnaRates', {
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
        EUR: {
            type: DataTypes.REAL,
            allowNull: false,
            validate: {
                isNumeric: true
            },
        },
        USD: {
            type: DataTypes.REAL,
            allowNull: false,
            validate: {
                isNumeric: true
            },
        }
    }, {
        timestamps: false,
        paranoid: true
    });
};
