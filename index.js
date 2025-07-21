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
})