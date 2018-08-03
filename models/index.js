const Sequelize = require('sequelize')
const db = new Sequelize('postgres://localhost:5432/Wikistack', {
  logging: true
});


const Page = db.define('page', {
  title: {
    type: Sequelize.STRING,
    allowNull: false},
  slug: {
    type: Sequelize.STRING,
    allowNull: false},
  content: {
    type: Sequelize.STRING,
    allowNull: false},
  status: Sequelize.ENUM('open', 'closed')
},{
  hooks: {
    beforeValidate: (page, options) =>{
      page.slug = 'temp-slug-value-to-pass-the-validation';
    }
  }
})

Page.beforeCreate((pageInstance, options) => {
 pageInstance.slug = pageInstance.title.replace(/\s+/g, '_').replace(/\W/g, '');
});

const User = db.define('user', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      isEmail: true
    }
  }
})

Page.belongsTo(User, {as: 'author'});



module.exports = {
  db,
  Page,
  User
}
