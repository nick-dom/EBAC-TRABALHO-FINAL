import PageHeader from '../components/PageHeader';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects';
import styles from './ProjetosPage.module.css';

export default function ProjetosPage() {
  return (
    <div className={styles.page}>
      <PageHeader
        command="ls projetos/"
        title="Projetos"
        subtitle={`${projects.length} missões concluídas ao longo do curso — de e-commerce a jogo em Canvas.`}
      />
      <div className={styles.grid}>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}
