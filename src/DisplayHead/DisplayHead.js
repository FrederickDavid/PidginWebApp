import React from 'react';
import styled from 'styled-components';
import { BiNews } from "react-icons/bi";
import { RiSave2Fill } from "react-icons/ri";
import { BsBook, BsPlusCircle } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from 'react-icons/fa';
import DisplayMenu from './DisplayMenu';

const DisplayHead = () => {
    return (
        <>
            <Container>
                <SideBar>
                    <Top>
                        <Image src={ "/image/Buzz Cut.png" } />
                        <span>Welcome Back</span>
                        <Name>Precious</Name>
                    </Top>
                    <Mid>
                        <NavHolder>
                            <Hold>
                                <Navs to="/NewsFeedDashBoard">
                                    <span>
                                        <BiNews />
                                    </span>
                                    NewsFeed
                                </Navs>
                                <Navs to="/NewsFeedDashBoard">
                                    <span>
                                        <BsPlusCircle />
                                    </span>
                                    Post
                                </Navs>
                                <Navs to="/NewsFeedDashBoard">
                                    <span>
                                        <BsBook />
                                    </span>
                                    Dictionary
                                </Navs>
                                <Navs to="/NewsFeedDashBoard">
                                    <span>
                                        <RiSave2Fill />
                                    </span>
                                    Saved
                                </Navs>
                                <Navs to="/Profile">
                                    <span>
                                        <BiNews />
                                    </span>
                                    Profile
                                </Navs>
                                <Navs to="/NewsFeedDashBoard">
                                    <span>
                                        <BiNews />
                                    </span>
                                    Notes
                                </Navs>
                            </Hold>
                            <Line></Line>
                        </NavHolder>
                        <Nav to="/UserSignIn">Logout</Nav>
                        {/* <Logo src={"/image/mainLogo.png"} /> */ }
                    </Mid>
                </SideBar>
                <MainView>
                    <Header>
                        <HeaderImg>
                            <img src="/image/Buzz Cut.png" alt="" />
                            <HeadText>
                                Welcome Back <span>Precious</span>
                            </HeadText>
                        </HeaderImg>
                        <BurgerLink>
                            <BarIcon id='bar' onClick={ () => {
                                document.getElementById('display').style.top = '0px';
                                document.getElementById('bar').style.display = 'none';
                                document.getElementById('times').style.display = 'block';
                            } } />
                            <CancleIcon id='times' onClick={ () => {
                                document.getElementById('display').style.top = '-1000px';
                                document.getElementById('bar').style.display = 'block';
                                document.getElementById('times').style.display = 'none';
                            } } />
                        </BurgerLink>
                    </Header>
                </MainView>
            </Container>
            <SideMenu id='display'><DisplayMenu /></SideMenu>
        </>
    );
};

export default DisplayHead;

const CancleIcon = styled(FaTimes)`
    font-size: 30px;
    display: none;
`;
const BarIcon = styled(FaBars)`
    font-size: 30px;
`;
const SideMenu = styled.div`
    width: 300px;
    height: 650px;
    background-color: gray;
    position: fixed;
    top: -3000px;
    z-index: 1;
    transition: all 2s ease;
`;
const BurgerLink = styled.div`
  width: 30px;
  height: 30px;
  /* background-color: red; */
  display: flex;
  align-items: center;
  justify-content: center;


  cursor: pointer;
`;

const HeadText = styled.div`
  font-size: 14px;
  span {
    font-weight: 600;
    font-size: 17px;
  }
  @media screen and (max-width: 425px) {
    font-size: 12px;
    span {
      font-weight: 600;
      font-size: 15px;
    }
  }
`;

const HeaderImg = styled.div`
  width: 240px;
  height: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    object-fit: cover;
    margin: 5px;
  }
  @media screen and (max-width: 425px) {
    width: 220px;
  }
`;

const Header = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    width: 100%;
    height: 70px;
    padding-right: 10px;
    background-color: aqua;
    display: flex;
    align-items: center;
    justify-content: space-between;
    /* margin-bottom: 30px; */
    position: fixed;
    top: 0;
  }
`;



const MainView = styled.div`
  margin-left: 160px;
  width: 85%;
  height: auto;
  display: flex;
  justify-content: center;
  padding: 20px;
  /* align-items: center; */
  flex-wrap: wrap;
  /* background: lightgrey; */
  /* border-left: 1px solid lightgrey; */
  @media screen and (max-width: 768px) {
    width: 100%;
    padding-top: 0px;
    padding-right: 0px;
    padding-left: 0px;
    padding-bottom: 20px;
    margin-left: 0px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Line = styled.div`
  width: 2px;
  height: 70%;
  background-color: rgba(0, 0, 0, 0.3);
  margin-left: 30px;
`;

const Nav = styled(NavLink)`
  text-decoration: none;
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

const Navs = styled(NavLink)`
  text-decoration: none;
  color: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 17px;
  font-family: Segoe "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  span {
    font-size: 20px;
    display: flex;
    align-items: center;
    margin-right: 10px;
  }
  transition: all 350ms;
  transform: scale(1);
  :hover {
    transform: scale(1.015);
    cursor: pointer;
    opacity: 0.9;
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

const Image = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  margin-bottom: 20px;
  border-radius: 50px;
  /* background-color: red; */
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
  position: fixed;
  left: 0;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
const Container = styled.div`
  width: 100%;
  /* height: 100vh; */
  display: flex;
  /* justify-content: space-between; */
  background: white;
  font-family: cursive;
`;
