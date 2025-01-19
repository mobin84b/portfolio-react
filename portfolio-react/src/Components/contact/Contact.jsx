import React from 'react'
import './Contact.css'
import { MdOutlineEmail } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";


export default function Contact() {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "11ee1d81-bc99-46e6-b619-71f6c7a3cbec");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
    }
  };

  return (
    <div id='contact' className='contact'>
        <div className="contact-title">
            <h1><span>Get</span>in touch</h1>

        </div>
        <div className='contact-section'>
            <div className="contact-left">
                <h1>Let's talk</h1>
                <p>I'm currently available to take on new projects, so feel free to send me a message about anything that you want me to work on. you can contact anytime.</p>
                <div className="contact-details">

                  <div className="contact-detail">
                  <MdOutlineEmail />
                  <p>mobin1218485@gmail.com</p>
                  </div>

                  <div className="contact-detail">
                  <FiPhone />
                  <p>+98 938 754 6029</p>
                  </div>

                  <div className="contact-detail">
                  <IoLocationOutline />
                  <p>Khorasan Razavi, Mashhad</p>
                  </div>
                </div>
            </div>
            <form onSubmit={onSubmit}  className="contact-right">
              <label htmlFor="">Your Name</label>
              <input type="text" placeholder='Enter your name' name='name'/>

              <label htmlFor="">Your Email</label>
              <input type="text" placeholder='Enter your email' name='email'/>

              <label htmlFor="">Write Your Message Here</label>
              <textarea name="message" rows="8" placeholder='Enter your message'></textarea>

              <button className='contact-submit' type='submit'>submit now</button>
            </form>
        </div>
    </div>
  )
}
