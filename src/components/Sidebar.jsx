import { FaTimes } from "react-icons/fa";
import { styled } from "styled-components";
import { Link } from "react-router-dom";
import { useHomeContext } from "../pages/Home";
import navLinks from "../utils/navLinks";
import SocialLinks from "./SocialLinks";
import { Logo } from "../components";

const Sidebar = () => {
  const { showSidebar, toggleSidebar } = useHomeContext();

  return (
    <Wrapper>
      <aside className={showSidebar ? "sidebar show-sidebar" : "sidebar "}>
        <div className="nav-header">
          <div>
            <Logo />
          </div>
          <button className="close-btn" id="cose-btn" onClick={toggleSidebar}>
            <FaTimes />
          </button>
        </div>
        <ul className="sidebar-links">
          {navLinks.map((link) => {
            const { id, text, path } = link;
            return (
              <li key={id}>
                <Link to={path} onClick={toggleSidebar}>
                  {text}
                </Link>
              </li>
            );
          })}
        </ul>
        <div className="account-center">
          <Link to="/login" className=" btn" onClick={toggleSidebar}>
            Login
          </Link>
        </div>
        <div className="social-links">
          <SocialLinks />
        </div>
      </aside>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--clr-grey-10);
    z-index: 4;
    transition: var(--transition);
    display: grid;
    grid-template-columns: 1fr;
  }
  .show-sidebar {
    z-index: 99;
    transform: translateX(-100%);
  }
  .nav-header {
    display: flex;
    justify-content: space-between;
    padding: 1rem;
    height: 5rem;
  }

  .sidebar-links {
    text-align: center;
  }
  .sidebar-links a {
    font-size: 2rem;
    text-transform: capitalize;
    transition: var(--transition);
    color: var(--clr-grey-5);
    letter-spacing: var(--pacing);
    display: inline-block;
    margin-bottom: 1.5rem;
  }
  .sidebar-links a:hover {
    color: var(--clr-primary-5);
  }

  .close-btn {
    right: 1rem;
    background: transparent;
    border: transparent;
    font-size: 3rem;
    color: #bb2525;
  }
  .close-btn:hover {
    color: #e66b6b;
  }
  .social-links {
    display: grid;
    place-items: center;
    margin-bottom: 5rem;
  }
  .account-center {
    display: grid;
    place-items: center;
    /* margin-top: 0.1rem; */
    font-size: 5rem;
  }
  @media screen and (min-width: 768px) {
    transform: translateX(-100%);
  }
`;
export default Sidebar;
