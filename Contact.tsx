import React from 'react'
import { IoMdMail } from "react-icons/io";
import { FaPhoneSquareAlt } from "react-icons/fa";
import '../app/styles/contact.css';


const Contact = () => {
  return (
    <div id='contact' className="contact-container">
        <div className= "contact-grid md:grid-cols-2">
            <div className="contact-space">
                <h2 className="contact-heading" data-aos="zoom-in-up">Get in touch</h2>
                <p className="contact-text" data-aos="zoom-in-up">
                    Drop me a line, give me a call, or send me a massage by submitting the form.
                </p>
                <div className= "contact-flex" data-aos="zoom-in-up">
                <IoMdMail size={40} /> Rida@gmail.com
                </div>
                <div className= "contact-flex" data-aos="zoom-in-up">
                <FaPhoneSquareAlt size={40} /> (021) 000-12345
                </div>
            </div>
            <div className= "contact-space">
                <div className= "form" data-aos="zoom-in-up">
                    <label htmlFor="name">Name</label>
                    <input type='text' 
                    className="input-feild"
                    id='name'/>
                </div>

                <div className="form" data-aos="zoom-in-up">
                    <label htmlFor="email">Email</label>
                    <input type='text' 
                    className="input-feild"
                    id='email'/>
                </div>
                <div className="form"data-aos="zoom-in-up">
                    <label htmlFor="msg">Message</label>
                    <textarea
                    className="input-feild"
                    id='msg' rows={8}/>
                    <textarea/>
                </div>
                <button className="bitton" data-aos="zoom-in-up">Send</button>
            </div>
        </div>
    </div>
  )
}

export default Contact
