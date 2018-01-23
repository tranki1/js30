const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');

let lastchecked;
function checkHandler(e) {
  let inBetween = false;
  if (this.checked && e.shiftKey) {
    checkboxes.forEach(checkbox => {
      if (checkbox === this || checkbox === lastchecked) {
        inBetween = !inBetween;
      }

      if (inBetween) {
        checkbox.checked = true;
      }
    });
  }
  lastchecked = this;
}
checkboxes.forEach(checkbox => {
  checkbox.addEventListener("click", checkHandler);
});
