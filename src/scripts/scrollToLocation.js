export default function scrollToLocation(event) {
  event.preventDefault();
  const navHeight = 70;
  const target = event.target.getAttribute("href");
  const location = document.querySelector(target).offsetTop;
  window.scrollTo({
    left: 0,
    top: location - navHeight,
  });
}
