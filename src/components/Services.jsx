import { Link } from "react-router-dom";
import { FaAndroid, FaCode, FaSketch } from "react-icons/fa";
import { styled } from "styled-components";
import {
  Connect,
  Skills,
  Timeline,
  Blog,
  Projects,
  Footer,
} from "../components";

const Services = () => {
  return (
    <Wrapper>
      <div className="section-title">
        <h1>services</h1>
        <div className="underline"></div>
      </div>

      <div className="service-center section-center">
        <article className="service">
          <FaCode />
          <h4>Web development</h4>
          <div className="underline"></div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis,
            eaque dolor! Nam illo nemo sit deserunt quibusdam voluptatibus quod,
            labore fugiat quo sequi tempore omnis. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Omnis, eaque dolor! Nam illo nemo sit
            deserunt quibusdam voluptatibus quod, labore fugiat quo sequi
            tempore omnis.
          </p>
        </article>
        <article className="service">
          <FaSketch />
          <h4>app design</h4>
          <div className="underline"></div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. OmnisLorem
            ipsum dolor sit amet consectetur adipisicing elit. Omnis, eaque
            dolor! Nam illo nemo sit deserunt quibusdam voluptatibus quod,
            labore fugiat quo sequi tempore omnis.,
          </p>
        </article>
        <article className="service">
          <FaAndroid />
          <h4>app design</h4>
          <div className="underline"></div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis,
            eaque dolor! Nam illo nemo sit deserunt quibusdam voluptatibus quod,
            labore fugiat quo sequi tempore omnis.
          </p>
        </article>
      </div>
      <Connect />
      <Skills />
      <Timeline />
      <Projects />
      <Blog />
      <Footer />
    </Wrapper>
  );
};
const Wrapper = styled.section`
  /* z-index: -3; */
  display: grid;
  background: var(--clr-grey-9);
  .service {
    background: var(--clr-white);
    padding: 2rem 1.5rem;
    margin-bottom: 2rem;
    border-radius: var(--radius);
    text-align: center;
    transition: var(--transition);
  }
  .section-title {
    margin: 6rem 0;
  }
  .underline {
    margin-bottom: 3rem;
  }
  .service-icon {
    font-size: 1rem;
    margin-left: 1.5rem;
  }
  .service .underline {
    width: 3rem;
    height: 0.12rem;
    /* margin-bottom: 2rem; */
  }
  .service p {
    transition: var(--transition);
  }
  .service:hover {
    background: var(--clr-primary-5);
    color: var(--clr-white);
  }
  .service:hover p {
    color: var(--white);
  }
  .service:hover .underline {
    background: var(--clr-white);
  }
  @media screen and (min-width: 676px) {
    .service-center {
      display: grid;
      grid-template-columns: 1fr 1fr;
      column-gap: 2rem;
    }
  }
  @media screen and (min-width: 992px) {
    .service-center {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
    }
  }
`;
export default Services;
