const lightButton = document.getElementById("light");
const darkButton = document.getElementById("dark");
const solarButton = document.getElementById("solar");
const body = document.body;

// Apply themes from Local storage

const theme = localStorage.getItem("theme");
const isSolar = localStorage.getItem("isSolar");

if (theme) {
  body.classList.add(theme);
  isSolar && body.classList.add("solar");
}

// Theme switch buttons

lightButton.addEventListener("click", () => {
  body.classList.replace("dark", "light");
  localStorage.setItem("theme", "light");
});

darkButton.addEventListener("click", () => {
  body.classList.replace("light", "dark");
  localStorage.setItem("theme", "dark");
});

solarButton.addEventListener("click", () => {
  if (body.classList.contains("solar")) {
    body.classList.remove("solar");
    solarButton.style.cssText = body.classList.contains("light")
      ? `--bg-solar: var(--yellow)`
      : `--bg-solar: var(--blue)`;
    solarButton.innerText = "Solarize";
    localStorage.removeItem("isSolar");
  } else {
    solarButton.style.cssText = `--bg-solar: white`;
    body.classList.add("solar");
    solarButton.innerText = "Normalize";
    localStorage.setItem("isSolar", true);
  }
});
