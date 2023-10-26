import { styled } from "styled-components";
import image from "../assets/images/hero-img.jpeg";
import { Link } from "react-router-dom";
import socialLinks from "../utils/socialLinks";
import SocialLinks from "../components/SocialLinks";
import { Logo } from "../components";

Link;
const Welcome = () => {
  return (
    <Wrapper>
      <div className="section-center hero-center">
        <article className="hero-info">
          <div className="logo">
            <Logo />
          </div>
          <h1>I'm Patrice</h1>
          <h4>freelance web & mobile designer</h4>
          <Link to="/home" className="btn hero-btn">
            explore
          </Link>

          <SocialLinks />
        </article>
        <article className="hero-img">
          <img src={image} alt="hero-photo" className="hero-photo" />
        </article>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  background: var(--clr-primary-10);
  .section-center {
    width: 90vw;
    margin: 0 auto;
    max-width: 1170px;
  }
  .underline {
    margin-bottom: 1rem;
    margin-left: 0;
  }
  .hero-img {
    display: none;
    position: relative;
  }
  .hero-center {
    min-height: calc(100vh);
    display: grid;
    place-items: center;
  }
  .hero-info h4 {
    color: var(--clr-grey-5);
  }
  .hero-btn {
    margin-top: 1.25rem;
    background: green;
    border: solid 10px var(--clr-primary-10);
    outline: solid 5px red;
  }
  .hero-btn:hover {
    background: green;
    color: white;
  }
  .logo {
    margin-bottom: 8rem;
  }
  @media screen and (min-width: 992px) {
    .hero-img {
      display: block;
    }
    .hero-center {
      grid-template-columns: 1fr 1fr;
    }

    .hero-img::before {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      border: 0.25rem solid var(--clr-primary-5);
      top: 2rem;
      right: -2rem;
      border-radius: var(--radius);
    }
  }
  .hero-photo {
    max-width: 25rem;
    max-height: 30rem;
    object-fit: cover;
    border-radius: var(--radius);
    position: relative;
  }
`;

export default Welcome;
