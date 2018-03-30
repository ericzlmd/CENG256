
function runAjaxScript() {
	var ajax = new XMLHttpRequest();
	ajax.onreadystatechange = function() {
		if(this.readyState == 4 && this.status== 200) {
			var resp =  this.responseText;
		}
	};
	ajax.open("GET", "getInfo.php", true);
	ajax.send();
	return false;
}

function init(){
	var b1 = document.getElementById("sendBtn");
	b1.onclick=runAjaxScript;
}

window.onload = init;
