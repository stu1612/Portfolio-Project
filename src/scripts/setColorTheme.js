export default function setColorTheme(colorTheme) {
  localStorage.setItem("theme", colorTheme);
  return document.documentElement.setAttribute("data-theme", colorTheme);
}
