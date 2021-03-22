function map_hostper() {
    
    var selected = document.getElementById("hostspersub").selectedIndex;
   
    var arrayLength = class_maskA.length;
    for (var i = 0; i < arrayLength; i++) {

    	if (selected == class_bitsA[i]) {

    		document.getElementById("subnetout").selectedIndex = i;//map slection to subnetout selected option

    		document.getElementById("ipclassbits").selectedIndex = i;//map slection to ipclassbits selected option

    		document.getElementById("maxsubnets").selectedIndex = i;

            document.getElementById("maskbits").selectedIndex = i

    	//document.getElementById('btnSubmit').click()//Submit for output
    	}

    }

}

