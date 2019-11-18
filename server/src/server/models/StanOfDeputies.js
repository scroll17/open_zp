module.exports = (sequelize, DataTypes) => {
    const StanOfDeputies = sequelize.define('StanOfDeputies', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER,
        },
        fio: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
            },
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
            },
        },
        faction: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                isEmail: true,
            },
        },
        commission: {
            type: DataTypes.STRING,
            allowNull: false,
            validation: {
                notEmpty: true,
            },
        },
        constituency: {
            type: DataTypes.INTEGER,
            allowNull: true,
            validate: {
                isInt: true,
            },
        },
        publicationTime: {
            type: DataTypes.DATE,
            allowNull: false,
            validate: {
                isDate: true,
            }
        },
        link: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
            },
            comment: "Посилання на Депутата"
        },
    }, {
        timestamps: false,
        paranoid: true,
    });


    // StanOfDeputies.associate = function (models) {
    //     StanOfDeputies.belongsTo(models.Deputies, {foreignKey: 'deputyId', targetKey: 'id'})
    // };

    return StanOfDeputies;
};
