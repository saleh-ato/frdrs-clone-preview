document.addEventListener("DOMContentLoaded", function () {
  const selectMaghta = document.getElementById("selectMaghta");
  const selBtn = document.getElementById("selBtn");
  const selectedOptionText = document.getElementById("selectedOptionText");
  const maxSelections = 3; // تعداد ماکزیمم انتخاب‌ها

  let selectedOptions = [];

  selectMaghta.addEventListener("change", function () {
    selectedOptions.push(selectMaghta.value);
  });

  selBtn.addEventListener("click", function () {
    if (selectedOptions.length > 0 && selectedOptions.length <= maxSelections) {
      const selectedText = selectedOptions.join(", ");

      // پاک کردن محتوای قبلی
      selectedOptionText.textContent = "";

      // ایجاد المان span برای نمایش متن انتخاب شده با استایل
      const selectedSpan = document.createElement("span");
      selectedSpan.textContent = selectedText;
      selectedSpan.classList.add("selected-option");

      // اضافه کردن المان span به متن قبلی
      selectedOptionText.appendChild(selectedSpan);

      if (selectedOptions.length === maxSelections) {
        selectMaghta.disabled = true;
        const message = document.createElement("p");
        message.textContent = "شما مجاز به انتخاب بیشتر از سه مورد نیستید.";
        message.classList.add("message");
        selectedOptionText.appendChild(message);
      }
    }
  });
});

// province

document.addEventListener("DOMContentLoaded", function () {
  const provinceSelect = document.getElementById("province");
  const citySelect = document.getElementById("city");

  const cityOptions = {
    tehran: ["تهران", "قدس", "شهریار"],
    gilan: ["لاهیجان", "رشت", "انزلی"],
    // Add more provinces and cities here
  };

  provinceSelect.addEventListener("change", function () {
    const selectedProvince = provinceSelect.value;

    // Clear previous city options
    citySelect.innerHTML = "";

    // Populate city options based on selected province
    const cities = cityOptions[selectedProvince] || [];

    cities.forEach((city) => {
      const option = document.createElement("option");
      option.value = city;
      option.textContent = city;
      citySelect.appendChild(option);
    });
  });
});
