import React from "react";
import './contact.css';
import arrow from "../images/arrow.png"
import { FaInstagram,FaLinkedinIn,FaGithub,FaFacebook} from "react-icons/fa";

function Contact() {
    const [result, setResult] = React.useState("");
    const REACT_APP="d17359a1-ccd9-4a65-9080-afeeb6503e72";
      const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
      formData.append("access_key",REACT_APP);
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
      const data = await response.json();
      if (data.success) {
        setResult("Mail Sended Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };
  
    return (
      <div>
        <center><h2>Cont<span className="color-change">act</span></h2></center>
        <div className="contact-container" >
      <div className="contact-form">
           <h3>              
            Get  
              <span className="color-change"> In Touch</span>
          </h3>
          <form onSubmit={onSubmit}>
          <input type="text" name="name" placeholder="Name" required/>
          <input type="email" name="email" placeholder="Email" required/>
          <textarea name="message" placeholder="Write your message" required></textarea>  
          <button type="submit">Send<img src={arrow} alt = "arrow" /></button>
          </form>
        <span>{result}</span>
        </div>
        <div className="social-icons">
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram  size={42}/></a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedinIn size={42}/>          </a>
          <a href="https://www.github.com" target="_blank" rel="noopener noreferrer"><FaGithub size={42}/></a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook size={42}/></a>
        </div>
        </div>
        </div>
    );
  }  
  export default Contact;