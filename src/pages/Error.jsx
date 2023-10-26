import { Link, useRouteError } from "react-router-dom";
import { styled } from "styled-components";

const Error = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <Wrapper>
      <h2>Error page</h2>
      <Link to="/">Back to home</Link>;
    </Wrapper>
  );
};
const Wrapper = styled.section``;
export default Error;
