import Particles from "@tsparticles/react";

import { Container } from "./styles";
import { particlesOptions } from "./particles";

import { Hero } from "../hero";
import { About } from "../about";
import { Portfolio } from "../portfolio";
import { Contact } from "../contact";

export function Main() {
    return (
        <Container>
            <Particles
                id="tsparticles"
                options={particlesOptions}
            />

            <Hero />
            <About />
            <Portfolio />
            <Contact />
        </Container>
    );
}