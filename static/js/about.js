// ارور عرض کمتر از 300


window.addEventListener("load", function () {
    checkScreenWidth();
  });
  
  window.addEventListener("resize", function () {
    checkScreenWidth();
  });
  
  const main = document.getElementById("main");
  function checkScreenWidth() {
    const screenWidth = window.innerWidth;
    const messageElement = document.getElementById("messageElement");
  
    if (screenWidth < 300) {
      messageElement.style.display = "block";
      main.style.display = "none";
    } else {
      messageElement.style.display = "none";
      main.style.display = "";
    }
  
  }