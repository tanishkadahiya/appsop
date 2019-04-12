const express = require('express')
//const ejs = require('ejs')
const {
  db,
  vendors,
  products,
  carts,
  users
} = require('./database')

const app = express()
var http = require('http');
var url = require('url');
var fs = require('fs');

//app.set('view engine', 'ejs'); // set template engine to ejs

app.use(express.json())
app.use(express.urlencoded({
  extended: true
}))

app.use('/',
  express.static(__dirname + '/public' )
)

app.get('/vendors', async (req, res) => {

  const vendo = await vendors.findAll()
  res.send(vendo)
})

app.post('/vendors', async (req, res) => {

  try {
    const result = await vendors.create({
      vendorsname: req.body.vendorsname,
      
    })
    res.send({success: true})
  } catch (e) {
    res.send({success: false, err: e.message})
  }


})
app.get('/vendors/:pqr', async (req, res) => {

  const result11 = await products.destroy({
    where: {
        vendorssId:req.params.pqr}
   })
  const result = await vendors.destroy({
      where: {
          id:req.params.pqr}
     })
     
     res.redirect('/');


})




app.get('/products', async (req, res) => {

  const vendo1 = await products.findAll()
  res.send(vendo1)
})

app.post('/products', (req, res) => {
  try{
vendors.findOne({
  where: {
    vendorsname:req.body.vendorsname
  }
}).then((item) => {
     if(item.id){//
    const result =  products.create({
      vendorssId: item.id,
      productname: req.body.productname,
      price: req.body.price,
      quantity: req.body.quantity,
      
    })
    res.send({success: true})}
    else{
     res.send({success:false})
    }
})}catch (e) {
    res.send({success: false, err: e.message})
  }
})










app.get('/products/:pqr', async (req, res) => {

  
  const result = await products.destroy({
   // [Op.and]:
   
      where: { id:req.params.pqr
      }
      //where: { vendorsname:req.params.rst}
   // }
         
     })
     res.redirect('/product.html');


})

app.get('/users', async (req, res) => {

  const datatata= await products.findAll()
  res.send(datatata)
})


app.post('/users', async (req, res) => {

  try {
    const result = await users.create({
      username: req.body.username,
      
      
    })
    res.send({success: true})
  } catch (e) {
    res.send({success: false, err: e.message})
  }


})
app.get('/carts/:qwe', async (req, res) => {



  const result = await carts.findAll({
    where: {
      username:req.params.qwe
    }
  })
  //let a=result.productname
  //redirect('cart.html')
  res.send(result)
  
})


app.use('/carts/:a/:b/:c/:d', async (req, res) => {

  

  
    products.findOne({
      where: {
        productname:req.params.a
      }
    }).then((item) => {
      

     carts.create({
      productId:item.id,
    username:req.params.b,
    productname:req.params.c,
    price:req.params.d
  })
  res.send("successfully added to your cart")    
  //res.redirect('user.html')
})

})




db.sync()
.then(() => {
const port=process.env.PORT||5678
app.listen(port)
}) 


//db.sync()
//  .then(() => {
 //   app.listen(1234)
 // })
