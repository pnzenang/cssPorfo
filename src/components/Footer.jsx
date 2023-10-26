import { styled } from "styled-components";
import socialLinks from "../utils/socialLinks";

const Footer = () => {
  return (
    <Wrapper>
      <footer className="footer">
        <ul className="social-icons">
          {socialLinks.map((link) => {
            const { id, site, icon } = link;
            return (
              <li key={id}>
                <a href={site} className="social-icon">
                  {icon}
                </a>
              </li>
            );
          })}
        </ul>
        <p>
          &copy; <span> {new Date().getFullYear()}</span> Hago Companies LLC.
          All rights reserved
        </p>
      </footer>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  .footer {
    background: #222;
    display: grid;
    place-items: center;
    padding: 3rem;
  }
  .footer .social-icons {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    place-items: center;
    width: 20rem;
  }
  .footer .social-icon {
    color: var(--clr-primary-5);
    font-size: 1.5rem;
  }
  .footer .social-icon:hover {
    color: var(--clr-primary-10);
  }
`;
export default Footer;
