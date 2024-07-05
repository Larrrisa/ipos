import { updateMainHeading, showAlert } from "./utils.js";

document.addEventListener("DOMContentLoaded", function () {
  const customSelects = document.querySelectorAll(".customSelect");

  let currentSelectValue = 0;

  customSelects.forEach((customSelect) => {
    const customSelectedItem = customSelect.querySelector(".selected");
    const customOptions = customSelect.querySelector(".customSelect__options");
    const customItem = customSelect.querySelectorAll(
      ".customSelect__options__item"
    );
    const arrow = customSelect.querySelector(".arrow");
    const originalSelectId = customSelect.getAttribute("id");
    const mainHeading = document.getElementById("heading1");
    const originalSelect = document.querySelector(
      `select[data-custom='${originalSelectId}']`
    );
    const functions = customSelect.getAttribute("data-function");

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

        if (functions === "updateMainHeading") {
          updateMainHeading(
            originalSelectId,
            value,
            mainHeading,
            currentSelectValue
          );
        } else if (functions === "showAlert") {
          showAlert(originalSelectId, text);
        }

        customOptions.style.display = "none";
      });
    });
  });
});
