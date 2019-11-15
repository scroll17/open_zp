
module.exports = (sequelize, DataTypes) => {
    const Deputies = sequelize.define('Deputies', {
        id: {
            allowNull: false,
            primaryKey: true,
            type: DataTypes.INTEGER,
        },
        fio: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false,
            validate: {
                notEmpty: true,
            },
        },
        info: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
            },
        },
        citizenship: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: null,
            validate: {
                notEmpty: true,
            },
        },
        education: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: null,
            validate: {
                isEmail: true,
            },
        },
        maritalStatus: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: null,
            validation: {
                notEmpty: true,
            },
        },
        link: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
            },
        },
        photo: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
            },
        }
    }, {
        paranoid: true
    });


    Deputies.associate = function (models) {
        Deputies.hasMany(models.StanOfDeputies, { foreignKey: 'deputyId', targetKey: 'id' });
    };

    return Deputies;
};
