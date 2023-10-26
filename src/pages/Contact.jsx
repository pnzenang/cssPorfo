import { Link } from "react-router-dom";
import { styled } from "styled-components";
import { Footer } from "../components";

const Contact = () => {
  return (
    <Wrapper>
      <section className="section single-page">
        <div className="section-title">
          <h1>contact us</h1>
          <div className="underline"></div>
        </div>
      </section>
      <Footer className="footer" />
    </Wrapper>
  );
};
const Wrapper = styled.section`
  height: 92vh;
  .contact-center {
  }
  background: var(--clr-grey-9);
  display: grid;
  grid-template-rows: 1fr auto;
  .footer {
  }
`;

export default Contact;
