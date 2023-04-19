const UserModel = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        id: {
            type:DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        displayName: {
            type: DataTypes.STRING,
        },
        email: {
            type: DataTypes.STRING,
            unique: true,
        },
        password: {
            type: DataTypes.STRING
        },
        image: {
            type: DataTypes.STRING
        }
    },
    {
        timestamps: false,
        underscored: true,
        tableName: 'users'
    });

    User.associate = (model) => {
        User.hasMany(model.BlogPost, {
          foreignKey: 'userId',
          as: 'blogPosts'
        })
      };

    return User;
}

module.exports = UserModel;