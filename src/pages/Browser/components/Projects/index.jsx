import { useEffect, useState } from "react";
import styles from "./Projects.module.scss";

const Projects = () => {
  const [projects, setProjects] = useState(null);

  const compare = (a, b) => {
    return a.order > b.order ? 1 : a.order < b.order ? -1 : 0;
  };

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
        setProjects(res.sort(compare));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className={styles.projectPage}>
      {projects?.map((project) => {
        return (
          <div key={project.id} className={styles.projects}>
            <div className={styles.projectCard}>
              <h3>{project.title}</h3>
              <img
                src={project.image}
                alt={`${project.title} image`}
                className={styles.projectImages}
              />
              <div className={styles.description}>{project.description}</div>
              <div>{project.technology}</div>
              <a target="_blank" rel="noopener noreferrer" href={project.url}>
                URL
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Projects;
