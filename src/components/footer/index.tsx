import linkedinIcon from "../../assets/icons/linkedin.png";
import githubIcon from "../../assets/icons/github.svg";

import { Container } from "./styles";

export function Footer() {
  return (
    <Container>
      <p>© {new Date().getFullYear()} Serhii Ananiev</p>

      <div className="social-media">
        <a
          href="https://www.linkedin.com/in/serhii-ananiev-267086195/"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
        >
          <img src={linkedinIcon} alt="" />
        </a>

        <a
          href="https://github.com/furyzxc"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
        >
          <img src={githubIcon} alt="" />
        </a>
      </div>
    </Container>
  );
}