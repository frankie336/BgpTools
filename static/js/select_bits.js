// This is a literal object (JSON), if you want to add more items you just have to add them here.


function select_subits(t){
  var a = class_bitsA;
  var b = class_bitsB;
  var c = class_bitsC;
  s = document.getElementById('ipclassbits');
  var sl = s.options.length;
  for(var i = sl-1; i >= 0 ; i--) { s.options[i] = null; }
    if(t.value != 0){
      var z;
      switch (t.value) {
        case '1' : z = a; break;
        case '2' : z = b; break;
        case '3' : z = c; break;
        default : alert('Invalid entry'); break;
      }
       var l = z.length;
       for(i = 0; i < l; i++ ) { s.options[i] = new Option(z[i],z[i],false,false); }
      }
    
}

   