import emailjs from 'emailjs-com';
import React from "react";
import form from 'react-bootstrap/Form';

export default function Contact() {
    
    function sendEmail(e){
        e.preventDefault();

        emailjs.sendForm('service_np8a4qa', 'template_1bcnd8c', form.current, 'user_PwdKAqZWgTIznIL475tyA')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset();
    }


        return (
        <div>
            <form ref={form} onSubmit={sendEmail}>
                <label>Name</label>
                <input type="text" name="name" />
                <label>Email</label>
                <input type="email" name="email" />
                <label>Message</label>
                <textarea name="message" />
                <input type="submit" value="Send" />
            </form>
        </div>
  );
    
}