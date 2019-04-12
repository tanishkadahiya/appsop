$(() => {
  let crossing=$('#cross')
  function refreshList() {
    $.get('/vendors', (data) => {
      $('#tasklist').empty()

      

      for (let vendor of data) {
        $('#tasklist').append(
          `<tr >
          <td >${vendor.vendorsname}  </td>
         
         <td> <a href='/vendors/${vendor.id}' style="color:red;"><b> &#9747;</b></a></td>
          </tr>
          `
        )
      }
    })
  }
  
  refreshList()

  $('#addtask').click(() => {
    $.post(
      '/vendors',
      {
        vendorsname: $('#vendorname').val()
        
      },
      (data) => {
        if (data.success) {
          refreshList()
        } else {
          alert('Some error occurred')
        }
      }
    )
  })
  
  


})
