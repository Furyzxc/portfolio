import styled from "styled-components";

export const Container = styled.section`
margin-top: 12rem;

display: grid;
grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
gap: 6rem;

.about-text {
    min-width: 0;
}

h2 {
    display: inline-block;
    margin: 0 0 2rem;
    border-bottom: 0.2rem solid var(--blue);
    font-size: 3.2rem;
}

p {
    margin: 0 0 2rem;
    font-size: 1.8rem;
    line-height: 1.7;
    letter-spacing: 0.03rem;
    font-weight: 500;
}

h3 {
    margin: 3.5rem 0 2rem;
    color: var(--green);
    font-size: 2.2rem;
}

.skill-groups {
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
}

.skill-group {
    h4 {
        margin: 0 0 1.2rem;
        color: var(--blue);
        font-size: 1.7rem;
    }
}

.skills {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
}

.skill {
    display: inline-flex;
    align-items: center;
    gap: 0.8rem;

    padding: 0.8rem 1.2rem;

    background-color: var(--black-light);
    border: 1px solid rgba(148, 163, 184, 0.15);
    border-radius: 0.8rem;

    font-size: 1.4rem;
    font-weight: 500;

    transition:
        transform 0.25s ease,
    border-color 0.25s ease,
    background-color 0.25s ease;

    img {
        width: 2rem;
        height: 2rem;
        object-fit: contain;
    }

&:hover {
        transform: translateY(-2px);
        border-color: var(--green);
    }
}

.about-image {
    display: flex;
    align-items: center;
    justify-content: center;

    img {
        display: block;
        width: 100%;
        max-width: 500px;
        height: 600px;
        object-fit: cover;

        filter: grayscale(1);
        transition: filter 0.5s ease;

    &:hover {
            filter: grayscale(0);
        }
    }
}

@media (max-width: 960px) {
    display: block;
    text-align: center;

.about-text {
        max-width: 800px;
        margin: 0 auto;
    }

.skills {
        justify-content: center;
    }

.about-image {
        margin-top: 5rem;

        img {
            max-width: 450px;
        }
    }
}

@media (max-width: 600px) {
    margin-top: 8rem;

    h2 {
        font-size: 3rem;
    }

    p {
        font-size: 1.6rem;
    }

    h3 {
        font-size: 2rem;
    }

.skill-groups {
        gap: 2rem;
    }

.skill-group h4 {
        font-size: 1.6rem;
    }

.skill {
        padding: 0.7rem 1rem;
        font-size: 1.3rem;

        img {
            width: 1.8rem;
            height: 1.8rem;
        }
    }

.about-image {
        margin-top: 4rem;

        img {
            height: auto;
            max-height: 500px;
        }
    }
}

@media (max-width: 480px) {
    margin-top: 6rem;

.about-image {
        margin-top: 3rem;

        img {
            max-width: 100%;
        }
    }

.skills {
        gap: 0.8rem;
    }

.skill {
        font-size: 1.2rem;
    }
}
`;
