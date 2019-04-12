$(() => {
    
    function refreshList1() {
      $.get('/products', (data) => {
        $('#tasklist').empty()
  
        
  
        for (let product of data) {
          $('#tasklist').append(
            `<tr >
            <td >${product.productname}  </td>
            <td >${product.vendorssId}  </td>
            <td >${product.price}  </td>
            <td >${product.quantity}  </td>
           
           <td> <a href='/products/${product.id}' style="color:red;"><b> &#9747;</b></a></td>
            </tr>
            `
          )
        }
      })
    }
    
    refreshList1()
  
    $('#addtask').click(() => {
      $.post(
        '/products',
        {
          vendorsname: $('#venname').val(),
          productname: $('#proname').val(),
          quantity: $('#quant').val(),
          price: $('#pri').val()
          
        },
        (data) => {
          if (data.success) {
            refreshList1()
          } else {
            alert('Some error occurred')
          }
        }
      )
    })
    
    
  
  
  })