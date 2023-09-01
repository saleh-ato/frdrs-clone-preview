signupBox = document.getElementsByClassName("signupBox")[0];
signinBox = document.getElementsByClassName("signinBox")[0];
signinBtn = document.getElementsByClassName('signinBtn');
signupBtn = document.getElementsByClassName('signupBtn');
for (let i = 0; i <signinBtn.length; i++) {
    signinBtn[i].addEventListener("click", function () {
        signinBox.classList.add("active")
        signupBox.classList.remove("active")
    });
    signupBtn[i].addEventListener("click", function (e) {
        signupBox.classList.add("active")
        signinBox.classList.remove("active")
    });
}
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

  // ارور محدودیت

  const emailPhoneInput = document.getElementById("emailPhoneInput");
  const passwordInput = document.getElementById("passwordInput");
  const emailPhoneError = document.getElementById("emailPhoneError");
  const passwordError = document.getElementById("passwordError");

  emailPhoneInput.addEventListener("input", function () {
      const inputValue = emailPhoneInput.value;
      const isValid = /^[A-Za-z0-9]+$/.test(inputValue);
      if (!isValid) {
          emailPhoneInput.classList.add("error");
          emailPhoneInput.style.backgroundColor = "#ffcccc"; // تغییر بک‌گراند به قرمز
          emailPhoneError.textContent = "فقط اعداد و حروف لاتین مجاز هستند.";
      } else {
          emailPhoneInput.classList.remove("error");
          emailPhoneInput.style.backgroundColor = ""; // برگشت به بک‌گراند اصلی
          emailPhoneError.textContent = "";
      }
  });

  passwordInput.addEventListener("input", function () {
      const inputValue = passwordInput.value;
      const isValid = /^[A-Za-z0-9]+$/.test(inputValue);
      if (!isValid) {
          passwordInput.classList.add("error");
          passwordInput.style.backgroundColor = "#ffcccc"; // تغییر بک‌گراند به قرمز
          passwordError.textContent = "فقط اعداد و حروف لاتین مجاز هستند.";
      } else {
          passwordInput.classList.remove("error");
          passwordInput.style.backgroundColor = ""; // برگشت به بک‌گراند اصلی
          passwordError.textContent = "";
      }
  });