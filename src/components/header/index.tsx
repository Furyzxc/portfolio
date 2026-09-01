import { useState } from "react";
import { Container } from "./styles";
import CV from "../../assets/Serhii_Ananiev_CS.pdf";

export function Header() {
  const [isActive, setIsActive] = useState(false);

  const toggleTheme = () => {
    document.documentElement.classList.toggle("light");
  };

  const closeMenu = () => {
    setIsActive(false);
  };

  const toggleMenu = () => {
    setIsActive((prev) => !prev);
  };

  return (
    <Container className="header-fixed">
      <input
        className="container_toggle"
        type="checkbox"
        id="switch"
        name="mode"
        onChange={toggleTheme}
      />

      <label htmlFor="switch">Toggle</label>

      <nav className={isActive ? "active" : ""}>
        <a href="#home" onClick={closeMenu}>
          Home
        </a>

        <a href="#about" onClick={closeMenu}>
          About Me
        </a>

        <a href="#portfolio" onClick={closeMenu}>
          Portfolio
        </a>

        <a href="#contact" onClick={closeMenu}>
          Contact
        </a>

        <a
          href={CV}
          download
          className="button"
          onClick={closeMenu}
        >
          CV
        </a>
      </nav>

      <button
        type="button"
        className={isActive ? "menu active" : "menu"}
        aria-expanded={isActive}
        aria-label={isActive ? "Close menu" : "Open menu"}
        onClick={toggleMenu}
      />
    </Container>
  );
}
