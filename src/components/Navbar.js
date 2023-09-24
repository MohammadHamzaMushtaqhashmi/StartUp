import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../CSS/navbar.module.css'; // Import the CSS module

function Navbar() {
    return (
        <nav className={styles.navbar}>
            <div className={styles.navItems}>
                <span className={styles.title}>MyStartUp</span>
            </div>
            <div className={styles.navLinks}>
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
