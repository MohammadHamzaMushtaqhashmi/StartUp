import React from 'react';
import { useState } from 'react';

import styles from '../CSS/home.module.css';
function Home() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [project, setProject] = useState('');
  const [attachments, setAttachments] = useState([]);

  // Use event handlers to update the state variables
  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleProjectChange = (event) => {
    setProject(event.target.value);
  };

  const handleAttachmentsChange = (event) => {
    setAttachments(event.target.files);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform actions such as validating the input values, sending them to a server, or displaying a confirmation message
    console.log({ name, email, project, attachments });
  };

  return (
    <div>
      <section  className={styles.hero}>
        <div className={styles.heroImage}>
          <img src={process.env.PUBLIC_URL + '/images/Heroimg.jpg'} alt="Hero img" />
          </div>
          <div className={styles.heroText}>
            <h1 >PROFESSIONAL, PERSONAL SOLUTIONS</h1>
            <p>Bring your ideas to life!</p>
            <button>GET QUOTE</button>
          </div>
      </section>
      <div >
          <h1 className={styles.about}>ABOUT US</h1>
        </div>
      <section className={styles.service}>
      <div className={styles.row}>
        <div >
            <img src={process.env.PUBLIC_URL + '/images/about1.jpg'} alt="Service1" />
        </div>
        <div className={styles.text}>
            <h2>Personalized Software</h2>
            <p>At our company, we turn the digital dreams of our clients into a reality. We work closely with our users throughout development to ensure that we are still aligned with the end goal. We are committed to producing exceptional software for each of our clients.</p>
          </div>
        </div>
        <div className={styles.rowReverse}>
        <div >
          <img src={process.env.PUBLIC_URL + '/images/about2.jpeg'} alt="Service2" />
        </div>
        <div className={styles.text}>
            <h2>Rigorous Testing</h2>
            <p>Once we have finished the initial development of our client's product, we begin performing meticulous bug checks. These tests are included in the price of the development package. After testing, we deliver the software to our clients.</p>
        </div>
        </div>
        <div className={styles.row}>
        <div >
        <img src={process.env.PUBLIC_URL + '/images/about3.jpg'} alt="Service1" />
        </div>
        <div className={styles.text}>
            <h2>Quality Guaranteed</h2>
            <p>The world of technology can be fast-paced and scary. That's why our goal is to provide a high-quality product that aligns with your company's needs. No matter the budget, we pride ourselves on providing professional customer service. We guarantee you will be satisfied with our work.</p>
        </div>
      </div>
    </section>

    <section className={styles.reviews}>
       <div className={styles.reviewContent}>
        <div>
        <h1>Reviews</h1>
        </div>
        <div>
        <p>Reviews coming soon</p>    
        </div>
      </div >
    </section>
    <div >
       <h1 className={styles.about}>contact us</h1>
    </div>
    <div className={styles.contactline}>
      <p>Get in touch</p>
    </div>
  
    <section className={styles.contact}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.input}>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            required
            onChange={handleNameChange}
          />
          </div>
          <div className={styles.input}>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            required
            onChange={handleEmailChange}
          />
          </div>
          <div className={styles.textarea}>
          <textarea
            id="project"
            name="project"
            placeholder="Tell us about your project:"
            rows="5"
            required
            onChange={handleProjectChange}
          ></textarea>
          </div>
          <div className={styles.attachfile}>
            <label htmlFor="attachments">Attach files:</label>
          <input
            type="file"
            id="attachments"
            name="Attach files"
            multiple
            onChange={handleAttachmentsChange}
          />
          </div>
          <div className={styles.sendbutton}>
          <button type="submit">SEND</button>
          </div>
        </form>
      </section>
      <div className={styles.subscribe}>
      <h1>Subscribe</h1>
      <p>Sign up to hear from us about specials, sales, and events.</p>
      <form onSubmit={handleSubmit}>
      <div className={styles.inputrow}>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          required
          onChange={handleEmailChange}
        />
        <button type="submit">Sign up</button>
        </div>
      </form>
    </div>
    </div>
    );
}

export default Home;

