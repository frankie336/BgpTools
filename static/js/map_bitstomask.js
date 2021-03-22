//1. Track the current ipclassbits selected option and get its current index
//2. Loop the the length of class_bitsA list 
//3. If the current value = (i) any in the list:
//-Set the subnetout/subnet mask element value index to (i)
//-Set the maskbits/subnet bits used element value index to (i)


function map_bitstomask() {

	var selected = document.getElementById("ipclassbits").selectedIndex;
 
    var arrayLength = class_bitsA.length;
 	for (var i = 0; i < arrayLength; i++) {
 		
 		if (selected == class_bitsA[i]) {
 			document.getElementById("subnetout").selectedIndex = i;//map slection to subnetout selected option

 			document.getElementById("maskbits").selectedIndex = i;//map slection to ipclassbits selected option

 			document.getElementById("maxsubnets").selectedIndex = i

 			document.getElementById("hostspersub").selectedIndex = i

 	document.getElementById('btnSubmit').click()//Submit for output
 		

 		}
 		 		

 	}
}

