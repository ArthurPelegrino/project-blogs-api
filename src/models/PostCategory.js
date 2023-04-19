const PostCategoryModel = (sequelize, DataTypes) => {
    const PostCategoryModel = sequelize.define('PostCategory',
    {
        postId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
              model: 'BlogPost',
              key: 'id',
            },
          },
          categoryId: {
            type: DataTypes.INTEGER,
            references: {
              model: 'Category',
              key: 'id',
            },
          }
        }, {
          tableName: 'posts_categories',
          underscored: true,
          timestamps: false,
      });
  
    // tipo de relacionamento
    // HasOne -> Tem Um
    // belongsTo -> Pertence a 
    // hasMany -> Tem muitos
    // belongsToMany -> Pertence a muitos

    PostCategoryModel.associate = (model) => {
        model.Category.belongsToMany(model.BlogPost, {
          through: PostCategoryModel,
          foreignKey: 'postId',
          otherKey: 'categoryId',
          as: 'posts',
        });
        model.BlogPost.belongsToMany(model.Category, {
          through: PostCategoryModel,
          foreignKey: 'categoryId',
          otherKey: 'postId',
          as: 'categories',
        });
      };
  
      return PostCategoryModel;
  };
  
  module.exports = PostCategoryModel