import { styled } from "styled-components";
import video from "../assets/videos/connect.mp4";
import image from "../assets/images/project-1.jpeg";
import { Link } from "react-router-dom";

const Connect = () => {
  return (
    <Wrapper>
      <section className="connect">
        <video
          controls
          autoPlay
          muted
          loop
          className="video-container"
          poster={image}
        >
          <source src={video} type="video/mp4" />
          Sorry, your browser does not support embedded videos
        </video>
        <div className="video-banner">
          <div className="section-title">
            <h2>Let's get in touch</h2>
            <div className="underline"></div>
          </div>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum quod
            magnam eos alias sunt dolores incidunt quam blanditiis pariatur sed
            iste ut veritatis dolore dignissimos unde maiores voluptate,
          </p>
          <Link to="/contact" className="btn">
            {" "}
            contact us
          </Link>
        </div>
      </section>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  .connect {
    min-height: 40vh;
    position: relative;
    padding: 2rem 0;
    margin: 5rem 0;
    z-index: 2;
    clip-path: polygon(50% 0, 100% 10%, 100% 90%, 50% 100%, 0 90%, 0 10%);
  }
  .video-container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -1;
  }
  .connect::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    /* background: var(--clr-white); */
    background: rgba(0, 0, 0, 0.6);
    opacity: 0.7;
    z-index: -1;
  }
  .connect {
    display: grid;
    place-items: center;
  }
  .video-banner .section-title {
    margin-bottom: 2rem;
  }
  .video-banner {
    position: relative;
    background: var(--clr-primary-10);
    padding: 3rem 5rem 12rem 5rem;
    text-align: center;
    margin: 5rem 0 2rem;
    max-width: 676px;
    clip-path: polygon(
      0% 0%,
      100% 0%,
      100% 75%,
      75% 75%,
      75% 100%,
      57% 75%,
      0% 75%
    );
  }
  .section-title {
    margin: 2rem 0;
  }
`;
export default Connect;
