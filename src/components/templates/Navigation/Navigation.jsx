import "./style.css";

export default function Navigation() {
  const links = [
    {
      id: 1,
      text: "home",
      url: "#home",
    },
    {
      id: 2,
      text: "about",
      url: "#about",
    },
    {
      id: 3,
      text: "projects",
      url: "#projects",
    },
    {
      id: 4,
      text: "tech",
      url: "#tech",
    },
    {
      id: 5,
      text: "contact",
      url: "#contact",
    },
  ];

  const handleClick = (e) => {
    e.preventDefault();
    const target = e.target.getAttribute("href");
    const location = document.querySelector(target).offsetTop;
    window.scrollTo({
      left: 0,
      top: location - 70,
    });
  };
  return (
    <div className="nav">
      <ul className="nav-links">
        {links.map((link) => (
          <li key={link.id}>
            <a href={link.url} onClick={handleClick}>
              {link.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
