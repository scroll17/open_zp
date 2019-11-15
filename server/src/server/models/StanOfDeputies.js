

module.exports = (sequelize, DataTypes) => {
    const StanOfDeputies = sequelize.define('StanOfDeputies', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER,
        },
        maintainer: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
            },
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
            type: DataTypes.STRING,
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
            allowNull: false,
            validate: {
                isInt: true,
            },
        },
        deputyId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Deputies',
                key: 'id'
            },
        },
        publicationTime: {
            type: DataTypes.DATE,
            allowNull: false,
            validate: {
                isDate: true,
            }
        }
    }, {
        timestamps: false,
        paranoid: true,
    });


    StanOfDeputies.associate = function (models) {
        StanOfDeputies.belongsTo(models.Deputies, {foreignKey: 'deputyId', targetKey: 'id'})
    };

    return StanOfDeputies;
};
