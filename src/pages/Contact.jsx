import React from "react";
import pizzaLeft from "../assets/pizzaLeft.jpg";
import "../styles/Contact.css";

function Contact() {
    return (
        <div className="contact">
            <div className="leftSide" style={{backgroundImage: `url(${pizzaLeft})`}}></div>
            <div className="rightSide">
                <form id="contact-form">
                    <label htmlFor="name">Full Name:</label>
                    <input name="name" type="text" placeholder="Enter full name..." />

                    <label htmlFor="email">Email:</label>
                    <input name="email" type="email" placeholder="Enter email..." />

                    <label htmlFor="message">Message:</label>
                    <textarea name="message" placeholder="Enter message..." />

                    <button type="submit">Send Message</button>
                </form>
            </div>
        </div>
    );
}

export default Contact;