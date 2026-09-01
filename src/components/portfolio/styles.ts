import styled from "styled-components";

export const Container = styled.section`
margin-top: 15rem;

h2 {
    margin-bottom: 8rem;
    font-size: 4rem;
    text-align: center;
}

.projects {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 2rem;
    padding: 1rem;
}

.project {
    display: flex;
    flex-direction: column;
    min-height: 100%;
    padding: 2rem 1.8rem;

    color: #fff;
    background-color: #2b2b2b;
    border-radius: 1.2rem;

    transition:
        transform 0.25s ease,
    background-color 0.25s ease;

&:hover {
        transform: translateY(-5px);
        background-color: var(--pink);
    }

    header {
        display: flex;
        align-items: center;
        justify-content: space-between;

        margin-bottom: 3.6rem;

        color: var(--blue);

    .project-links {
            display: flex;
            align-items: center;
            gap: 1rem;
        }

    .project-links a {
            display: flex;
            align-items: center;
            justify-content: center;
        }

    .project-links img {
            width: 2.6rem;
            height: 2.6rem;

            transition: transform 0.25s ease;
        }

    .project-links a:hover img {
            transform: scale(1.1);
        }
    }

.body {
        flex: 1;
        display: flex;
        flex-direction: column;

        h3 {
            margin: 0 0 2rem;
            font-size: 2rem;
        }

        p {
            margin: 0;
            line-height: 1.6;
            letter-spacing: 0.08rem;
        }

    .live-link {
            margin-top: auto;
            padding-top: 3rem;

            color: #fff;
            text-decoration: underline;
            text-underline-offset: 0.3rem;

            transition: color 0.25s ease;

        &:hover {
                color: var(--green);
            }
        }
    }

    footer {
        margin-top: 3rem;

    .tech-list {
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            gap: 1.5rem;

            margin: 0;
            padding: 0;

            font-size: 1.4rem;
            opacity: 0.7;

            list-style: none;
        }
    }
}

@media (max-width: 960px) {
.projects {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }
}

@media (max-width: 740px) {
    margin-top: 10rem;

    h2 {
        margin-bottom: 5rem;
        font-size: 3.5rem;
    }

.projects {
        grid-template-columns: 1fr;
        padding: 0;
    }
}

@media (max-width: 480px) {
    h2 {
        font-size: 3rem;
    }

.project {
        padding: 1.8rem 1.6rem;

        header {
            margin-bottom: 2.8rem;
        }

    .body {
            h3 {
                font-size: 1.8rem;
            }

            p {
                font-size: 1.5rem;
            }

        .live-link {
                padding-top: 2.5rem;
            }
        }

        footer {
            margin-top: 2.5rem;

        .tech-list {
                gap: 1rem;
                font-size: 1.3rem;
            }
        }
    }
}
`;