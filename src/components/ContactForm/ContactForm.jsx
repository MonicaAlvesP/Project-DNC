import './ContactForm.css';

import { Button } from '../Button/Button';

export const ContactForm = () => {
  return (
      <div className="contact-form d-flex fd-column al-center">
        <h2>We love meeting new people and helping them.</h2>
        <form action="">
          <input type="text" placeholder='Name*'/>
          <input type="email" placeholder='Email*'/>
          <textarea placeholder='Hello I am Intrested in..'></textarea>
          <Button buttonStyle="secondary">
            Send Now
          </Button>
        </form>
      </div>
  )
}
