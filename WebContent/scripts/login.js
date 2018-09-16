window.addEventListener('load', function(){
	//alert('window loaded....');
	
	
	
	var formRef = document.getElementById("loginForm");
	
	formRef.addEventListener('submit', function(){
		alert("form submitted...");
		
		//create ajax object
		try{
			xhr = new XMLHttpRequest();
		}
		catch(err){
			
			try{
				xhr = new ActiveXObject("MSXML2.XMLHttp.6.0");
			}
			catch(err){
				alert(err);
			}
		}
		
		//event handling
		  xhr.onreadystatechange = function() {
		      if (xhr.readyState == 4) {
		          var data = xhr.responseText;
		          alert(data);
		      }
		  }
		  //request mapping path in controller
		  xhr.open('POST', 'http://localhost:8888/addUser', true);
		  xhr.setRequestHeader("Content-type", "application/json");
		  username = document.getElementById("name").value;
		  pwd = document.getElementById("pass").value;
		  userObj={
				  userName:username,
				  password:pwd
		  }
		  
		  userstrObj=JSON.stringify(userObj);
		  
		  xhr.send(userstrObj); 
		
	});
	
	
	
});