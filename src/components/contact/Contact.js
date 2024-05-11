import { Component, createRef, useState } from "react";
import "./contact.scss";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { RiWhatsappLine, RiPhoneLine } from "react-icons/ri";
import emailjs from "@emailjs/browser";
import axios from "axios";
const Contact = () => {
  const [fullName, setFullName] = useState("");
  const [eMail, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [message, setMessage] = useState("");

  const userDataHandler = async (event) => {
    event.preventDefault();
    const data = {
      Name: fullName,
      Email: eMail,
      MobileNumber: mobile,
      Message: message,
    };
    const formData = new FormData();
    for (const key in data) {
      formData.append(key, data[key]);
    }
    try {
      await axios.post(
        "https://script.google.com/macros/s/AKfycbxqYy2V66m4Qmc69b36Zv8-yZiiqp_1tSmU4DlFiQy4gu5OSddamLtw6pVUkh41ragQ/exec",
        data,
        {
          headers: {
            "Content-Type": "text/plain",
          },
        }
      );
      alert(
        `Hello ${fullName}!!!\nYour form submitted successFully.\nOur Team will contact you soon...\nHave a Great Day.`
      );
      setFullName("");
      setMobile();
      setEmail("");
      setMessage("");
    } catch (error) {
      console.error("Error submitting form data:", error);
    }
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <div className="contact__option">
            <RiPhoneLine className="contact__option-icon" />
            {/* <h4>Mobile</h4> */}
            <h5>Why not ring me up for a chat?</h5>
            <a href="tel:+916383294804" className="btn btn-outline-warning">
              Call Now
            </a>
          </div>
          <div className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            {/* <h4>Email</h4> */}
            <h5>Drop an email, and let's make some digital magic.</h5>
            <a
              href="mailto:bharaniarasu.business@gmail.com"
              className="btn btn-outline-warning"
            >
              Send mail
            </a>
          </div>

          <div className="contact__option">
            <RiWhatsappLine className="contact__option-icon" />
            {/* <h4>Whatsapp</h4> */}
            <h5>Shoot me a message</h5>
            <a
              href="https://api.whatsapp.com/send?phone=6383294804"
              className="btn btn-outline-warning"
            >
              Send message
            </a>
          </div>
        </div>
        <form onSubmit={userDataHandler} action="">
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={eMail}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="number"
            name="mobile"
            placeholder="Your Mobile Number"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            required
          />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
          <button
            type="submit"
            className="btn btn-outline-warning p-3 px-4 fs-5 mt-4"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
