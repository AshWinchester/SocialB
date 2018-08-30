/**
 * 
 */


	function validateRegister() {
		var fname = document.registerForm.fname.value;
		if(fname==""){
			alert("First name cannot be empty!");
			document.registerForm.fname.focus();
			return false;
		}
		var lname = document.registerForm.lname.value;
		if(lname==""){
			alert("Last name cannot be empty!");
			document.registerForm.lname.focus();
			return false;
		}
		var email = document.registerForm.email.value;
		if(email==""){
			alert("Email cannot be empty!");
			document.registerForm.email.focus();
			return false;
		}
		var pass = document.registerForm.pass.value;
		if(pass==""){
			alert("Password cannot be empty!");
			document.registerForm.pass.focus();
			return false;
		}
	}

	function validateLogin(){
		var email = document.loginForm.email.value;
		if(email=="") {
			alert("Email cannot be empty!");
			document.loginForm.email.focus();
			return false;
		}
		var pass = document.loginForm.pass.value;
		if(pass==""){
			alert("Password cannot be empty!");
			document.loginForm.pass.focus();
			return false;
		}
	}
