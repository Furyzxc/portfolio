import { Container } from "./styles";

import { Hero } from "../hero";
import { About } from "../about";
import { Portfolio } from "../portfolio";
import { Contact } from "../contact";

export function Main() {
    return (
        <Container>
            <Hero />
            <About />
            <Portfolio />
            <Contact />
        </Container>
    );
}