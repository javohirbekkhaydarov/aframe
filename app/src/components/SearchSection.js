import React from "react";
import styled from "styled-components";

const SearchSection = () => {
  return (
    <Wrapper>
      <div className="search-input">
        <input
          type="text"
          name="text"
          id="text"
          className="form-control"
          placeholder="Search"
        />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .search-input {
    visibility: visible;
    position: relative;
  }

  .search-input {
    visibility: visible;
    display: flex;
    width: 70%;
    justify-content: start;
    position: relative;
    top: 0px;
    left: 10px;

    margin-top: 20px;
    background: #fff;
    z-index: 944;
    /* padding-bottom: 10px; */
    /* border-bottom: 0.3px solid #dedede; */
    text-align: left;
  }
  .search-input .search-icon {
    position: absolute;
    left: 20px;
    margin-top: 15px;
    font-size: 28px;
    transform: scale(1.3deg);
  }
  .search-input .form-control {
    margin-left: 0px;
    border: 1px solid #dedede;
    border-radius: 15px;

    padding: 5px 10px;
    padding-left: 50px;
    width: 100%;
    text-align: left;
    font-size: 14px;
  }
  input:focus {
    outline: 2px solid #f0526e;
  }
`;
export default SearchSection;
