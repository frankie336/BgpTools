



function map_maxtomask() {

	var selected = document.getElementById("maxsubnets").selectedIndex;
 
    var arrayLength = class_bitsA.length;
 	for (var i = 0; i < arrayLength; i++) {
 		
 		if (selected == class_bitsA[i]) {
 			document.getElementById("subnetout").selectedIndex = i;//map slection to subnetout selected option

 			document.getElementById("maskbits").selectedIndex = i;//map slection to ipclassbits selected option

 			document.getElementById("ipclassbits").selectedIndex = i

 			document.getElementById("hostspersub").selectedIndex = i

 	//document.getElementById('btnSubmit').click()//Submit for output
 		

 		}
 		 		

 	}
}

