import React from "react";
import styled from "styled-components";
import { BiNews } from "react-icons/bi";
import { RiSave2Fill } from "react-icons/ri";
import { BsBook, BsPlusCircle } from "react-icons/bs";
import { BsBookmarkFill } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import DisplayMenu from "../DisplayMenu";
// import Rectangle from ""

const Saved = () => {
  return (
    <>
      <Container>
        <SideBar>
          <Top>
            <ImagePro src={"/image/Buzz Cut.png"} />
            <span>Welcome Back😊</span>
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
                <Navs to="/Post">
                  <span>
                    <BsPlusCircle />
                  </span>
                  Post
                </Navs>
                <Navs to="/Saved">
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
                <Navs to="/Notes">
                  <span>
                    <BsBook />
                  </span>
                  Notes
                </Navs>
              </Hold>
              <Line></Line>
            </NavHolder>
            <Nav to="/UserSignIn">Logout</Nav>
            {/* <Logo src={"/image/mainLogo.png"} /> */}
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
              <BarIcon
                id="bar"
                onClick={() => {
                  document.getElementById("display").style.top = "0px";
                  document.getElementById("bar").style.display = "none";
                  document.getElementById("times").style.display = "block";
                }}
              />
              <CancleIcon
                id="times"
                onClick={() => {
                  document.getElementById("display").style.top = "-1000px";
                  document.getElementById("bar").style.display = "block";
                  document.getElementById("times").style.display = "none";
                }}
              />
            </BurgerLink>
          </Header>
          <CardHold>
            <Card>
              <TextHolder>
                <Others>
                  <NameText>By: Toheeb</NameText>
                  <WordText>
                    Word:
                    <br />i no dey too use am
                  </WordText>
                  <WordDefintion>
                    Definition: <br />i dont use it much
                  </WordDefintion>
                </Others>
                <ImageHold>
                  <Image src={"/image/Box Fade.png"} alt="" />
                </ImageHold>
              </TextHolder>
              <Icons>
                <Book />
              </Icons>
            </Card>
            <Card>
              <TextHolder>
                <Others>
                  <NameText>By: Toheeb</NameText>
                  <WordText>
                    Word:
                    <br />i no dey too use am
                  </WordText>
                  <WordDefintion>
                    Definition: <br />i dont use it much
                  </WordDefintion>
                </Others>
                <ImageHold>
                  <Image src={"/image/Box Fade.png"} alt="" />
                </ImageHold>
              </TextHolder>
              <Icons>
                <Book />
              </Icons>
            </Card>
            <Card>
              <TextHolder>
                <Others>
                  <NameText>By: Toheeb</NameText>
                  <WordText>
                    Word:
                    <br />i no dey too use am
                  </WordText>
                  <WordDefintion>
                    Definition: <br />i dont use it much
                  </WordDefintion>
                </Others>
                <ImageHold>
                  <Image src={"/image/Box Fade.png"} alt="" />
                </ImageHold>
              </TextHolder>
              <Icons>
                <Book />
              </Icons>
            </Card>
            <Card>
              <TextHolder>
                <Others>
                  <NameText>By: Toheeb</NameText>
                  <WordText>
                    Word:
                    <br />i no dey too use am
                  </WordText>
                  <WordDefintion>
                    Definition: <br />i dont use it much
                  </WordDefintion>
                </Others>
                <ImageHold>
                  <Image src={"/image/Box Fade.png"} alt="" />
                </ImageHold>
              </TextHolder>
              <Icons>
                <Book />
              </Icons>
            </Card>
            <Card>
              <TextHolder>
                <Others>
                  <NameText>By: Toheeb</NameText>
                  <WordText>
                    Word:
                    <br />i no dey too use am
                  </WordText>
                  <WordDefintion>
                    Definition: <br />i dont use it much
                  </WordDefintion>
                </Others>
                <ImageHold>
                  <Image src={"/image/Box Fade.png"} alt="" />
                </ImageHold>
              </TextHolder>
              <Icons>
                <Book />
              </Icons>
            </Card>
            <Card>
              <TextHolder>
                <Others>
                  <NameText>By: Toheeb</NameText>
                  <WordText>
                    Word:
                    <br />i no dey too use am
                  </WordText>
                  <WordDefintion>
                    Definition: <br />i dont use it much
                  </WordDefintion>
                </Others>
                <ImageHold>
                  <Image src={"/image/Box Fade.png"} alt="" />
                </ImageHold>
              </TextHolder>
              <Icons>
                <Book />
              </Icons>
            </Card>
          </CardHold>
        </MainView>
      </Container>
      <SideMenu id="display">
        <DisplayMenu />
      </SideMenu>
    </>
  );
};

export default Saved;

const Others = styled.div``;

const CancleIcon = styled(FaTimes)`
  font-size: 25px;
  color: rgba(0, 0, 0, 0.8);
  display: none;
`;
const BarIcon = styled(FaBars)`
  font-size: 25px;
  color: rgba(0, 0, 0, 0.8);
`;
const SideMenu = styled.div`
  width: 250px;
  height: 650px;
  background-color: rgb(154, 154, 154);
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
    background-color: lightgray;
    display: flex;
    align-items: center;
    justify-content: space-between;
    /* margin-bottom: 30px; */
    position: fixed;
    top: 0;
  }
`;

const CardHold = styled.div`
  width: 100%;
  /* height: 100%; */
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 768px) {
    width: 100%;
    height: calc(100vh - 200px);
    margin-top: 30px;
    margin-bottom: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }
`;

const Card = styled.div`
  width: 300px;
  height: auto;
  margin: 20px 20px;
  color: black;
  padding: 10px;
  font-family: cursive;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;

  @media screen and (max-width: 425px) {
    width: 280px;
    height: auto;
  }
`;

const ImageHold = styled.div`
  height: 70px;
  width: 70px;
  background-color: red;
  border-radius: 200px;
  margin-top: -30px;
  margin-right: -30px;
  @media screen and (max-width: 425px) {
    width: 60px;
    height: 60px;
    margin-top: -20px;
    margin-right: -20px;
  }
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 100%;
`;

const NameText = styled.div`
  font-size: 22px;
  margin-bottom: 20px;
  font-weight: 700;
`;

const WordText = styled.div`
  font-size: 13px;
  margin-bottom: 20px;
  font-family: consolas;
  /* font-weight: 600; */
`;

const WordDefintion = styled.div`
  font-size: 13px;
  margin-top: 20px;
  /* font-weight: 600; */
`;
const TextHolder = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

const Icons = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: 5px;
`;

const Book = styled(BsBookmarkFill)`
  font-size: 25px;
  margin-right: 10px;
  color: red;
`;

const MainView = styled.div`
  margin-left: 160px;
  width: 85%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
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
  }
`;

const Line = styled.div`
  width: 2px;
  height: 60%;
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

const ImagePro = styled.img`
  object-fit: cover;
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
  position: fixed;
  left: 0;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: space-between;
  background: white;
  font-family: cursive;
  padding-bottom: 20px;
`;
