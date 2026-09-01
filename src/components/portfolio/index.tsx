import { motion } from "motion/react";

import githubIcon from "../../assets/icons/github-icon.svg";
import { Container } from "./styles";
import { projects } from "./projects.ts";

function FolderIcon() {
    return (
        <svg
            width="50"
            height="50"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
            role="img"
            aria-label="Project"
        >
            <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
        </svg>
    );
}

export function Portfolio() {
    return (
        <Container id="portfolio">
            <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6 }}
            >
                My Portfolio
            </motion.h2>

            <div className="projects">
                {projects.map((project, index) => (
                    <motion.article
                        className="project"
                        key={project.title}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.15 }}
                        transition={{
                            duration: 0.6,
                            delay: index * 0.1,
                        }}
                    >
                        <header>
                            <FolderIcon />

                            <div className="project-links">
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noreferrer"
                                    aria-label={`View ${project.title} on GitHub`}
                                >
                                    <img src={githubIcon} alt="" />
                                </a>
                            </div>
                        </header>

                        <div className="body">
                            <h3>{project.title}</h3>

                            <p>{project.description}</p>

                            {project.live && (
                                <a
                                    href={project.live}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="live-link"
                                >
                                    {project.live.replace("https://", "")}
                                </a>
                            )}
                        </div>

                        <footer>
                            <ul className="tech-list">
                                {project.technologies.map((technology) => (
                                    <li key={technology}>{technology}</li>
                                ))}
                            </ul>
                        </footer>
                    </motion.article>
                ))}
            </div>
        </Container>
    );
}