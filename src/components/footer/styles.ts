import styled from "styled-components";

export const Container = styled.footer`
display: flex;
align-items: center;
justify-content: space-between;

margin-top: 15rem;
padding: 3rem 15rem;

background-color: #2b2b2b;

p {
    margin: 0;
    letter-spacing: 0.1rem;
}

.social-media {
    display: flex;
    align-items: center;
    gap: 1.5rem;

    a {
        display: flex;
        align-items: center;
        justify-content: center;

        transition: transform 0.25s ease;

    &:hover {
            transform: translateY(-3px);
        }
    }

    img {
        width: 3rem;
        height: 3rem;
        object-fit: contain;
    }
}

@media (max-width: 1000px) {
    padding: 3rem 5rem;
}

@media (max-width: 800px) {
    flex-direction: column;
    gap: 2rem;

    padding: 4rem 2rem;

    text-align: center;
}

@media (max-width: 600px) {
    margin-top: 10rem;

    padding: 3rem 1.5rem;

    p {
        font-size: 1.3rem;
    }

.social-media {
        gap: 1.2rem;

        img {
            width: 2.8rem;
            height: 2.8rem;
        }
    }
}
`;
