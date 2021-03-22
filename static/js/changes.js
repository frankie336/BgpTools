



//document.getElementById("radioButton1").onclick = changeOptions;
//document.getElementById("radioButton2").onclick = changeOptions;
//document.getElementById("radioButton3").onclick = changeOptions;



function changeOptions() {

    
    var form = document.getElementById("ipv4calc_form");
    var ipclassaOptions = document.getElementById("ipclassaOptions");
    var ipclassbOptions = document.getElementById("ipclassbOptions");
    var ipclasscOptions = document.getElementById("ipclasscOptions");

    var ipclassabits = document.getElementById("ipclassabits");
    var ipclassbbits = document.getElementById("ipclassbbits");
    var ipclasscbits = document.getElementById("ipclasscbits");



    
    if (ipv4calc_form.radioButton1.checked) {
        //Set the value of the prefix input to a default
        document.getElementById("prefix").value = "10.0.0.1";
        document.getElementById("subnetout").selectedIndex = "0";
        document.getElementById("maskbits").vlaue= "8";
        document.getElementById("maxsubnets").selectedIndex = "0";
        document.getElementById("hostspersub").value = "16777214";
       
       document.getElementById('btnSubmit').click();
        
        
   
      

    } if (ipv4calc_form.radioButton2.checked) {
        //For Subnets
        document.getElementById("prefix").value ="172.16.0.1";
        document.getElementById("subnetout").selectedIndex = "0";
        document.getElementById("maskbits").value = "16";
        document.getElementById("maxsubnets").selectedIndex = "0";
        document.getElementById("hostspersub").value = "65534";
       
        document.getElementById('btnSubmit').click();
      
      


    
    } else if (ipv4calc_form.radioButton3.checked) {
        document.getElementById("prefix").value ="192.168.0.1";
        document.getElementById("subnetout").selectedIndex = "0";
        document.getElementById("maskbits").value ="24"
        document.getElementById("maxsubnets").selectedIndex = "0";
        document.getElementById("hostspersub").value = "254";
    
      document.getElementById('btnSubmit').click();
      
     


    
    }

}


