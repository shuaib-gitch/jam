document.getElementById('signupForm').addEventListener('submit', ((event) => {
   event.preventDefault();

   let Username = document.getElementById("username").value;
   let Email = document.getElementById("email").value;
   let Password = document.getElementById("password").value;
   let confirmPassword = document.getElementById("confirmPassword").value;

   let web_usr_name = "Akande";
   let web_usr_email = "user@gmail.com";
   let web_usr_password = "code1234";
   let web_usr_confirmPassword = "code1234";

   if(Username === web_usr_name && Email === web_usr_email && Password === web_usr_password && confirmPassword === web_usr_confirmPassword) {
      window.location.href="index.html";
      sessionStorage.setItem("formDone", "yes");
   }
   else {
      document.getElementById('errorMsg').style.display ="block";
      document.getElementById('errorMsg').style.color ="red";
   }
}));