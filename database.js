const Sequelize = require('sequelize')

const Op = Sequelize.Op;

const db = new Sequelize({
  dialect: 'sqlite', // mysql, postgres, mssql
  storage: __dirname + '/vendors.db'
  // database : '',
  // host: 'localhost',
  // username: '',
  // password: '',
  // port: ''
})
const vendors = db.define('vendorss', {
  
    vendorsname: {
      type: Sequelize.STRING,
      allowNull: false
    }
  })
  

  const products = db.define('product', {
    
   
    productname: {
      type: Sequelize.STRING
      
    },
    price: {
      type: Sequelize.INTEGER
      
    },
    quantity: {
      type: Sequelize.INTEGER
      
    }
  })
  const carts = db.define('carts', {
    
    username: {
      type: Sequelize.STRING,
      allowNull: false
    },
    productname: {
      type: Sequelize.STRING
      
    },
    price: {
      type: Sequelize.INTEGER
      
    },
   
    
  })
  const users = db.define('user', {
   
      username: {
        type: Sequelize.STRING,
        allowNull: false
      }
     
      
    })
 
 
    products.belongsTo(vendors)
    vendors.hasMany(products)
    
    carts.belongsTo(products)
    carts.belongsTo(users)
    users.hasMany(carts)
    products.hasMany(carts)
  

  module.exports = {
    db, vendors,carts,products,users
  }