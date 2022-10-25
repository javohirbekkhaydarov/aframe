import React, { useState } from "react";
import styled from "styled-components";
import { InfoData } from "../json/InfoData";

const RightSidebar = () => {
  const [value, setValue] = useState(InfoData);
  return (
    <Wrapper>
      <div className="rightSidebar">
        <p className="right-title">table of content</p>
        <ul>
          {value.map((item, index) => {
            return (
              <li key={index}>
                <a href="#">{item.title}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  display: flex;
  width: 30%;

  .rightSidebar {
    position: sticky;
    top: 80px;
    display: flex;
    flex-direction: column;
    text-align: left;
    margin: 0px;
    height: 100vh;
    width: 100%;
    font-family: "Kumbh Sans", sans-serif;
  }
  .right-title {
    color: #757575;
    font-size: 14px;
    transition: all 0.3s linear;
    margin: 30px;
    margin-bottom: 0px;
    text-transform: uppercase;
  }
  ul li a {
    font-size: 16px;
    color: #1b86e1;
    font-weight: 400;
    font-style: normal;
    display: flex;
    text-align: left;
    margin-left: 0px;
    text-decoration: none;
    width: 100%;
    transition: all 0.3s linear;
    color: #909090;
    margin: 1rem auto;
    font-size: 14px;
  }
  ul li {
    list-style: none;
  }

  ul li a:hover {
    text-decoration: underline;
    color: #1c1c1c;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    overflow: hidden;
    height: 100%;
    .rightSidebar {
      width: 90%;
      overflow: hidden;
      height: 100%;
    }
    ::-webkit-scrollbar {
      width: 0px;
    }
  }
`;

export default RightSidebar;
