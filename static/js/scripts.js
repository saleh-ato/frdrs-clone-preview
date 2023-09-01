MenuButton = document.getElementsByClassName("open");
CloseButton = document.getElementsByClassName("close");
MenuButton[0].addEventListener("click", function () {
  document.getElementsByClassName("collapse")[0].classList.toggle("active");
  // document.getElementsByClassName('close')[0].classList.toggle('active');
});
CloseButton[0].addEventListener("click", function () {
  // document.getElementsByClassName('close')[0].classList.toggle('active');
  document.getElementsByClassName("collapse")[0].classList.toggle("active");
});

search = document.getElementById("search");
search_wrapper = document.getElementById("search_wrapper");
searchclosebtn = search_wrapper.getElementsByClassName("icon")[0];
search.addEventListener("click", function () {
  search_wrapper.classList.toggle("active");
});
searchclosebtn.addEventListener("click", function () {
  search_wrapper.classList.toggle("active");
});
const search_input = document.getElementById("search_input");
search_input.addEventListener("change", function () {
});

search_input.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    // console.log(window.location.href-'index.html');
    window.location.href='file:///C:/Users/S/Desktop/faradars-clone/course.html'
  }
});
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    panel.classList.toggle("active");
    // if (panel.style.display === "block") {
    //     panel.style.display = "none";
    // } else {
    //     panel.style.display = "block";
    // }
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
// // searchBox
// const searchInput = document.getElementById("search_input");
// const searchResults = document.getElementById("searchResults");

// // Sample data (array of objects)
// const data = [
//   { id: 1, name: "آموزش فتوشاپ" },
//   { id: 2, name: "آموزش اکسل پیشرفته" },
//   { id: 3, name: "آموزش زبان اسمبلی" },
//   // Add more objects here
// ];

// searchInput.addEventListener("input", function () {
//   const searchTerm = searchInput.value.toLowerCase();
//   searchResults.innerHTML = "";

//   if (searchTerm.length === 0) {
//     searchResults.style.display = "none";
//     return;
//   }

//   const matchingItems = data.filter((item) =>
//     item.name.toLowerCase().includes(searchTerm)
//   );

//   if (matchingItems.length > 0) {
//     matchingItems.forEach((item) => {
//       const li = document.createElement("li");
//       li.textContent = item.name;
//       li.addEventListener("click", () => {
//         searchInput.value = item.name;
//         searchResults.style.display = "none";
//       });
//       searchResults.appendChild(li);
//     });
//     searchResults.style.display = "block";
//   } else {
//     searchResults.style.display = "none";
//   }
// });

// Hide search results when clicking outside
// document.addEventListener("click", function (event) {
//   if (!searchResults.contains(event.target) && event.target !== searchInput) {
//     searchResults.style.display = "none";
//   }

// });
// login page
// in login.js




// serach in nav

const searchInput = document.getElementById("search_input");
  const searchResults = document.getElementById("searchResults");

  const data = [
    "آموزش فتوشاپ",
    "آموزش اکسل پیشرفته",
    "آموزش زبان اسمبلی",
    // Add more items here
  ];

  searchInput.addEventListener("input", function () {
    const searchTerm = searchInput.value.trim().toLowerCase();
    searchResults.innerHTML = "";

    if (searchTerm.length === 0) {
      searchResults.style.display = "none";
      return;
    }

    const matchingItems = data.filter((item) =>
      item.toLowerCase().includes(searchTerm)
    );

    if (matchingItems.length > 0) {
      matchingItems.forEach((item) => {
        const resultItem = document.createElement("div");
        resultItem.textContent = item;
        resultItem.classList.add("result-item");
        resultItem.addEventListener("click", () => {
          searchInput.value = item;
          searchResults.style.display = "none";
        });
        searchResults.appendChild(resultItem);
      });
      searchResults.style.display = "block";
    } else {
      searchResults.style.display = "none";
    }
  });

  // // Hide search results when clicking outside
  // document.addEventListener("click", function (event) {
  //   if (
  //     !searchResults.contains(event.target) &&
  //     event.target !== searchInput
  //   ) {
  //     searchResults.style.display = "none";
  //   }
  // });

// profile
my_info = document.getElementById('my-info')
info_nav = document.getElementsByClassName('profile-nav')[0]
my_learning = document.getElementById('mylearning')
learning_nav = document.getElementsByClassName('profile-nav')[1]
function ShowInfo() {
  info_nav.classList.toggle('active')
  learning_nav.classList.toggle('active')
  my_info.classList.toggle('active')
  my_learning.classList.toggle('active')
}
function ShowLearning() {
  info_nav.classList.toggle('active')
  learning_nav.classList.toggle('active')
  my_info.classList.toggle('active')
  my_learning.classList.toggle('active')
}