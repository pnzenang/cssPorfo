import { styled } from "styled-components";

const Skills = () => {
  return (
    <Wrapper>
      <section className="section skills">
        <div className="section-title">
          <h1>skills</h1>
          <div className="underline"></div>
        </div>

        <div className="section-center skills-center">
          <article>
            <h3>back end</h3>
            <div className="skill">
              <p>node</p>
              <div className="skill-container">
                <div className="skill-value">
                  <p className="skill-text">50%</p>
                </div>
              </div>
            </div>
            <div className="skill">
              <p>PHP</p>
              <div className="skill-container">
                <div className="skill-value value-70">
                  <p className="skill-text skill-text-70">70%</p>
                </div>
              </div>
            </div>
            <div className="skill">
              <p>Python</p>
              <div className="skill-container">
                <div className="skill-value value-80">
                  <p className="skill-text skill-text-80">80%</p>
                </div>
              </div>
            </div>
          </article>
          <article>
            <h3>front end</h3>
            <div className="skill">
              <p>HTML/CSS</p>
              <div className="skill-container">
                <div className="skill-value">
                  <p className="skill-text">50%</p>
                </div>
              </div>
            </div>
            <div className="skill">
              <p>Javascript</p>
              <div className="skill-container">
                <div className="skill-value value-70">
                  <p className="skill-text skill-text-70">70%</p>
                </div>
              </div>
            </div>
            <div className="skill">
              <p>React</p>
              <div className="skill-container">
                <div className="skill-value value-80">
                  <p className="skill-text skill-text-80">80%</p>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  @media screen and (min-width: 768px) {
    .skills-center {
      display: grid;
      grid-template-columns: 1fr 1fr;
      column-gap: 2rem;
    }
  }
  .skills {
    background: var(--clr-primary-9);
    padding: 10px;
  }
  .skills h3 {
    margin: 1.5rem 0;
    color: var(--clr-primary-1);
  }
  .skill {
    margin-bottom: 1.25rem;
  }
  .skill p {
    margin-bottom: 0.5rem;
    text-transform: capitalize;
    color: var(--clr-primary-1);
  }
  .skill-container {
    background: var(--clr-white);
    height: 1rem;
    width: 100%;
    border-radius: var(--radius);
    position: relative;
  }
  .skill-value {
    position: absolute;
    top: 0;
    left: 0;
    background: var(--clr-primary-5);
    height: 100%;
    width: 50%;
    border-radius: var(--radius);
  }
  .value-70 {
    width: 70%;
  }
  .value-80 {
    width: 80%;
  }
  .skill-text {
    position: absolute;
    top: -2rem;
    left: 100%;
    transform: translateX(-50%);
  }
`;
export default Skills;
