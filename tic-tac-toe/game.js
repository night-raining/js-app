var permennaya , button, allBlock ;var arhiv = 1;
	function  foo_1 ()
	{ 		
		rezult = document.getElementById("rezult").innerHTML;
		button =document.getElementById("id_1").innerHTML; //alert(button);
		if(button === "") 
		{
			if(rezult == "x")
			{
			permennaya = "0"
			} 
			else 
			{
			permennaya = "x";
			}
		document.getElementById("id_1").innerHTML  = permennaya; 
		document.getElementById("rezult").innerHTML  = permennaya; 
		count = document.getElementById("arhiv").innerHTML  +=  arhiv;  count = count.length; //alert(count);		 
		}
		winner();			
	}
	function  foo_2 ()
	{ 		
		rezult = document.getElementById("rezult").innerHTML;
		button =document.getElementById("id_2").innerHTML; //alert(button);
		if(button === "") 
		{
			if(rezult == "x")
			{
			permennaya = "0"
			} 
			else 
			{
			permennaya = "x";
			}
		document.getElementById("id_2").innerHTML  = permennaya; 
		document.getElementById("rezult").innerHTML  = permennaya; 
		count = document.getElementById("arhiv").innerHTML  +=  arhiv;  count = count.length; //alert(count);		 
		}
		winner();			
	}
	function  foo_3 ()
	{ 		
		rezult = document.getElementById("rezult").innerHTML;
		button =document.getElementById("id_3").innerHTML; //alert(button);
		if(button === "") 
		{
			if(rezult == "x")
			{
			permennaya = "0"
			} 
			else 
			{
			permennaya = "x";
			}
		document.getElementById("id_3").innerHTML  = permennaya; 
		document.getElementById("rezult").innerHTML  = permennaya; 
		count = document.getElementById("arhiv").innerHTML  +=  arhiv;  count = count.length; //alert(count);		 
		}
		winner();			
	}
	function  foo_4 ()
	{ 		
		rezult = document.getElementById("rezult").innerHTML;
		button =document.getElementById("id_4").innerHTML; //alert(button);
		if(button === "") 
		{
			if(rezult == "x")
			{
			permennaya = "0"
			} 
			else 
			{
			permennaya = "x";
			}
		document.getElementById("id_4").innerHTML  = permennaya; 
		document.getElementById("rezult").innerHTML  = permennaya; 
		count = document.getElementById("arhiv").innerHTML  +=  arhiv;  count = count.length; //alert(count);		 
		}
		winner();			
	}
	function  foo_5 ()
	{ 		
		rezult = document.getElementById("rezult").innerHTML;
		button =document.getElementById("id_5").innerHTML; //alert(button);
		if(button === "") 
		{
			if(rezult == "x")
			{
			permennaya = "0"
			} 
			else 
			{
			permennaya = "x";
			}
		document.getElementById("id_5").innerHTML  = permennaya; 
		document.getElementById("rezult").innerHTML  = permennaya; 
		count = document.getElementById("arhiv").innerHTML  +=  arhiv;  count = count.length; //alert(count);		 
		}
		winner();			
	}
	function  foo_6 ()
	{ 		
		rezult = document.getElementById("rezult").innerHTML;
		button =document.getElementById("id_6").innerHTML; //alert(button);
		if(button === "") 
		{
			if(rezult == "x")
			{
			permennaya = "0"
			} 
			else 
			{
			permennaya = "x";
			}
		document.getElementById("id_6").innerHTML  = permennaya; 
		document.getElementById("rezult").innerHTML  = permennaya; 
		count = document.getElementById("arhiv").innerHTML  +=  arhiv;  count = count.length; //alert(count);		 
		}
		winner();			
	}
	function  foo_7 ()
	{ 		
		rezult = document.getElementById("rezult").innerHTML;
		button =document.getElementById("id_7").innerHTML; //alert(button);
		if(button === "") 
		{
			if(rezult == "x")
			{
			permennaya = "0"
			} 
			else 
			{
			permennaya = "x";
			}
		document.getElementById("id_7").innerHTML  = permennaya; 
		document.getElementById("rezult").innerHTML  = permennaya; 
		count = document.getElementById("arhiv").innerHTML  +=  arhiv;  count = count.length; //alert(count);		 
		}
		winner();			
	}
	function  foo_8 ()
	{ 		
		rezult = document.getElementById("rezult").innerHTML;
		button =document.getElementById("id_8").innerHTML; //alert(button);
		if(button === "") 
		{
			if(rezult == "x")
			{
			permennaya = "0"
			} 
			else 
			{
			permennaya = "x";
			}
		document.getElementById("id_8").innerHTML  = permennaya; 
		document.getElementById("rezult").innerHTML  = permennaya; 
		count = document.getElementById("arhiv").innerHTML  +=  arhiv;  count = count.length; //alert(count);		 
		}
		winner();			
	}
	function  foo_9 ()
	{ 		
		rezult = document.getElementById("rezult").innerHTML;
		button =document.getElementById("id_9").innerHTML; //alert(button);
		if(button === "") 
		{
			if(rezult == "x")
			{
			permennaya = "0"
			} 
			else 
			{
			permennaya = "x";
			}
		document.getElementById("id_9").innerHTML  = permennaya; 
		document.getElementById("rezult").innerHTML  = permennaya; 
		count = document.getElementById("arhiv").innerHTML  +=  arhiv;  count = count.length; //alert(count);		 
		}
		winner();			
	}
