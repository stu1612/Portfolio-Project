import setColorTheme from "../scripts/setColorTheme";

export default function Home() {
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
    <div>
      <div className="content">
        <h3>Multiple color provider</h3>
      </div>
      <div className="toggle-theme-wrapper">
        <button onClick={setLight}>Light</button>
        <button onClick={setDark}>Dark</button>
        <button onClick={setGreen}>Green</button>
      </div>
    </div>
  );
}
