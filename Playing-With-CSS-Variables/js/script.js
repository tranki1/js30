const inputList = document.querySelectorAll("input");

function handleUpdate() {
  const suffix = this.dataset.sizing || "";

  document.documentElement.style.setProperty(
    `--${this.name}`,
    this.value + suffix
  );
}

inputList.forEach(input => {
  input.addEventListener("change", handleUpdate);
  input.addEventListener("mousemove", handleUpdate);
});
