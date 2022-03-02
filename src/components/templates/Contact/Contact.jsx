// atoms
import { Title2 } from "../../UI/atoms/Title";
// molecules
import ScreenShape from "../../UI/molecules/ScreenShape/ScreenShape";
import TextContent from "../../UI/molecules/TextContent/TextContent";
import ContactIcons from "../../UI/organisms/ContactIcons/ContactIcons";
// styles
import "./style.css";

export default function Contact({ contacts }) {
  const contactLinks =
    contacts &&
    contacts.map((contact) => (
      <ContactIcons contact={contact} key={contact.id} />
    ));
  return (
    <section className="contact-section page-layout" id="contact">
      <ScreenShape>
        <div className="flex-start">
          <Title2>Contact</Title2>
        </div>
        <div className="flex-around">
          <TextContent
            body="Here is my contact information if you are intersted in starting a collaboration !"
            customStyle={"thin"}
          />
          <div>{contactLinks}</div>
        </div>
      </ScreenShape>
    </section>
  );
}
