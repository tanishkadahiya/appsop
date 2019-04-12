$(() => {
  let username1=$('#username').val()
    function refreshList() {
      $.get('/users', (data) => {
        
        $('#productlist').empty()
  
       
         
        
  
        for (let pic of data) {
          $('#productlist').append(


            `<div class="card">
           
            <h1>${pic.productname}</h1>
            
            <p class="price">Rs.${pic.price}</p>
            
        <p><a href="carts/${pic.productname}/${username1}/${pic.productname}/${pic.price}"><button id="picss" >Add to Cart</button></a></p>
          </div>
           `





            
          )
        }
      })
    }
    
    
  
    


    refreshList()
 
    
$('#picss').click(() =>{
  alert("item is added to your cart")
})

    $('#addtask').click(() => {
      $.post(
        '/users',
        {
          username: $('#username').val()
          
          
        },
        (data) => {
          if (data.success) {
            
             refreshList()
             alert("Welcome,you are successfully logged in");
             $('#nub').append(
             `<li><a href="/carts/${username1}/">cart</a></li>
             <li><a href="logout.html">Logout</a></li>`
             )
            
            
          } else {
            alert('Some error occurred')
          }
        }
      )
    })
    
    
  



   
  
  })