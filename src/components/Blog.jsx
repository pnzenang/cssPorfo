import { styled } from "styled-components";
import image1 from "../assets/images/project-1.jpeg";
import image2 from "../assets/images/project-2.jpeg";
import image3 from "../assets/images/project-3.jpeg";
import image4 from "../assets/images/project-4.jpeg";
import heroImage from "../assets/images/hero-img-small.jpeg";
const Blog = () => {
  return (
    <Wrapper>
      <section className="section blog">
        <div className="section-title">
          <h1>blog</h1>
          <div className="underline"></div>
        </div>

        <div className="section-center blog-center">
          <div className="card">
            <div className="card-side card-front">
              <img src={image1} alt="" />
              <div className="card-info">
                <h4>article title</h4>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Facere vitae, ipsa nobis molestiae mollitia voluptates
                  reprehenderit nesciunt eos, provident voluptatibus a quia
                </p>

                <div className="card-footer">
                  <img src={heroImage} alt="author image" />
                  <p>7 min read</p>
                </div>
              </div>
            </div>
            <div className="card-side card-back">
              <button className="btn"> read more</button>
            </div>
          </div>
          <div className="card">
            <div className="card-side card-front">
              <img src={image2} alt="" />
              <div className="card-info">
                <h4>article title</h4>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Facere vitae, ipsa nobis molestiae mollitia voluptates
                  reprehenderit nesciunt eos, provident voluptatibus a quia
                </p>

                <div className="card-footer">
                  <img src={heroImage} alt="author image" />
                  <p>7 min read</p>
                </div>
              </div>
            </div>
            <div className="card-side card-back">
              <button className="btn"> read more</button>
            </div>
          </div>
          <div className="card">
            <div className="card-side card-front">
              <img src={image3} alt="" />
              <div className="card-info">
                <h4>article title</h4>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Facere vitae, ipsa nobis molestiae mollitia voluptates
                  reprehenderit nesciunt eos, provident voluptatibus a quia
                </p>

                <div className="card-footer">
                  <img src={heroImage} alt="author image" />
                  <p>7 min read</p>
                </div>
              </div>
            </div>
            <div className="card-side card-back">
              <button className="btn"> read more</button>
            </div>
          </div>
          <div className="card">
            <div className="card-side card-front">
              <img src={image4} alt="" />
              <div className="card-info">
                <h4>article 4 title</h4>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Facere vitae, ipsa nobis molestiae mollitia voluptates
                  reprehenderit nesciunt eos, provident voluptatibus a quia
                </p>

                <div className="card-footer">
                  <img src={heroImage} alt="author image" />
                  <p>7 min read</p>
                </div>
              </div>
            </div>
            <div className="card-side card-back">
              <button className="btn"> read more</button>
            </div>
          </div>
        </div>
      </section>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  .blog {
    background: var(--clr-grey-10);
  }
  .card {
    -webkit-perspective: 1500px;
    perspective: 1500px;
    height: 27rem;
    position: relative;
  }
  .card-side {
    -webkit-transition: all 2s linear;
    transition: all 2s linear;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    -webkit-transform: translate3d(0, 0, 0);
    visibility: visible;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    border-radius: var(--radius);
  }
  .card-front {
    background: var(--clr-white);
  }
  .card-back {
    -webkit-transform: rotateY(180deg);
    transform: rotateY(180deg);
    background: var(--clr-primary-10);
    display: grid;
    place-items: center;
  }
  .card:hover .card-front {
    -webkit-transform: rotateY(-180deg);
    transform: rotateY(-180deg);
  }
  .card:hover .card-back {
    -webkit-transform: rotateY(0);
    transform: rotateY(0);
  }
  .card-info {
    padding: 1rem 1.5rem;
  }
  /* rest of the styles */
  .card-front img {
    height: 13rem;
    -o-object-fit: cover;
    object-fit: cover;
    border-top-left-radius: var(--radius);
    border-top-right-radius: var(--radius);
  }
  .card-footer {
    display: grid;
    grid-template-columns: auto 1fr;
    -webkit-box-align: center;
    align-items: center;
  }
  .card-footer img {
    width: 2rem;
    height: 2rem;
    -o-object-fit: cover;
    object-fit: cover;
    border-radius: 50%;
  }
  .card-footer p {
    margin-bottom: 0;
    text-transform: uppercase;
    justify-self: end;
    color: var(--clr-primary-5);
    font-size: 0.85rem;
  }
  .card-info {
    padding: 1rem 1.5rem;
  }
  .blog-center {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(330px, 1fr));
    gap: 3rem 1rem;
  }
`;
export default Blog;
