import { styled } from "styled-components";
import logo from "../assets/images/logo1.svg";
const Logo = () => {
  return (
    <Wrapper>
      <img src={logo} alt="nav logo" className="nav-logo" />
    </Wrapper>
  );
};
const Wrapper = styled.section`
  .nav-logo {
    width: 200px;
  }
`;
export default Logo;
