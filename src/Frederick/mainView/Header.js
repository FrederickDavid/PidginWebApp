import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Head>
        <LogoHolder>
          <Logo>
            <MainLogo src={"/image/mainLogo.png"} />
          </Logo>
        </LogoHolder>
        <ButtonHold to="/UserSignUp">
          <Button1>Register</Button1>
        </ButtonHold>
      </Head>
    </div>
  );
};

export default Header;

const Button1 = styled.button`
  padding: 15px 35px;
  border-radius: 5px;
  background-color: black;
  border: none;
  color: white;
  font-family: consolas;
  font-weight: bold;
  font-size: 13px;
  transition: all 350ms;
  transform: scale(1);
  :hover {
    cursor: pointer;
    transform: scale(1.009);
  }
  @media screen and (max-width: 425px) {
    padding: 10px 25px;
  }
`;
const ButtonHold = styled(NavLink)`
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

const MainLogo = styled.img`
  width: 100%;
  height: 100%;
`;

const Logo = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LogoHolder = styled.div`
  width: 180px;
  height: 80%;
  background-color: aqua;
  margin-left: 20px;
  @media screen and (max-width: 768px) {
    width: 100px;
    height: 60%;
  }
`;

const Head = styled.div`
  display: flex;
  align-items: center;
  color: black;
  justify-content: space-between;
  background-color: lightgray;
  position: fixed;
  height: 70px;
  top: 0;
  z-index: 10;
  width: 100%;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 5px 8px -8px;
`;
