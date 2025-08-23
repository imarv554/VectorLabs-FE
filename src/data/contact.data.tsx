import { ContactUS } from "../../public/img";
import { FaDiscord, FaLinkedin, FaTelegramPlane } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io5";
import { MdEmail, MdLocalPhone, MdOutlineLocationCity } from "react-icons/md";

const contactData = {
  contents: {
    getInTouch: [
      {
        title: "Get in touch",
        subTitle: "let's connect and innovate together",
        text: "Ready to bring your ideas to life? Whether you're interested in our MVP development services, want to learn more about our products, or are exploring potential partnerships, we'd love to hear from you.",
      },
    ],
    form: [
      { label: "First Name", placeholder: "First name", type: "text" },
      { label: "Last Name", placeholder: "Last name", type: "text" },
      { label: "Email", placeholder: "Email", type: "email" },
    ],
    textArea: [{ label: "Message", placeholder: "leave us message" }],
    contactImage: [{ img: ContactUS, name: "contact-us" }],
    contactDetails: [
      { icon: <MdEmail />, title: "Email", text: "hello@affidexlab.com" },
      { icon: <MdLocalPhone />, title: "Phone", text: "+1 (555) 123-4567" },
      {
        icon: <MdOutlineLocationCity />,
        title: "Address",
        text: "Coming Soon",
      },
    ],
    socials: [
      { icon: <FaXTwitter />, link: "" },
      { icon: <FaTelegramPlane />, link: "" },
      { icon: <FaDiscord />, link: "" },
      { icon: <FaLinkedin />, link: "" },
      { icon: <IoLogoYoutube />, link: "" },
    ],
  },
};

export default contactData;
