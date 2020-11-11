window.onload = function(){
	var btn = document.getElementById("searchbtn");
	btn.addEventListener('click', function(e){
		e.preventDefault();
	

    var httpRequest = new XMLHttpRequest();
	var url = "http://localhost:8080/superheroes.php";
	httpRequest.open("GET", url, true);
	httpRequest.onreadystatechange = function(){
	if (httpRequest.readyState === XMLHttpRequest.DONE && httpRequest.status === 200 ){
		console.log("reach");
		var response = httpRequest.responseText;
		 b= document.getElementsByClassName("result").item(0);
		 b.innerHTML= response;
		 alert(b.innerHTML);
		
	}else{
		var msg ="trouble";
		msg.innerHTML=msg;

			
 	};
httpRequest.send();	
}
});
}
	

	

