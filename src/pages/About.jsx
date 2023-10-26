import { Link } from "react-router-dom";
import { styled } from "styled-components";
import image from "../assets/images/about-img.jpeg";
import { Footer } from "../components";

const About = () => {
  return (
    <Wrapper>
      <section className="section ">
        <div className="section-title">
          <h1>About us</h1>
          <div className="underline"></div>
        </div>
        <div className="section-center about-center">
          <article className="about-img">
            <img src={image} alt="about-photo" className="about-photo" />
          </article>
          <article className="about-info">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque
              accusantium iure ab maxime numquam deleniti doloremque! Eius,
              atque culpa obcaecati adipisci nisi hic eum nobis sequi ipsa
              tempora corporis at quo vel eos quod facilis sapiente maiores?
              Ducimus quia hic rerum perspiciatis nisi nobis porro. Odit illum
              accusantium eius laudantium.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
              delectus exercitationem commodi doloribus soluta corrupti. Sit
              obcaecati blanditiis culpa, eius consectetur soluta dignissimos
              dicta, fugiat, laboriosam rerum omnis sint aliquid. Hic ut sit
              consectetur pariatur culpa, eius id officia nihil voluptatum
              cumque sunt dolorem maxime commodi modi quo reiciendis maiores,
              reprehenderit autem doloribus, quibusdam aspernatur vero est
              obcaecati? Aspernatur, exercitationem.
            </p>
            <Link to="/about" className="btn about-btn">
              about me
            </Link>
          </article>
        </div>
      </section>

      <Footer />
    </Wrapper>
  );
};
const Wrapper = styled.section`
  background: var(--clr-grey-9);

  .about-photo {
    max-width: 25rem;
    max-height: 25rem;
    object-fit: cover;
    border-radius: var(--radius);
    position: relative;
  }

  .about-center {
    /* min-height: calc(100vh - 1rem); */
    display: grid;
    place-items: center;
    gap: 3rem 2rem;
  }
  .about-img {
    justify-self: center;
  }
  .btn {
    margin-bottom: 1.5rem;
  }
  .section-title {
    margin-bottom: 4rem;
  }
  @media screen and (min-width: 992px) {
    .about-center {
      grid-template-columns: 1fr 1fr;
      /* align-items: center; */
    }

    .about-img::before {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      border: 0.25rem solid var(--clr-primary-5);
      top: 2rem;
      left: -2rem;
      border-radius: var(--radius);
    }
    .about-img {
      position: relative;
    }

    .about-info {
      align-self: center;
    }
    .section-center {
      width: 90vw;
      max-width: 1170px;
    }
  }
`;
export default About;
