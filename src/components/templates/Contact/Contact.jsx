// atoms
import { Title2 } from "../../UI/atoms/Title";
// molecules
import ScreenShape from "../../UI/molecules/ScreenShape/ScreenShape";
import TextContent from "../../UI/molecules/TextContent/TextContent";
import ContactIcons from "../../UI/organisms/ContactIcons/ContactIcons";
// styles
import "./style.css";

export default function Contact({ contacts }) {
  // Nesting -1
  // No need for the "contacts &&" if the array is 0, the code just don't run anyways
  // If you want to prevent some kind of error like contacts being undefined, you can do the safeguard and put it on the top
  const contactLinks =
    contacts &&
    contacts.map((contact) => (
      <ContactIcons contact={contact} key={contact.id} />
    ));

  // add space between the propery and the return
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
