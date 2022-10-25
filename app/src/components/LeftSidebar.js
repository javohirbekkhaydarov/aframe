import { useState } from "react";
import styled from "styled-components";
import data from "../json/data";
import * as React from "react";

import SearchSection from "./SearchSection";
const LeftSidebar = () => {
  const [arr, SetArr] = useState(data);
  //   dropdown

  return (
    <Wrapper>
      <div className="leftSidebar">
        <div className="top-logo">
          <div className="logo">
            <a href="#">A-FRAME</a>
          </div>
          <div className="search-parent">
            <SearchSection />
          </div>
        </div>

        <div className="rest-info">
          <ul>
            <li>
              {" "}
              <a href="#">Docs</a>
            </li>
            <li>
              {" "}
              <a href="#">blog</a>
            </li>
            <li>
              {" "}
              <a href="#">community</a>
            </li>
            <li>
              {" "}
              <a href="#">showcase</a>
            </li>
            <li>
              {" "}
              <a href="#">github</a>
            </li>
            <li>
              {" "}
              <a href="#">slack</a>
            </li>
            <li>
              {" "}
              <a href="#">discord</a>
            </li>
            <li>
              {" "}
              <a href="#">discord</a>
            </li>
            <li>
              {" "}
              <a href="#">ask a question</a>
            </li>
          </ul>
          <hr />
          <select name="version" id="version">
            version
            <option value="version">1.3.0</option>
            <option value="120">1.2.0</option>
            <option value="110">1.1.0</option>
            <option value="100">1.0.0</option>
            <option value="090">0.9.0</option>
            <option value="080">0.8.0</option>
            <option value="070">0.7.0</option>
            <option value="060">0.6.0</option>
          </select>
          {arr.map((item, id) => (
            <div className="faq-name " key={id}>
              <p className="title">{item.name}</p>

              {item.children.map((element, id) => {
                return (
                  <div typeof="number" id="typeBorder" key={id}>
                    <span className="item">{element.name}</span>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  .leftSidebar {
    position: sticky;
    top: 0px;
    display: flex;
    flex-direction: column;
    text-align: left;
    overflow-y: scroll;
    height: 100vh;
    width: 100%;
    font-family: "Kumbh Sans", sans-serif;
  }
  .top-logo {
    position: fixed;
    top: 0px;
    background: #fff;
    margin-bottom: 50px;
  }
  .rest-info {
    /* overflow-y: scroll; */
    margin: 1rem;
    margin-top: 140px;
  }
  .logo {
    display: flex;
    justify-content: center;
    margin: 2rem auto;
  }

  .logo a {
    text-decoration: none;
    font-family: "Fira Sans", sans-serif;
    color: #f0526e;
    font-size: 45px;
    line-height: 25px;
    font-weight: 100;
  }

  .title {
    color: #757575;
    font-size: 18px;
    transition: all 0.3s linear;
    /* margin: 15px; */
  }
  #version {
    margin: 0 auto;
    z-index: 904;
    display: flex;
    justify-content: center;
  }

  .item {
    display: flex;
    transition: all 0.3s linear;
    color: #909090;
    margin: 0.2rem 0px;
    font-size: 14px;
    padding: 10px 0px;
  }
  .item:hover {
    color: #1c1c1c;
    cursor: pointer;
  }
  .title,
  item {
    color: #2c2c2c;
    cursor: pointer;
    display: flex;
    justify-content: left;
    align-items: center;
    font-size: 16px;
    font-weight: 300;
    text-align: left;
  }
  .title:hover {
    color: #1c1c1c;
    cursor: pointer;
  }
  ul li {
    list-style: none;
  }
  ul li a {
    text-decoration: none;
    color: #909090;
    cursor: pointer;
    display: flex;
    justify-content: left;
    align-items: center;
    font-size: 14px;
    font-weight: 400;
    text-align: left;
    text-transform: uppercase;
    padding: 6px 0px;
  }
  ul li a:hover {
    color: #1c1c1c;
  }
  ul li a:focus {
    color: #f0526e;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    display: flex;
    justify-content: start;
    flex-direction: column;

    height: 100vh;
    text-align: left;
    /* z-index: 300; */
    background: #fff;
    .leftSidebar {
      position: relative;
      top: 10px;
      left: 0px;
      width: 100%;
      overflow-y: scroll;
    }

    .rest-info {
      margin-top: 130px;

      display: flex;
      flex-direction: column;
      text-align: left;

      width: 50%;
      font-family: "Kumbh Sans", sans-serif;
    }
  }
`;

export default LeftSidebar;
