export function updateMainHeading(
  originalSelectId,
  value,
  mainHeading,
  currentSelectValue
) {
  if (originalSelectId === "customSelect1") {
    let currentMainHeadingText = mainHeading.textContent;
    currentMainHeadingText = currentMainHeadingText.replace(
      currentSelectValue,
      ""
    );
    currentSelectValue = value;
    mainHeading.textContent = `${currentMainHeadingText} ${value}`;
  }
}

export function showAlert(originalSelectId, text) {
  if (originalSelectId === "customSelect2") {
    alert(` ${text}`);
  }
}
