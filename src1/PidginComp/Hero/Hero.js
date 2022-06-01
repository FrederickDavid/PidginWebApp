import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Hero = () => {
  return (
    <Container>
      <Head>
      <LogoHold>
        <Logo></Logo>
          <Text>.<span>P</span>idgin</Text>
          </LogoHold>
          <ButtonHold to="/signIn">
            <Button1 >Login</Button1>
          </ButtonHold>
      </Head>

      <Hero1>
        <Col>
          <Head1>
            check out amazing pidgin <br />
            words and their meaning
          </Head1>
          <Head2>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vel
            tellus justo. Fusce imperdiet pulvinar efficitur. Morbi dui ante,
            mattis ut convallis a, ultricies a mauris. In malesuada iaculis
          </Head2>
          <ButtonHold to="/signUp">
          <Button>Get Started</Button>
          </ButtonHold>
        </Col>
        <Col2>
          <ImageHold>
          {/* <img src="pic.jpg" alt="" /> */}
          </ImageHold>
        </Col2>
      </Hero1>
    </Container>
  );
};

export default Hero;

const ImageHold = styled.div`
width: 100%;
height: 100%;
border: none;
box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;

@media screen and (max-width: 1024px) {
  width: 100%;
}
`

const Col2 = styled.div`
  width: 50%;
  height: 80%;
  display: flex;
  align-items: Center;
  justify-content: center;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const Head2 = styled.div`
  font-size: 0.9rem;
  width: 90%; 
  color: gray;
  margin-top: 25px;
  margin-bottom: 25px;
  @media screen and (max-width: 768px) {
    text-align: center; 
    margin-bottom: 30px;
  }
`;
const Head1 = styled.div`
  font-size: 40px;
  font-weight: 600;
  text-transform: capitalize;
  color: black;
  @media screen and (max-width: 1024px) {
    font-size: 30px;
  }
  @media screen and (max-width: 768px) {
    font-size: 35px;
    text-align: center; 
    margin-bottom: 10px;
  }
  @media screen and (max-width: 425px) {
    font-size: 20px;
  }
`;


const Button = styled.button`
padding: 15px 35px;
border-radius: 5px;
background-color: blue;
border: none;
color: white;
font-family: consolas;
font-weight: 800;
font-size: 16px;
transition: all 350ms;
transform: scale(1);
:hover{
cursor: pointer;
transform: scale(1.009);
}
@media screen and (max-width: 1024px) {
  padding: 13px 30px;
  font-weight: 600;
  font-size: 14px;
}
`;

const Col = styled.div`
  width: 45%;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 768px) {
    width: 100%;
  }

`;

const Hero1 = styled.div`
  background-color: #fff;
  width: 100%;
  height: calc(100vh - 50px);
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 500px) {
    display: flex;
    flex-direction: column;
  }
`;

const Button1 = styled.button`
padding: 15px 35px;
border-radius: 5px;
background-color: blue;
border: none;
color: white;
font-family: consolas;
font-weight: bold;
font-size: 13px;
transition: all 350ms;
transform: scale(1);
:hover{
cursor: pointer;
transform: scale(1.009);
}
@media screen and (max-width: 425px) {
  padding: 13px 30px;
}
`

const ButtonHold = styled(NavLink)`
text-decoration: none;
display: flex;
align-items: center:
justify-content: center;
margin-right: 20px
`
const Text = styled.div`
    font-weight: 800;
    font-size: 20px;
    margin-left: 10px;
    span{
    font-size: 30px;
        color: red;
    }
`;

const Logo = styled.div`
    width: 40px;
    height: 40px;
    border: 1px solid black;
    background-color: #fff;
`;
const LogoHold = styled.div`
    display: flex;
    align-items: flex-end;
    margin: 20px;
`;

const Head = styled.div`
  display: flex;
  align-items: center;
  color: black;
  justify-content: space-between;
  height: 70px;
  width: 100%;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  font-family: cursive;
`;
