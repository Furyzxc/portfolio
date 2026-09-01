import { motion } from "motion/react";

import emailIcon from "../../assets/icons/email-icon.svg";
import phoneIcon from "../../assets/icons/phone-icon.svg";

import { Container } from "./styles";

const contactAnimation = {
    initial: {
        opacity: 0,
        y: 30,
    },
    whileInView: {
        opacity: 1,
        y: 0,
    },
    viewport: {
        once: true,
        amount: 0.2,
    },
    transition: {
        duration: 0.6,
    },
};

export function Contact() {
    return (
        <Container id="contact">
            <motion.header {...contactAnimation}>
                <h2>Contact Me</h2>

                <p>
                    If you saw my potential or want to talk to me, don't hesitate to
                    send me a message.
                </p>
            </motion.header>

            <div className="contacts">
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <img src={emailIcon} alt="" />

                    <a href="mailto:sergejananev48@gmail.com">
                        sergejananev48@gmail.com
                    </a>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    <img src={phoneIcon} alt="" />

                    <a href="tel:+353877562265">+353 87 756 22 65</a>
                </motion.div>
            </div>
        </Container>
    );
}