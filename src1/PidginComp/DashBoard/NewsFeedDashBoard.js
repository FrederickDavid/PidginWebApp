import React from "react";
import styled from "styled-components";
// import Rectangle from ""

const NewsFeedDashBoard = () => {
  return (
    <Container>
      <SideBar>
        <Top>
          <Image />
          <span>Welcome Back</span>
          <Name>Frederick</Name>
        </Top>
        <Mid></Mid>
      </SideBar>
      <MainView>Right</MainView>
    </Container>
  );
};

export default NewsFeedDashBoard;

const MainView = styled.div`
  width: 85%;
  height: 100%;
  background: grey;
`;

const Mid = styled.div`
  width: 100%;
  height: 63%;
  background: grey;
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
  width: 100%;
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
