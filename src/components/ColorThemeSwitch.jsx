// script
import setColorTheme from "../scripts/setColorTheme";

export default function ColorThemeSwitch() {
  function setDark() {
    return setColorTheme("dark");
  }
  function setGreen() {
    return setColorTheme("green");
  }
  function setLight() {
    return setColorTheme("light");
  }

  const storedTheme = localStorage.getItem("theme");

  const defaultDark = storedTheme === "dark";
  const defaultGreen = storedTheme === "green";

  if (defaultDark) {
    setDark();
  }
  if (defaultGreen) {
    setGreen();
  }

  return (
    <div className="theme-wrapper">
      <button onClick={setLight} className="color-theme light" />
      <button onClick={setDark} className="color-theme dark" />
      <button onClick={setGreen} className="color-theme green" />
    </div>
  );
}
