import React from 'react'
import { getImageUrl } from '../../utils';
import styles from "./Hero.module.css";
export const Hero = () => {
  return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hi, I am Sebin Shaiju</h1>
            <p className={styles.description}>I am a full-stack developer with experiene using React and NodeJS. Reach out if you'd like to learn more!</p>
            <a href='mailto:sebinshaiju77@gmail.com' className={styles.contactBtn}>Contact Me</a>
        </div>
        <img src={getImageUrl("hero/heroImage.png")} alt="Hero image of me" className={styles.heroImg}/>
        <div className={styles.topBlur}></div>
        <div className={styles.bottomBlur}></div> 
    </section>
  );
};
