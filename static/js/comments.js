//   // ارور عرض کمتر از 300

// window.addEventListener("load", function () {
//     checkScreenWidth();
//   });
  
//   window.addEventListener("resize", function () {
//     checkScreenWidth();
//   });
  
//   const main = document.getElementById("main");
//   function checkScreenWidth() {
//     const screenWidth = window.innerWidth;
//     const messageElement = document.getElementById("messageElement");
  
//     if (screenWidth < 300) {
//       messageElement.style.display = "block";
//       main.style.display = "none";
//     } else {
//       messageElement.style.display = "none";
//       main.style.display = "";
//     }
  
//   }

document.addEventListener('DOMContentLoaded', function() {
    const sendCommentBtn = document.getElementById('sendComment');
    const userInfoBox = document.getElementById('userInfoBox');
  
    sendCommentBtn.addEventListener('click', function(event) {
      event.preventDefault();
  
      const nameInput = document.querySelector('[name="name"]');
      const commentInput = document.querySelector('[name="comment"]');
  
      const name = nameInput.value;
      const comment = commentInput.value;
  
      if (name && comment) {
        const commentBox = document.createElement('div');
        commentBox.className = 'bg-light comment round-1 p1 flex mt-2';
        commentBox.innerHTML = `
          <img src="./static/images/avatar.webp" alt="" class="circle">
          <div class="flex flex-column mr-2">
            <h3 class="text-mute">${name}</h3>
            <p>${comment}</p>
          </div>
        `;
        console.log(name);
        console.log(comment);

  
        userInfoBox.appendChild(commentBox);
  
        // پاک کردن محتوای فرم
        nameInput.value = '';
        commentInput.value = '';
      }
    });
  });
  

