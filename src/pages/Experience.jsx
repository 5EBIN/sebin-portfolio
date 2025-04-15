import { useState } from 'react';
import styles from './Experience.module.css';
import historyData from '../data/history.json';
import ExperienceCard from './ExperienceCard';

const Experience = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredExperiences = historyData.filter(exp =>
    exp.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
    exp.organisation.toLowerCase().includes(searchQuery.toLowerCase()) ||
    exp.experiences.some(exp => exp.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className={styles.experienceContainer}>
      <h1 className={styles.title}>Work Experience</h1>
      <div className={styles.searchContainer}>
        <input
          type="text"
          placeholder="Search experiences..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className={styles.searchInput}
        />
      </div>
      <div className={styles.experienceTimeline}>
        {filteredExperiences.map((experience, index) => (
          <ExperienceCard key={index} experience={experience} />
        ))}
      </div>
    </div>
  );
};

export default Experience; 