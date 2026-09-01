import styled from "styled-components";

export const Container = styled.section`
  margin-top: 20rem;

  header {
    text-align: center;

    h2 {
      margin: 0;
      font-size: 4rem;
    }

    p {
      margin-top: 1.5rem;
      color: var(--green);
      font-weight: 500;
      line-height: 1.6;
    }
  }

  .contacts {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    margin-top: 8rem;

    > div {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 2rem;

      width: 50%;
      max-width: 40rem;
      padding: 1.6rem 2.8rem;

      background-color: var(--green);
      border-radius: 1.4rem;

      transition:
        background-color 0.25s ease,
        transform 0.25s ease;

      img {
        flex-shrink: 0;
        width: 4rem;
        height: 4rem;
        object-fit: contain;
      }

      a {
        color: var(--black);
        font-weight: 500;
        transition: color 0.25s ease;
      }

      &:hover {
        background-color: var(--pink);
        transform: translateY(-3px);

        a {
          color: #fff;
        }
      }
    }
  }

  @media (max-width: 960px) {
    margin-top: 15rem;

    .contacts {
      flex-direction: column;
      margin-top: 6rem;

      > div {
        width: 100%;
        max-width: 40rem;
      }
    }
  }

  @media (max-width: 600px) {
    margin-top: 10rem;

    header {
      h2 {
        font-size: 3.5rem;
      }

      p {
        font-size: 1.5rem;
      }
    }

    .contacts {
      gap: 1.5rem;
      margin-top: 5rem;

      > div {
        flex-direction: column;
        width: 100%;
        padding: 2rem;

        img {
          width: 3.5rem;
          height: 3.5rem;
        }

        a {
          font-size: 1.5rem;
          text-align: center;
        }
      }
    }
  }

  @media (max-width: 480px) {
    margin-top: 8rem;

    header {
      h2 {
        font-size: 3rem;
      }
    }

    .contacts {
      margin-top: 4rem;

      > div {
        padding: 1.8rem 1.5rem;
      }
    }
  }
`;