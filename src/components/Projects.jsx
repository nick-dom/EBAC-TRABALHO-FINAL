import { projects } from '../data/projects';
import ProjectCard from './ProjectCard';
import Section from './Section';
import styles from './Projects.module.css';

export default function Projects() {
  return (
    <Section id="projetos" command="ls projetos/" title="Projetos">
      <p className={styles.intro}>
        {projects.length} projetos desenvolvidos ao longo do curso, cobrindo React, Next.js,
        TypeScript e JavaScript puro — do e-commerce ao jogo em Canvas.
      </p>
      <div className={styles.grid}>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </Section>
  );
}
