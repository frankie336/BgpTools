 
 
var username = "{{ hello }}"

$(document).on('submit','#todo-form',function(e) 
               { 
  console.log('hello');
  return username; 
  e.preventDefault(); 
  $.ajax({ 
    type:'POST', 
    url:'/calc', 
    data:{ 
      todo:$("#todo").val() 
    }, 
    success:function() 
    { 
      alert('saved');
      document.getElementById("update").value = username;
 
    } 
  }) 
}); 
  

 