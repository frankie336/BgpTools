//1. Track the current maskbits selected option and get its current index
//2. Loop the the length of class_maskA list 
//3. If the current value = (i) any in the list:
//-Set the subnetout/subnet mask element value index to (i)
//-Set the ipclassbits/subnet bits used element value index to (i)


function map_masklen() {
    
    var selected = document.getElementById("maskbits").selectedIndex;
   
    var arrayLength = class_maskA.length;
    for (var i = 0; i < arrayLength; i++) {

    	if (selected == class_bitsA[i]) {

    		document.getElementById("subnetout").selectedIndex = i;//map slection to subnetout selected option

    		document.getElementById("ipclassbits").selectedIndex = i;//map slection to ipclassbits selected option

    		document.getElementById("maxsubnets").selectedIndex = i;

            document.getElementById("hostspersub").selectedIndex = i

    	document.getElementById('btnSubmit').click()//Submit for output
    	}

    }

}

