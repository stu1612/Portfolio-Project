//data
import Data from "../data/contact";

export default function Contact() {
  const contactItems = Data.map((item) => (
    <div className="contact">
      <div className="contact-img">{item.img}</div>
      <p>{item.link}</p>
    </div>
  ));
  return (
    <section className="primary-bg" id="contact">
      <div className="layout contact">
        <h2 className="h2">Contact me</h2>
        <div className="grid-layout grid-5">
          <div>
            <p className="mobile-w-50">
              Here is my contact information if you are interested in starting a
              collaboration
            </p>
          </div>
          <div>{contactItems}</div>
        </div>
      </div>
    </section>
  );
}
