import * as React from "react";
import { useState } from "react";
import { InfoData } from "../json/InfoData";
import styled from "styled-components";

const Info = () => {
  const [value, setValue] = useState(InfoData);
  return (
    <Wrapper>
      <div className="flutter-center">
        <p className="flutter-title">Introduction</p>
      </div>
      <div className="container">
        {value.map((info, id) => {
          return (
            <div className="flutter-center" key={id}>
              <h1 className="flutter-title"> {info.title} </h1>
              <p className="flutter-content">
                {info.content}
                <a href="#"> More </a>
              </p>
            </div>
          );
        })}
        <div className="videos">
          <iframe
            className="videos-top"
            width="348"
            height="228"
            src="https://www.youtube.com/embed/xWV71C2kp38"
            title="How do I make my first Flutter app"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <iframe
            className="videos-top"
            width="348"
            height="228"
            src="https://www.youtube.com/embed/QlwiL_yLh6E"
            title="What is State?"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <div className="flutter-video">
            Only have 60 seconds? Learn how to build and deploy a Flutter App!
          </div>
          <iframe
            width="558"
            height="313"
            src="https://www.youtube.com/embed/ZnufaryH43s"
            title="How to build and deploy an app in Flutter in 60 seconds!"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="video-flex"
          ></iframe>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 45%;

  .flutter-center {
    display: flex;
    flex-direction: column;
  }
  .container .rows .cols {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
  .container .rows .cols .box {
    display: flex;
    justify-content: center;
    border: 0.3px solid #dedede;
    margin: 10px;
    flex-direction: column;
    padding: 20px;
    width: 33%;
    border-radius: 3px;
    /* overflow: hidden; */
    /* border-bottom: 3px solid transparent; */
  }
  .box:hover {
    /* border: 3px solid #1b86e1; */
    cursor: pointer;
    box-shadow: inset 0px -3px 0px #1b86e1;
  }
  .box .box-title {
    font-size: 20px;
    color: #69a6fb;
    line-height: 30px;
    text-decoration: none;
  }
  .box .box-info {
    font-size: 16px;
  }
  .flutter-title {
    font-size: 38px;
    color: #f0526e;
    font-weight: 200;
    font-style: normal;
    display: flex;
    text-align: left;
    margin-left: 0px;

    width: 100%;
  }
  .flutter-content {
    font-size: 16px;
    color: #4a4a4a;
    font-weight: 400;
    font-style: normal;
    display: flex;
    text-align: left;
    margin-left: 0px;

    width: 100%;
  }
  #bottom-content {
    list-style: circle;
    font-size: 16px;
    color: #1b86e1;
    font-weight: 400;
    font-style: normal;
    display: flex;
    text-align: left;
    margin-left: 0px;
    text-decoration: none;
    width: 100%;
  }
  #bottom-content:hover {
    text-decoration: underline;
    color: #5b86e1;
  }
  .videos-top {
    border: 0.3px solid #dedede;
    border-radius: 4px;
    padding: 10px;
    margin: 5px;
    width: 45%;
  }
  .flutter-video {
    font-size: 22px;
    color: #4a4a4a;
    font-weight: 400;
    font-style: normal;
    display: flex;
    text-align: center;
    margin: 20px 0px;
    padding: 0px;
    line-height: 29px;
    letter-spacing: 0.1px;
    width: 100%;
  }
  .flutter-content a {
    color: #1b86e1;
    text-decoration: none;
    margin: 0;
    padding: 0;
  }

  .flutter-buttons {
    width: 100%;
    display: flex;

    justify-content: start;
  }

  .btn {
    color: #ffffff;
    background-color: #0176e8;
    border: 0;
    padding: 10px 20px;
    font-size: 16px;
    text-align: left;
    margin: 40px 0px;
  }
  .btn:hover {
    background-color: #085baf;
    cursor: pointer;
  }

  @media screen and (max-width: 768px) {
    width: 90%;
    .video {
      width: 90%;
    }
    .video .video-flex {
      width: 100%;
    }
  }
`;

export default Info;
