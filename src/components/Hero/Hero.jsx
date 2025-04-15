import React from 'react'
import { getImageUrl } from '../../utils';
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hi,I am Sebin Shaiju..</h1>
            <p className={styles.description}>👋
I’m a full-stack developer with hands-on experience in building modern web applications using React, Node.js, Spring Boot, and MongoDB. I love turning complex ideas into seamless user experiences and scalable backend systems.
Currently, I’m diving deeper into the world of AI/ML, working on projects that span resume screening platforms, ad-tech integrations, and even superapps that blend functionality and intelligence.
</p>
            <a href='mailto:sebinshaiju77@gmail.com' className={styles.contactBtn}>Contact Me</a>
        </div>
        <img src={getImageUrl("hero/heroImg.png")} alt="Hero image of me" className={styles.heroImg}/>
        <div className={styles.topBlur}></div>
        <div className={styles.bottomBlur}></div> 
    </section>
  );
};

export default Hero;
