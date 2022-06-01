import React from "react";
import styled from "styled-components";
import { BiNews } from "react-icons/bi";
import { RiSave2Fill } from "react-icons/ri";
import { BsBook, BsPlusCircle } from "react-icons/bs";
// import Rectangle from ""

const NewsFeedDashBoard = () => {
  return (
    <Container>
      <SideBar>
        <Top>
          <Image />
          <span>Welcome Back</span>
          <Name>Precious</Name>
        </Top>
        <Mid>
          <NavHolder>
            <Hold>
              <Navs>
                <span>
                  <BiNews />
                </span>
                NewsFeed
              </Navs>
              <Navs>
                <span>
                  <BsPlusCircle />
                </span>
                Post
              </Navs>
              <Navs>
                <span>
                  <BsBook />
                </span>
                Dictionary
              </Navs>
              <Navs>
                <span>
                  <RiSave2Fill />
                </span>
                Saved
              </Navs>
              <Navs>
                <span>
                  <BiNews />
                </span>
                Profile
              </Navs>
              <Navs>
                <span>
                  <BiNews />
                </span>
                Notes
              </Navs>
            </Hold>
            <Line></Line>
          </NavHolder>
          <Nav>Logout</Nav>
          {/* <Logo src={"/image/mainLogo.png"} /> */}
        </Mid>
      </SideBar>
      <MainView>Right</MainView>
    </Container>
  );
};

export default NewsFeedDashBoard;

const MainView = styled.div`
  width: 85%;
  height: 100%;
  /* background: lightgrey; */
  border-left: 1px solid lightgrey;
`;

const Logo = styled.img`
  width: 90%;
  height: 15%;
  background-color: gray;
`;

const Line = styled.div`
  width: 2px;
  height: 70%;
  background-color: rgba(0, 0, 0, 0.3);
  margin-left: 30px;
`;

const Nav = styled.div`
  padding: 10px 35px;
  background-color: black;
  display: flex;
  color: white;
  align-items: center;
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 20px;
  border-radius: 50px;
  transition: all 350ms;
  transform: scale(1);
  :hover {
    cursor: pointer;
    transform: scale(1.015);
    background-color: rgba(0, 0, 0, 0.9);
  }
`;

const Navs = styled.div`
  color: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 17px;
  cursor: pointer;
  font-family: Segoe "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  span {
    font-size: 20px;
    display: flex;
    align-items: center;
    margin-right: 10px;
  }
`;

const Hold = styled.div`
  margin-left: 20px;
`;

const NavHolder = styled.div`
  height: 55%;
  width: 100%;
  /* background-color: gray; */
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Mid = styled.div`
  width: 95%;
  height: 63%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

const Name = styled.div`
  font-weight: bold;
  font-size: 20px;
`;

const Image = styled.image`
  width: 100px;
  height: 100px;
  margin-bottom: 20px;
  border-radius: 50px;
  background-color: red;
`;

const Top = styled.div`
  width: 95%;
  height: 35%;
  background: lightgrey;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 0px 30px 30px 0px;
  ${"" /* margin-top: 20px; */}
  span {
    font-weight: 600;
  }
`;

const SideBar = styled.div`
  width: 180px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: space-between;
  background: white;
`;
