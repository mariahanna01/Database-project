import emailjs from 'emailjs-com';
import {React,useState} from "react";
import form from 'react-bootstrap/Form';
import{useNavigate} from 'react-router-dom'
import Modal from 'react-bootstrap/Modal'
import './Contact.css'
import Button from 'react-bootstrap/Button'

export default function Contact() {
    const [show, setShow] = useState(false);
const[name,setName]=useState('');
const[email,setEmail]=useState('');
const[message,setMessage]=useState('');
const handleClose = () => setShow(false);
const handleShow = () => setShow(true);
    function sendEmail(e){
       
e.preventDefault();
        emailjs.sendForm('service_np8a4qa', 'template_1bcnd8c', form.current, 'user_PwdKAqZWgTIznIL475tyA')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset();
          handleShow()
    }


        return (
        <div className="contact">
            <form ref={form} onSubmit={sendEmail}>
                <div className="inputcontact">
                <label className="labels">Name</label>
                <input type="text" name="name" className= 'input' />
                <br/>
                </div>
                <div className="inputcontact">
                <label  className="labels">Email</label>
                <input type="email" name="email" className= 'input' />
                <br/>
                </div>
                <div className="inputcontact">
                <label  className="labels">Message</label>
                <textarea name="message" className= 'input' />
                <br/>
                </div>
                <div className="inputcontact">
                <Button as="input" type="submit" value="Send"  />
                </div>
            </form>


            <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title> Thank you for sending us a message! </Modal.Title>
        </Modal.Header>
        <Modal.Body>Our team will get back to you very soon!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        
        </Modal.Footer>
      </Modal>
        </div>
  );
    
}