/*
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars , faTimes} from '@fortawesome/free-solid-svg-icons';
import styles from '../CSS/navbar.module.css'; // Import the CSS module

function Navbar() {
    const [showNav, setShowNav] = useState(false);
    const classToggle = () => {
        setShowNav(!showNav);
    };
    return (
        <nav className={styles.navbar}>
            <div className={styles.navItems}>
                <span className={styles.title}>MyStartUp</span>
            </div>
            <div className={styles.Navbar_Link_toggle} onClick={classToggle}>
            <FontAwesomeIcon 
                icon={showNav ? faTimes : faBars} 
                className={showNav ? styles.closeToggle : ''} 
                onClick={classToggle} 
            />

            </div>
            <div className={`${styles.navLinks} ${showNav ? styles.show : ''}`}>
                <div className={styles.linkContainer}>
                    <Link to="/" className={styles.link}>Home</Link>
                    <Link to="/products-services" className={styles.link}>Services</Link>
                    <Link to="/testimonials" className={styles.link}>Testimonials</Link>
                    <Link to="/blog" className={styles.link}>Blog</Link>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
*/
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars , faTimes} from '@fortawesome/free-solid-svg-icons';
import styles from '../CSS/navbar.module.css'; // Import the CSS module

function Navbar() {
    const [showNav, setShowNav] = useState(false);
    const classToggle = () => {
        setShowNav(!showNav);
    };
    return (
        <nav className={styles.navbar}>
            <div className={styles.navItems}>
                <span className={styles.title}>MyStartUp</span>
            </div>
            <div className={styles.Navbar_Link_toggle} onClick={classToggle}>
                <FontAwesomeIcon 
                    icon={showNav ? faTimes : faBars} 
                    className={showNav ? styles.closeToggle : ''} 
                />
            </div>
            <div className={`${styles.navLinks} ${showNav ? styles.show : ''}`}>
                <div className={styles.linkContainer}>
                    <Link to="/" className={styles.link}>Home</Link>
                    <Link to="/products-services" className={styles.link}>Services</Link>
                    <Link to="/testimonials" className={styles.link}>Testimonials</Link>
                    <Link to="/blog" className={styles.link}>Blog</Link>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
