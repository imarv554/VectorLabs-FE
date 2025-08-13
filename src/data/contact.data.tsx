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
        subTitle: "let's chat, kindly reach out",
        text: "Have questions or feedback? we're here to help. Send us a message, and we'll respond within 24 hours",
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
      { icon: <MdEmail />, title: "Email", text: "hello@vetorlabs.com" },
      { icon: <MdLocalPhone />, title: "Phone", text: "+1 123 456 789" },
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
