import { styled } from "styled-components";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";
import { Navbar } from "../components";
import Pdf from "../documents/Presentation2.pdf";
import { createContext, useContext, useState } from "react";

const HomeContext = createContext();

const Home = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };
  return (
    <HomeContext.Provider value={{ showSidebar, toggleSidebar }}>
      <Wrapper>
        <div className="debut">
          <h2>call us</h2>
          <a href={Pdf}>Download</a>
        </div>
        <Navbar />
        <Sidebar />
        <Outlet />
      </Wrapper>
    </HomeContext.Provider>
  );
};
const Wrapper = styled.section`
  .debut {
    background: red;
  }
`;
export const useHomeContext = () => useContext(HomeContext);
export default Home;
