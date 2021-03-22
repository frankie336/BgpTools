
//1. Get the current selected value of the subnetout element (the subnet mask)
//2. Get the selectected radio button for IPv4 classes:
//-If Class A (radioButton1) is checked, set the variable class_subx = class_subsA 
//-If Class B (radioButton2) is checked, set the variable class_subx = class_subsB
//-If Class C (radioButton3) is checked, set the variable class_subx = class_subsC
//3.Loop the length of the class_subx list which is now the list of all subnets in the give class
//4. If the current selected subnet = any in the class_subx list:
//- Set the ipclassbits element , using (i) for the matching index  

function map_masktobits() {
 
    var selected = document.getElementById("subnetout").value;

   
    if (document.getElementById('radioButton1').checked) {
    	var class_subx = class_subsA;
    }

    if (document.getElementById('radioButton2').checked) {
    	var class_subx = class_subsB;
    }

    if (document.getElementById('radioButton3').checked) {
    	var class_subx = class_subsC;
    }
   
    var arrayLength = class_subx.length;
    
    for (var i = 0; i < arrayLength; i++) {

    	if (selected == class_subx[i]) {
    		//alert(i)
    		document.getElementById("ipclassbits").selectedIndex = i

            document.getElementById("maskbits").selectedIndex = i

            document.getElementById("maxsubnets").selectedIndex = i

            document.getElementById("hostspersub").selectedIndex = i

            

    document.getElementById('btnSubmit').click()//Submit for output
        }

    }



}
 	


