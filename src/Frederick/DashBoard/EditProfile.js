import React from "react";
import styled from "styled-components";
import { BiNews } from "react-icons/bi";
import { RiSave2Fill } from "react-icons/ri";
import { BsBook, BsPlusCircle } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import DisplayMenu from "../DisplayMenu";
// import Rectangle from ""

const EditProfile = () => {
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
                  EditProfile
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
              <HeadText2>Edit Profile </HeadText2>
              <LabelHold>
                <Label>
                  <LabelText>Bio</LabelText>
                  <Inputs placeholder="Either with meaningful text" />
                </Label>
                <Label>
                  <LabelText>Email</LabelText>
                  <Inputs placeholder="test@gmail.com" />
                </Label>
                <Label>
                  <LabelText>PhoneNumber</LabelText>
                  <Inputs placeholder="09014329868" />
                </Label>
              </LabelHold>
              <HoldLink2 to="/Profile">
                <Submit type="submit"> Edit Profile</Submit>
              </HoldLink2>
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

export default EditProfile;

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
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 768px) {
    width: 100%;
    height: calc(100vh - 200px);
    /* margin-top: 30px; */
    /* padding-bottom: 80px; */
    /* margin-bottom: 20px; */
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }
`;

const HoldLink2 = styled(NavLink)`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
`;

const Submit = styled.button`
  width: 30%;
  height: 40px;
  background-color: black;
  border-radius: 50px;
  border: none;
  color: white;
  margin: 20px 0px;
  font-size: 13px;
  font-family: cursive;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 1;
  transition: all 350ms;
  transform: scale(1);
  :hover {
    transform: scale(1.015);
    cursor: pointer;
    opacity: 0.9;
  }
  @media screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

const Inputs2 = styled.textarea`
  width: 98%;
  height: 75%;
  outline: none;
  border-radius: 3px;
  resize: none;
  padding-left: 5px;
  border: 1px solid lightgray;

  ::placeholder {
    opacity: 0.6;
    font-size: 12px;
  }
  :focus {
    outline: 2px solid rgb(76, 216, 250);
    border: none;
  }
`;

const LabelText2 = styled.label`
  width: 100%;
  /* margin-right: 10px; */
  font-size: 12px;
  color: gray;
  text-align: left;
`;
const Inputs = styled.textarea`
  width: 98%;
  height: 55%;
  outline: none;
  border-radius: 3px;
  resize: none;
  padding-left: 5px;
  border: 1px solid lightgray;

  ::placeholder {
    opacity: 0.6;
    font-size: 12px;
  }
  :focus {
    outline: 2px solid rgb(76, 216, 250);
    border: none;
  }
`;

const LabelText = styled.label`
  width: 100%;
  /* margin-right: 10px; */
  font-size: 12px;
  color: gray;
  text-align: left;
`;

const LabelHold = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const Label = styled.div`
  width: 95%;
  height: 60px;
  margin: 10px 0px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
const Label2 = styled.div`
  width: 95%;
  height: 120px;
  margin: 10px 0px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const HeadText2 = styled.div`
  margin: 30px 0px;
  display: flex;
  align-items: center;
  font-weight: 600;
  justify-content: center;
`;

const Card = styled.div`
  width: 400px;
  height: 450px;
  /* margin: 10px 20px; */
  color: black;
  padding: 10px;
  font-family: cursive;
  /* box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px; */

  @media screen and (max-width: 425px) {
    width: 300px;
    height: 500px;
  }
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
`;
