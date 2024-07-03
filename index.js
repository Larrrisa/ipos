document.addEventListener("DOMContentLoaded", function () {
  const customSelects = document.querySelectorAll(".customSelect");
  let currentSelectValue = "";

  customSelects.forEach((customSelect) => {
    const customSelectedItem = customSelect.querySelector(".selected");
    const customOptions = customSelect.querySelector(".customSelect__options");
    const customItem = customSelect.querySelectorAll(
      ".customSelect__options__item"
    );
    const arrow = customSelect.querySelector(".arrow");
    const originalSelectId = customSelect.getAttribute("id");
    const originalSelect = document.querySelector(
      `select[data-custom='${originalSelectId}']`
    );

    const mainHeading = document.getElementById("heading1");

    customSelectedItem.addEventListener("click", function () {
      customOptions.style.display =
        customOptions.style.display === "block" ? "none" : "block";
      arrow.classList.toggle("arrow-up");
    });

    arrow.addEventListener("click", function () {
      customOptions.style.display =
        customOptions.style.display === "block" ? "none" : "block";
      arrow.classList.toggle("arrow-up");
    });

    customItem.forEach((option) => {
      option.addEventListener("click", function () {
        const value = option.getAttribute("data-value");
        const text = option.querySelector("p").textContent;

        customSelectedItem.textContent = text;
        originalSelect.value = value;

        if (originalSelectId === "customSelect1") {
          let currentMainHeadingText = mainHeading.textContent;
          currentMainHeadingText = currentMainHeadingText.replace(
            currentSelectValue,
            ""
          );
          currentSelectValue = value;
          mainHeading.textContent = `${currentMainHeadingText} ${value}`;
        }

        if (originalSelectId === "customSelect2") {
          alert(` ${text}`);
        }

        customOptions.style.display = "none";
      });
    });
  });
});
