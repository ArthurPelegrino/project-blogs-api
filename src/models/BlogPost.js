const BlogPostModel = (sequelize, DataTypes) => {
    const BlogPost = sequelize.define('BlogPost', {
        id: {
            type:DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        title: {
            type: DataTypes.STRING,
        },
        content: {
            type: DataTypes.STRING,
        },
        userId: {
            type: DataTypes.INTEGER,
            foreignKey: true,
            allowNull: false,
          },
        published: {
            type: DataTypes.DATE
        },
        updated: {
            type: DataTypes.DATE
        }
    },
    {
        timestamps: false,
        underscored: true,
        tableName: 'blog_posts'
    });

    BlogPost.associate = (model) => {
        BlogPost.belongsTo(model.User, {
        foreignKey: 'user_id',
        as: 'user'
      });
    };

    return BlogPost;
}

module.exports = BlogPostModel;