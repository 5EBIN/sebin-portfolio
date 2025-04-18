import React from 'react'
import { getImageUrl } from '../../utils'
import styles from "./About.module.css";

const About = () => {
  return (
    <section className={styles.container} id="about">
        <h2 className={styles.title}>About</h2>
        <div className={styles.content}>
            <img src={getImageUrl("about/aboutImage.png")} alt="Me sitting with a laptop" className={styles.aboutImage} />
            <ul className={styles.aboutItems}>
                <li className={styles.aboutItem}><img src={getImageUrl("about/cursorIcon.png")} alt="Cursor Icon"/>
                <div className={styles.aboutItemtext}>
                    <h3>Frontend Developer</h3>
                    <p>I am a Frontend Developer with experience in making responsive websites</p>
                </div>
                </li>
                <li className={styles.aboutItem}><img src={getImageUrl("about/serverIcon.png")} alt="Server Icon"/>
                <div className={styles.aboutItemtext}>
                    <h3>Backend Developer</h3>
                    <p>I have experience developing fast and optimised back-end systems and API's</p>
                </div>
                </li>
                <li className={styles.aboutItem}><img src={getImageUrl("about/cursorIcon.png")} alt="Cursor Icon"/>
                <div className={styles.aboutItemtext}>
                    <h3>UI Designer</h3>
                    <p>I am a experienced in creating unique and practical UI's</p>
                </div>
                </li>
            </ul>
        </div>
    </section>
  )
}

export default About;
