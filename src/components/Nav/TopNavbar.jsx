import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link as LinkScroll } from "react-scroll";
// Components
import Sidebar from "../Nav/Sidebar";
import Backdrop from "../Elements/Backdrop";
// Assets
import LogoIcon from "../../assets/img/logo.png";
import BurgerIcon from "../../assets/svg/BurgerIcon";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Box } from "@mui/material";

export default function TopNavbar({ path }) {
  const [y, setY] = useState(window.scrollY);
  const [sidebarOpen, toggleSidebar] = useState(false);
  const { user, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    window.addEventListener("scroll", () => setY(window.scrollY));
    return () => {
      window.removeEventListener("scroll", () => setY(window.scrollY));
    };
  }, [y]);

  return (
    <>
      <Sidebar sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />

      {sidebarOpen && <Backdrop toggleSidebar={toggleSidebar} />}
      <Box className="flex py-7 w-full items-center justify-center">
        <Link
          to="/"
          className="pointer flex  w-full items-center justify-center"
          smooth={true}>
          <img src={LogoIcon} className="sm:w-[6%] w-[20%] " />
        </Link>
      </Box>
    </>
  );
}

const Wrapper = styled.nav``;

const BurderWrapper = styled.button`
  outline: none;
  border: 0px;
  background-color: transparent;
  height: 100%;
  padding: 0 15px;
  display: none;
  @media (max-width: 760px) {
    display: block;
  }
`;
const UlWrapper = styled.ul`
  display: flex;
  @media (max-width: 760px) {
    display: none;
  }
`;
const UlWrapperRight = styled.ul`
  @media (max-width: 760px) {
    display: none;
  }
`;
