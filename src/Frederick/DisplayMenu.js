import React from "react";
import styled from "styled-components";
import { BiNews } from "react-icons/bi";
import { RiSave2Fill } from "react-icons/ri";
import { BsBook, BsPlusCircle } from "react-icons/bs";
import { NavLink } from "react-router-dom";

const DisplayMenu = () => {
  return (
    <Container>
      <Wrapper>
        <h3>UGD</h3>
        <Nav to="/NewsFeedDashBoard">
          <span>
            <BiNews />
          </span>
          NewsFeed
        </Nav>
        <Nav to="/Post">
          <span>
            <BsPlusCircle />
          </span>
          Post
        </Nav>
        <Nav to="/Saved">
          <span>
            <RiSave2Fill />
          </span>
          Saved
        </Nav>
        <Nav to="/Profile">
          <span>
            <BiNews />
          </span>
          Profile
        </Nav>
        <Nav to="/Notes">
          <span>
            <BsBook />
          </span>
          Notes
        </Nav>
      </Wrapper>
    </Container>
  );
};

export default DisplayMenu;

const Nav = styled(NavLink)`
  /* margin: 20px; */
  /* background-color: greenyellow; */
  color: white;
  width: 100%;
  padding-left: 10px;
  font-size: 15px;
  font-weight: 600;
  display: flex;
  align-items: center;
  text-decoration: none;
  /* border-bottom: 1px solid white; */
  /* justify-content: center; */

  span {
    font-size: 20px;
    margin-right: 10px;
    margin-left: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
const Wrapper = styled.div`
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  line-height: 3;

  h3 {
    margin: -10px;
    font-size: 35px;
    font-weight: 900;
    /* border-bottom: 1px solid white; */
  }
`;
const Container = styled.div`
  width: 100%;
  padding: 20px 0px;
`;
