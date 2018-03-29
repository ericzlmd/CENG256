
function runAjaxScript(){

	var aj = new XMLHttpRequest();
	aj.onreadystatechange = function(){
		if (this.readyState==4 && this.status==200){
			var resp = this.responseText;
			var recievedObject = JSON.parse(resp);
			var section = document.getElementById("updateArea");
			var section2 = document.getElementById("updateArea2");
			var info = recievedObject.name;
			section.innerHTML=info;	
			section2.innerHTML = recievedObject.age;	
		}
	};
	aj.open("GET","sendtime.php",true);
	aj.send();
	return false;
}



function init(){
	var b1 = document.getElementById("subBttn");
	b1.onclick=runAjaxScript;
}

window.onload = init;
