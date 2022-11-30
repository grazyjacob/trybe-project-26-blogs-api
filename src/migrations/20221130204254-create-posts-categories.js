'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('posts_categories', {
      // id: {
      //   allowNull: false,
      //   autoIncrement: true,
      //   primaryKey: true,
      //   type: Sequelize.INTEGER
      // },
      postId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'blog_posts',
          key: 'id'
        },
        field: 'post_id',
        primaryKey: true,
        allowNull: false,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      categoryId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'categories',
          key: 'id'
        },
        field: 'category_id',
        primaryKey: true,
        allowNull: false,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('posts_categories');
  }
};