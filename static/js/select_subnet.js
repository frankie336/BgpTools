


function select_subnet(t){
  var a = class_subsA;
  var b = class_subsB;
  var c = class_subsC;
  s = document.getElementById('subnetout');
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

          