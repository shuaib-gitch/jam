 if (sessionStorage.getItem('formDone') !== 'yes') {
      window.location.href = "form.html";
      console.log('session value:', sessionStorage.getItem('formDone'));
   } 

   let menuBar = document.getElementById("menuBar")
   let menuIcon = document.getElementById("menuIcon")

menuBar.style.maxHeight = "0px";

menuIcon.addEventListener("click", () => {
   if(menuBar.style.maxHeight === "0px") {
      menuBar.style.maxHeight = "350px";
   }
   else {
      menuBar.style.maxHeight = "0px"
   }
});