function winner(){ 
    allBlock =  document.getElementsByClassName("block");console.log(allBlock);
	if(allBlock[0].innerHTML =='x' & allBlock[1].innerHTML =='x' & allBlock[2].innerHTML =='x'){alert('Крестики победили!'); location.reload(); fail;} 
	if(allBlock[3].innerHTML =='x' & allBlock[4].innerHTML =='x' & allBlock[5].innerHTML =='x'){alert('Крестики победили!'); location.reload(); fail;}  
	if(allBlock[6].innerHTML =='x' & allBlock[7].innerHTML =='x' & allBlock[8].innerHTML =='x'){alert('Крестики победили!'); location.reload(); fail;}

	if(allBlock[0].innerHTML =='x' & allBlock[3].innerHTML =='x' & allBlock[6].innerHTML =='x'){alert('Крестики победили!'); location.reload(); fail;} 
	if(allBlock[1].innerHTML =='x' & allBlock[4].innerHTML =='x' & allBlock[7].innerHTML =='x'){alert('Крестики победили!'); location.reload(); fail;}  
	if(allBlock[2].innerHTML =='x' & allBlock[5].innerHTML =='x' & allBlock[8].innerHTML =='x'){alert('Крестики победили!'); location.reload(); fail;}

	if(allBlock[0].innerHTML =='x' & allBlock[4].innerHTML =='x' & allBlock[8].innerHTML =='x'){alert('Крестики победили!'); location.reload(); fail;} 
	if(allBlock[2].innerHTML =='x' & allBlock[4].innerHTML =='x' & allBlock[6].innerHTML =='x'){alert('Крестики победили!'); location.reload(); fail;}  

	if(allBlock[0].innerHTML =='0' & allBlock[1].innerHTML =='0' & allBlock[2].innerHTML =='0'){alert('Нолики победили!'); location.reload(); fail;} 
	if(allBlock[3].innerHTML =='0' & allBlock[4].innerHTML =='0' & allBlock[5].innerHTML =='0'){alert('Нолики победили!'); location.reload(); fail;}  
	if(allBlock[6].innerHTML =='0' & allBlock[7].innerHTML =='0' & allBlock[8].innerHTML =='0'){alert('Нолики победили!'); location.reload(); fail;}

	if(allBlock[0].innerHTML =='0' & allBlock[3].innerHTML =='0' & allBlock[6].innerHTML =='0'){alert('Нолики победили!'); location.reload(); fail;} 
	if(allBlock[1].innerHTML =='0' & allBlock[4].innerHTML =='0' & allBlock[7].innerHTML =='0'){alert('Нолики победили!'); location.reload(); fail;}  
	if(allBlock[2].innerHTML =='0' & allBlock[5].innerHTML =='0' & allBlock[8].innerHTML =='0'){alert('Нолики победили!'); location.reload(); fail;}

	if(allBlock[0].innerHTML =='0' & allBlock[4].innerHTML =='0' & allBlock[8].innerHTML =='0'){alert('Нолики победили!'); location.reload(); fail;} 
	if(allBlock[2].innerHTML =='0' & allBlock[4].innerHTML =='0' & allBlock[6].innerHTML =='0'){alert('Нолики победили!'); location.reload(); fail;}

	if(count == "9") { alert('Ничья!');  location.reload(); } 
	console.log(allBlock);
}