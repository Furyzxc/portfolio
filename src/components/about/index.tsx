import { motion } from "motion/react";

import aboutPhoto from "../../assets/images/about-photo.png";
import { skillGroups } from "./skillGroups.ts";
import { Container } from "./styles";

const textAnimation = {
    initial: {
        opacity: 0,
        x: -40,
    },
    whileInView: {
        opacity: 1,
        x: 0,
    },
    viewport: {
        once: true,
        amount: 0.2,
    },
    transition: {
        duration: 0.6,
    },
};

export function About() {
    return (
        <Container id="about">
            <div className="about-text">
                <motion.h2 {...textAnimation}>
                    About Me
                </motion.h2>

                <motion.p
                    {...textAnimation}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    Hi, I'm Serhii Ananiev — a Computer Science student and
                    frontend developer with a First Class Honours average at
                    Dublin City University.
                </motion.p>

                <motion.p
                    {...textAnimation}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    I specialise in building responsive web applications with
                    React, TypeScript, JavaScript, and Redux Toolkit. I also
                    have experience working with REST APIs and modern UI
                    frameworks such as Material UI and Bootstrap.
                </motion.p>

                <motion.p
                    {...textAnimation}
                    transition={{ duration: 0.6, delay: 0.6 }}
                >
                    Alongside frontend development, I have a strong Computer
                    Science foundation with experience in backend development,
                    databases, systems programming, and Linux. This gives me a
                    broader understanding of the software I build beyond the
                    user interface.
                </motion.p>

                <motion.p
                    {...textAnimation}
                    transition={{ duration: 0.6, delay: 0.8 }}
                >
                    I'm currently looking for frontend developer internship and
                    graduate opportunities where I can contribute to real
                    projects and continue developing my skills.
                </motion.p>

                <motion.h3
                    {...textAnimation}
                    transition={{ duration: 0.6, delay: 0.9 }}
                >
                    Skills
                </motion.h3>

                <div className="skill-groups">
                    {skillGroups.map((group, groupIndex) => (
                        <motion.div
                            className="skill-group"
                            key={group.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{
                                once: true,
                                amount: 0.2,
                            }}
                            transition={{
                                duration: 0.5,
                                delay: groupIndex * 0.1,
                            }}
                        >
                            <h4>{group.title}</h4>

                            <div className="skills">
                                {group.skills.map((skill) => (
                                    <div
                                        className="skill"
                                        key={skill.name}
                                    >
                                        <span>{skill.name}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <motion.div
                className="about-image"
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{
                    once: true,
                    amount: 0.2,
                }}
                transition={{
                    duration: 0.8,
                    delay: 0.3,
                }}
            >
                <img
                    src={aboutPhoto}
                    alt="Serhii Ananiev"
                />
            </motion.div>
        </Container>
    );
}