import { useEffect, useState } from "react";
import styles from "./Projects.module.scss";

const Projects = () => {
  const [projects, setProjects] = useState(null);

  useEffect(() => {
    const url = "https://worker.leopolicastro.com/api/projects";
    fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Token ${process.env.REACT_APP_PROJECTS_API}`,
      },
    })
      .then((data) => {
        return data.json();
      })
      .then((res) => {
        console.log(res);
        setProjects(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className={styles.projects}>
      {projects?.map((project) => {
        return (
          <div key={project.id} className={styles.projectCard}>
            <h3>{project.title}</h3>

            <img
              src={project.image}
              alt="wynston logo"
              className={styles.projectImages}
            />
            <div className={styles.description}>{project.description}</div>
            <div>{project.technology}</div>
            <a target="_blank" rel="noopener noreferrer" href={project.url}>
              URL
            </a>
          </div>
        );
      })}
    </div>
  );
};

export default Projects;
