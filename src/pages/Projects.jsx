import { useState } from 'react';
import styles from './Projects.module.css';
import projectsData from '../data/projects.json';
import ProjectCard from './ProjectCard';

const Projects = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProjects = projectsData.filter(project =>
    project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    project.skills.some(skill => skill.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className={styles.projectsContainer}>
      <h1 className={styles.title}>My Projects</h1>
      <div className={styles.searchContainer}>
        <input
          type="text"
          placeholder="Search projects..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className={styles.searchInput}
        />
      </div>
      <div className={styles.projectsGrid}>
        {filteredProjects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects; 