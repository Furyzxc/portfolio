import type { ISourceOptions } from "@tsparticles/engine";

import bootstrapIcon from "../../assets/bootstrap-icon.svg";

export const particlesOptions: ISourceOptions = {
    fullScreen: {
        enable: false,
    },

    particles: {
        number: {
            value: 80,
            density: {
                enable: true,
                width: 800,
                height: 800,
            },
        },

        color: {
            value: "#ffffff",
        },

        links: {
            enable: true,
            distance: 150,
            color: "#ffffff",
            opacity: 0.4,
            width: 1,
        },

        move: {
            enable: true,
            speed: 2,
            direction: "none",
            random: false,
            straight: false,
            outModes: {
                default: "bounce",
            },
        },

        opacity: {
            value: 0.5,
        },

        size: {
            value: {
                min: 1,
                max: 5,
            },
        },

        shape: {
            type: "image",
            options: {
                image: [
                    {
                        src: bootstrapIcon,
                        width: 20,
                        height: 20,
                    },
                ],
            },
        },
    },

    interactivity: {
        events: {
            onHover: {
                enable: true,
                mode: "repulse",
            },

            onClick: {
                enable: true,
                mode: "push",
            },

            resize: {
                enable: true,
            },
        },

        modes: {
            repulse: {
                distance: 100,
                duration: 0.4,
            },

            push: {
                quantity: 4,
            },

            bubble: {
                distance: 200,
                size: 40,
                duration: 2,
                opacity: 0.8,
            },
        },
    },

    detectRetina: true,
};