import React from 'react';
import styles from './ExperienceCard.module.css';
import { getImageUrl } from '../utils.js';

const ExperienceCard = ({ experience }) => {
  return (
    <div className={styles.experienceCard}>
      <div className={styles.timelineDot} />
      <div className={styles.content}>
        <div className={styles.header}>
          <img 
            src={getImageUrl(experience.imageSrc)} 
            alt={experience.organisation} 
            className={styles.companyLogo}
          />
          <div className={styles.titleContainer}>
            <h3>{experience.role}</h3>
            <h4>{experience.organisation}</h4>
            <p className={styles.period}>{experience.period}</p>
          </div>
        </div>
        <ul className={styles.experienceList}>
          {experience.experiences.map((exp, index) => (
            <li key={index} className={styles.experienceItem}>{exp}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ExperienceCard; 