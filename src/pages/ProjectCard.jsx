import styles from './ProjectCard.module.css';
import { getImageUrl } from "../utils.js";
const ProjectCard = ({ project }) => {
  return (
    <div className={styles.projectCard}>
      <div className={styles.projectImage}>
        <img src={getImageUrl(project.imageSrc)} alt={project.title} />
      </div>
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <div className={styles.tags}>
        {project.skills.map((skill, index) => (
          <span key={index} className={styles.tag}>{skill}</span>
        ))}
      </div>
      <div className={styles.links}>
        <a href={project.demo} target="_blank" rel="noopener noreferrer" className={styles.link}>
          Demo
        </a>
        <a href={project.source} target="_blank" rel="noopener noreferrer" className={styles.link}>
          Source
        </a>
      </div>
    </div>
  );
};

export default ProjectCard; 