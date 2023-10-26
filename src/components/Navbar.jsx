import { styled } from "styled-components";
import logo from "../assets/images/logo1.svg";
import { FaBars } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import { useHomeContext } from "../pages/Home";
import Logo from "./Logo";
Link;
const Navbar = () => {
  const { toggleSidebar } = useHomeContext();
  return (
    <Wrapper>
      <div className="nav-center">
        <div className="nav-header">
          <Logo />
          <button className="nav-btn" onClick={toggleSidebar}>
            <FaBars />
          </button>
        </div>
        <ul className="nav-links">
          <li>
            <Link to=".">about</Link>
          </li>
          <li>
            <Link to="services">services</Link>
          </li>
          <li>
            <Link to="contact">contact</Link>
          </li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>

        <div className="login-btn">
          <Link to="/login" className=" btn">
            Login
          </Link>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  background: white;
  position: sticky;
  top: 0;
  z-index: 4;
  height: 7rem;
  padding: 1rem;
  display: grid;
  align-items: center;
  transition: var(--transition);

  .fixed-nav {
    position: sticky;
    top: 0;
    left: 0;
    width: 100%;
    background: var(--cl-white);
    z-index: 2;
    box-shadow: var(--light-shadow);
  }
  .nav-center {
    width: 100%;
    max-width: 1170px;
    margin: 0 auto;
    display: grid;
  }
  .nav-header {
    display: grid;
    grid-template-columns: 1fr auto;
    align-items: center;
  }
  .nav-links {
    display: none;
  }
  .nav-btn {
    background: transparent;
    border-color: transparent;
    color: var(--clr-primary-5);
    font-size: 2rem;
    cursor: pointer;
    justify-self: end;
  }
  .login-btn {
    display: none;
  }
  @media screen and (min-width: 768px) {
    .nav-btn {
      display: none;
    }
    .nav-links {
      display: flex;
      /* grid-template-columns: repeat(5, 1fr); */
      /* justify-items: */
      column-gap: 1rem;
      justify-self: end;
    }
    .nav-links a {
      text-transform: capitalize;
      color: var(--clr-grey-1);
      font-weight: bold;
      letter-spacing: var(--spacing);
      transition: var(--transition);
      margin: 0.1rem;
    }
    .nav-links a:hover {
      color: var(--clr-primary-5);
    }
    .nav-center {
      display: grid;
      grid-template-columns: auto 1fr auto;
      align-items: center;
    }
    .nav-links {
    }
    .btn {
      /* margin: 3rem; */
    }
    .login-btn {
      display: block;
    }
  }
`;
export default Navbar;
