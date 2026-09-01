import { motion } from "motion/react";

import Illustration from "../../assets/images/illustration.svg";
import { Container } from "./styles";

export function Hero() {
    return (
        <Container id="home">
            <div className="hero-text">
                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    Hi 👋, I'm
                </motion.p>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    Serhii Ananiev
                </motion.h1>

                <motion.h3
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    Frontend Developer & CS Student
                </motion.h3>

                <motion.p
                    className="small-resume"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                >
                    I build clean, responsive web interfaces with React and JavaScript —
                    and I'm always looking for the next problem worth solving.
                </motion.p>

                <motion.a
                    href="#contact"
                    className="button"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                >
                    Contact
                </motion.a>
            </div>

            <div className="hero-image">
                <motion.img
                    src={Illustration}
                    alt="Developer illustration"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 1 }}
                />
            </div>
        </Container>
    );
}