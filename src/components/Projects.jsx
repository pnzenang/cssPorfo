import { Link } from "react-router-dom";
import { styled } from "styled-components";
import image1 from "../assets/images/project-1.jpeg";
import image2 from "../assets/images/project-2.jpeg";
import image3 from "../assets/images/project-3.jpeg";
import image4 from "../assets/images/project-4.jpeg";

const Projects = () => {
  return (
    <Wrapper>
      <section className="section projects">
        <div className="section-title about-title">
          <h1>latest works</h1>
          <div className="underline"></div>
          <p className="project-text">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur
            velit modi aspernatur maiores facilis, vero sapiente quo culpa
            dignissimos quod eos nobis voluptate voluptates cupiditate quae cum
            nisi consectetur ipsam aliquam voluptatum placeat fugiat. Quaerat?
          </p>
        </div>
        <div className="section-center projects-center">
          <Link to="/project" className="project-1">
            <article className="project">
              <img src={image1} alt="single project" className="project-img" />
              <div className="project-info">
                <h4>project title</h4>
                <p>client name</p>
              </div>
            </article>
          </Link>
          <Link to="/project" className="project-2">
            <article className="project">
              <img src={image2} alt="single project" className="project-img" />
              <div className="project-info">
                <h4>project title</h4>
                <p>client name</p>
              </div>
            </article>
          </Link>
          <Link to="/project" className="project-3">
            <article className="project">
              <img src={image3} alt="single project" className="project-img" />
              <div className="project-info">
                <h4>project title</h4>
                <p>client name</p>
              </div>
            </article>
          </Link>
          <Link to="/project" className="project-4">
            <article className="project">
              <img src={image4} alt="single project" className="project-img" />
              <div className="project-info">
                <h4>project title</h4>
                <p>client name</p>
              </div>
            </article>
          </Link>
        </div>
      </section>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  .section-title {
    text-align: center;
  }
  .underline {
    margin: 1rem auto;
  }

  .project-text {
    width: 85vw;
    max-width: 30rem;
    margin: 0 auto;
  }
  .project {
    position: relative;
    background: var(--clr-primary-5);
    border-radius: var(--radius);
    margin-bottom: 2rem;
  }
  .project-info {
    text-align: center;
    color: var(--clr-white);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: var(--transition);
    opacity: 0;
  }
  .project-info p {
    text-transform: capitalize;
    color: var(--clr-white);
  }
  .project:hover .project-info {
    opacity: 1;
  }
  .project-img {
    transition: var(--transition);
    border-radius: var(--radius);
    height: 15rem;
    object-fit: cover;
  }
  .project:hover .project-img {
    opacity: 0.1;
  }
  .project::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 0.25rem solid var(--clr-white);
    border-radius: var(--radius);
    transition: var(--transition);
    opacity: 0;
  }
  .project:hover::after {
    opacity: 1;
    transform: scale(0.8);
  }
  @media screen and (min-width: 676px) {
    .projects-center {
      display: grid;
      grid-template-columns: 1fr 1fr;
      column-gap: 2rem;
    }
  }
  @media screen and (min-width: 992px) {
    .projects-center {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }
  @media screen and (min-width: 1170px) {
    .projects-center {
      grid-template-columns: 1fr 200px 200px;
    }
    .project-4 {
      grid-column: 1/4;
      grid-row: 1/2;
    }
  }
`;
export default Projects;
