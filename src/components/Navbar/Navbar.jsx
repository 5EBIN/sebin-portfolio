import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import styles from './Navbar.module.css';
import { useState, useEffect } from 'react';
import { getImageUrl } from "../../utils";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handleNavClick = (sectionId) => {
        if (location.pathname !== '/') {
            navigate('/');
            // Use a slightly longer timeout to ensure the page has loaded
            setTimeout(() => {
                scrollToSection(sectionId);
            }, 500);
        } else {
            scrollToSection(sectionId);
        }
    };

    // Add effect to handle scroll when navigating from other pages
    useEffect(() => {
        if (location.pathname === '/' && location.hash) {
            const sectionId = location.hash.substring(1); // Remove the # from the hash
            setTimeout(() => {
                scrollToSection(sectionId);
            }, 100);
        }
    }, [location]);

    return (
        <nav className={styles.navbar}>
            <div className={styles.logo}>
                <Link to="/">Portfolio</Link>
            </div>
            <div className={styles.navLinks}>
                <Link to="/" className={styles.navLink}>Home</Link>
                <button 
                    className={styles.navLink} 
                    onClick={() => handleNavClick('about')}
                    style={{ background: 'none', border: 'none', cursor: 'pointer' }}
                >
                    About
                </button>
                <Link to="/projects" className={styles.navLink}>Projects</Link>
                <Link to="/experience" className={styles.navLink}>Experience</Link>
                <button 
                    className={styles.navLink} 
                    onClick={() => handleNavClick('contact')}
                    style={{ background: 'none', border: 'none', cursor: 'pointer' }}
                >
                    Contact
                </button>
            </div>
            <div className={styles.menu}>
                <img 
                    className={styles.menuBtn} 
                    src={menuOpen ? getImageUrl("nav/closeIcon.png") : getImageUrl("nav/menuIcon.png")}
                    alt="menu-button"
                    onClick={() => setMenuOpen(!menuOpen)}
                />
                <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
                    onClick={() => setMenuOpen(false)}>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <button 
                            onClick={() => handleNavClick('about')}
                            style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'inherit', fontSize: 'inherit' }}
                        >
                            About
                        </button>
                    </li>
                    <li>
                        <Link to="/projects">Projects</Link>
                    </li>
                    <li>
                        <Link to="/experience">Experience</Link>
                    </li>
                    <li>
                        <button 
                            onClick={() => handleNavClick('contact')}
                            style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'inherit', fontSize: 'inherit' }}
                        >
                            Contact
                        </button>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
