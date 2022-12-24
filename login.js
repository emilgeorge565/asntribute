function clearFunc()
	{
		document.getElementById("email").value="";
		document.getElementById("pwd1").value="";
	}
function login()
	{
		var uname = document.getElementById("username").value;
		var pwd = document.getElementById("pass").value;
		var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
		if(uname!='lime')
		{
			alert("Incorrect password or username!");
		}
		else if(pwd!='123456')
		{
			alert("Incorrect password or username!");
		}
		else
		{
			window.location = "index.html";
		}
	}
	//Reset Inputfield code.
	function clearFunc()
	{
		document.getElementById("email").value="";
		document.getElementById("pwd1").value="";
	}