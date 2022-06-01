import React from "react";
import styled from "styled-components";

const Confirm = () => {
  return (
    <Container>
      <Image src={"/image/auth.svg"} />
      {/* <h1>Check your mail to continue</h1> */}
      <Diva>
        Your Account has been created, Please check your inbox to Verify your
        Account and continue
      </Diva>
    </Container>
  );
};

export default Confirm;

const Diva = styled.div`
  text-align: center;
  font-weight: bold;
  font-size: 20px;
  color: #004080;
  text-transform: uppercase;
`;

const Image = styled.img`
  width: 400px;
  height: 400px;
  margin-bottom: 20px;
  object-fit: contain;
`;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
