import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const BioFill = () => {
  const [image, setImage] = useState("/image/Buzz Cut.png");
  const [avatar, setAvatar] = useState("");

  const handleImage = (e) => {
    const file = e.target.files[0];
    const save = URL.createObjectURL(file);
    setImage(save);
    setAvatar(file);
  };

  return (
    <Container>
      <Card>
        <Image src={image} />
        <LabelHolder>
          <Input type="file" id="pix" onChange={handleImage} />
          <Upload htmlFor="pix">Add Your Image</Upload>
        </LabelHolder>
        <Holder>
          <LabelText>Bio:</LabelText>
          <BioInput />
          <NextButton to="/NewsFeedDashBoard">Next</NextButton>
          <SkipButton to="/NewsFeedDashBoard">Skip</SkipButton>
        </Holder>
      </Card>
    </Container>
  );
};

export default BioFill;

const SkipButton = styled(NavLink)`
  text-decoration: none;
  width: 99%;
  text-align: right;
  margin-top: 20px;
  font-weight: 600;
  font-size: 13px;
  opacity: 0.6;
  color: gray;
  transition: all 350ms;
  :hover {
    cursor: pointer;
    opacity: 0.9;
  }

  @media screen and (max-width: 768px) {
    margin-top: 30px;
  }
`;

const NextButton = styled(NavLink)`
  text-decoration: none;
  margin-top: 20px;
  font-weight: 600;
  color: gray;
  transition: all 350ms;
  transform: scale(1);
  :hover {
    transform: scale(1.015);
    cursor: pointer;
    opacity: 0.9;
  }
`;

const LabelText = styled.label`
  width: 99%;
  /* margin-right: 10px; */
  font-size: 14px;
  color: gray;
  text-align: left;
`;
const BioInput = styled.textarea`
  width: 97%;
  height: 70px;
  resize: none;
  outline: none;
  border-radius: 3px;
  padding-left: 5px;
  border: 1px solid lightgray;
  color: rgba(0, 0, 0, 0.7);

  ::placeholder {
    opacity: 0.6;
    font-size: 12px;
  }
  :focus {
    outline: 2px solid rgb(76, 216, 250);
    border: none;
  }
`;

const Holder = styled.div`
  width: 93%;
  height: 180px;
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Upload = styled.div`
  padding: 11px 45px;
  background-color: red;
  color: white;
  font-family: cursive;
  margin-top: 10px;
  font-size: 13px;
  font-weight: 600;
  border-radius: 50px;
  transition: all 350ms;
  transform: scale(1);
  :hover {
    transform: scale(1.015);
    cursor: pointer;
    opacity: 0.9;
  }

  @media screen and (max-width: 375px) and (min-width: 320px) {
    font-size: 12px;
    padding: 10px 30px;
  }
`;

const Input = styled.input`
  display: none;
`;

const LabelHolder = styled.label``;

const Image = styled.img`
  width: 250px;
  height: 250px;
  object-fit: cover;
  margin-top: 20px;
  border-radius: 50%;
  @media screen and (max-width: 768px) {
    width: 220px;
    height: 220px;
  }
  @media screen and (max-width: 375px) and (min-width: 320px) {
    width: 180px;
    height: 180px;
  }
`;

const Card = styled.div`
  width: 510px;
  height: 560px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;

  @media screen and (max-width: 768px) {
    width: 450px;
    height: 530px;
  }

  @media screen and (max-width: 425px) {
    width: 400px;
    height: 520px;
  }
  @media screen and (max-width: 375px) and (min-width: 320px) {
    width: 310px;
    height: 480px;
  }
`;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
