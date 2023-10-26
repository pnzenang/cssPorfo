import { styled } from "styled-components";

const Timeline = () => {
  return (
    <Wrapper>
      <section className="section timeline">
        <div className="section-title">
          <h1>timeline</h1>
          <div className="underline"></div>
        </div>

        <div className="section-center timeline-center">
          <article className="timeline-item">
            <h4>2020</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Provident, voluptatem in. Dolores sequi temporibus soluta aut
              quibusdam totam quo quidem quas quasi debitis maxime officiis in
              amet veritatis alias, natus illo blanditiis porro cupiditate
            </p>
            <span className="number">1</span>
            <span></span>
          </article>
          <article className="timeline-item">
            <h4>2019</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Provident, voluptatem in. Dolores sequi temporibus soluta aut
              quibusdam totam quo quidem quas quasi debitis maxime officiis in
              amet veritatis alias, natus illo blanditiis porro cupiditate
            </p>
            <span className="number">2</span>
            <span></span>
          </article>
          <article className="timeline-item">
            <h4>2018</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Provident, voluptatem in. Dolores sequi temporibus soluta aut
              quibusdam totam quo quidem quas quasi debitis maxime officiis in
              amet veritatis alias, natus illo blanditiis porro cupiditate
            </p>
            <span className="number">2</span>
            <span></span>
          </article>
          <article className="timeline-item">
            <h4>2017</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Provident, voluptatem in. Dolores sequi temporibus soluta aut
              quibusdam totam quo quidem quas quasi debitis maxime officiis in
              amet veritatis alias, natus illo blanditiis porro cupiditate
            </p>
            <span className="number">3</span>
            <span></span>
          </article>
          <article className="timeline-item">
            <h4>2016</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Provident, voluptatem in. Dolores sequi temporibus soluta aut
              quibusdam totam quo quidem quas quasi debitis maxime officiis in
              amet veritatis alias, natus illo blanditiis porro cupiditate
            </p>
            <span className="number">4</span>
            <span></span>
          </article>
          <article className="timeline-item">
            <h4>2015</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Provident, voluptatem in. Dolores sequi temporibus soluta aut
              quibusdam totam quo quidem quas quasi debitis maxime officiis in
              amet veritatis alias, natus illo blanditiis porro cupiditate
            </p>
            <span className="number">5</span>
            <span></span>
          </article>
        </div>
      </section>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  .timeline-center {
    width: 90vw;
    max-width: 40rem;
  }
  .timeline-item {
    border-top: 2px dashed var(--clr-primary-5);
    margin: 0;
    padding: 4rem 2rem;
    position: relative;
  }
  .timeline p {
    margin-bottom: 0;
  }
  .timeline-item:nth-child(even) {
    border-left: 2px dashed var(--clr-primary-5);
    border-top-left-radius: 2rem;
    border-bottom-left-radius: 2rem;
    margin-right: 2rem;
    padding-right: 0;
  }
  .timeline-item:nth-child(odd) {
    border-right: 2px dashed var(--clr-primary-5);
    border-top-right-radius: 2rem;
    border-bottom-right-radius: 2rem;
    margin-left: 2rem;
    padding-left: 0;
  }
  .timeline-item:first-child {
    border-top: 0;
    border-top-right-radius: 0;
  }
  .timeline-item:last-child {
    border-top-left-radius: (--radius);
    border-bottom-left-radius: 0;
  }

  .number {
    position: absolute;
    top: 50%;
    transform: translate() (-50%, -50%);
    margin-bottom: 0;
    background: var(--clr-primary-5);
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    display: grid;
    place-items: center;
    color: var(--clr-primary-1);
    font-weight: bold;
  }
  .timeline-item:nth-child(even) .number {
    left: -1rem;
    transform: translateY(-50%);
  }
  .timeline-item:nth-child(odd) .number {
    right: -1rem;
    transform: translateY(-50%);
  }
`;
export default Timeline;
