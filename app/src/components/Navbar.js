import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { AiOutlineCaretDown } from "react-icons/ai";
import { FaBars } from "react-icons/fa";
import { HiBars3 } from "react-icons/hi2";
import styled from "styled-components";
import "../styles/Main.css";

const Navbar = ({ setStatus, status }) => {
  const [value, setValue] = useState({
    all: false,
    development: false,
    ecosystem: false,
    docs: false,
    search: false,
  });
  const [search, SetSearch] = useState(false);

  return (
    <Wrapper>
      <div className="navbar">
        <div id="nav">
          <div className="sidebar-icon">
            <FaBars onClick={() => setStatus(true)} className="FaBars" />
          </div>
          <a href="#" className="logo">
            A-FRAME
          </a>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  .navbar {
    position: relative;
    display: none;
  }
  #nav {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    display: flex;
    justify-content: center;
    box-shadow: 1px 1px 10px #d1cfcf;
    margin: 0;
    padding: 10px;
    height: 60px;
    background-color: #f0526e;
    z-index: 22;
  }
  .navbar-icons {
    color: #898c8e;
    display: flex;
    justify-content: space-around;
    width: 100%;
    align-items: center;
    font-size: 22px;
  }
  .sidebar-icon {
    /* position: relative; */
  }
  .sidebar-icon .FaBars {
    color: #fff;
    font-size: 24px;
    margin: 3px 4px;
    display: none;
    position: absolute;
    left: 0;
  }
  #nav .logo {
    margin: 0;
    padding: 3px 3px;
    display: flex;
    justify-content: center;
  }
  .logo {
    text-decoration: none;
    font-family: "Fira Sans", sans-serif;
    color: #fff;
    font-size: 25px;
    line-height: 25px;
    font-weight: 100;
  }

  @media screen and (max-width: 768px) {
    .navbar {
      position: relative;
      display: block;
    }
    .logo {
      display: flex;
      justify-content: center;
      margin: auto;
    }
    width: 100%;
    .sidebar-icon .FaBars {
      display: block;
      cursor: pointer;
    }
  }
`;

export default Navbar;
