import "./contact.css";
import { ContactPageSection } from "./ContactPageSection";

export const metadata = {
  title: 'ReelMan | Leading Uniform Solutions in Abu Dhabi',
  description: "ReelMan is Abu Dhabi's leading uniform tailoring company, delivering exceptional quality workwear and professional attire across the UAE. From corporate offices to construction sites, we design and manufacture uniforms that blend comfort, durability, and style.",
  openGraph: {
    title: 'Get in Touch',
  },
}

const Contact = () => {

  return (
    <ContactPageSection />
  );
};

export default Contact;