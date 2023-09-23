import "./contact.scss";
import emailjs from 'emailjs-com';
import { useState } from 'react';  // Import useState
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  function sendEmail(e) {
    e.preventDefault();
    emailjs.sendForm('service_dtoqo9n', 'template_k0xdwet', e.target, 'szXhGgzaku7Qgydqb')
      .then(res => {
        console.log(res);
        toast.success('Message sent successfully!', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light"
        });
        setFormData({
          name: '',
          email: '',
          message: ''
        });
      })
      .catch(err => {
        toast.error('Something went wrong! Please Check network connection.', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light"
        });
        console.log(err);
      });
  }

  function handleInputChange(e) {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  }

  return (
    <div className="contact" id="contact">
      <div className="container">
        <div className="contactdetail">
          <img src="assets/cbanner1.jpg" alt="loading" style={{ display: "block", margin: "0 auto", width: "100%", overflow: "hidden" }} />

          <h1>Contact</h1>
          <form action="#" className="contact-form" onSubmit={sendEmail}>
            <label htmlFor="name">Your name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleInputChange}
            />

            <label htmlFor="email">Your Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your Email"
              value={formData.email}
              onChange={handleInputChange}
            />

            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="6"
              value={formData.message}
              onChange={handleInputChange}
            ></textarea>

            <button type="submit">Send</button>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
    
  );
}
