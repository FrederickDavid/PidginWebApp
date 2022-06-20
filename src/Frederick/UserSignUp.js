import React from "react";
import styled from "styled-components";
import logo from "./mainLogo.png";
import { useNavigate, NavLink } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import axios from "axios";

const UserSignin = () => {
  const navigate = useNavigate();

  const formSchena = yup.object().shape({
    userName: yup.string().required("Enter a userName"),
    email: yup.string().email().required("This field cannot be empty"),
    password: yup.string().required("You must set a password"),
    confirm: yup
      .string()
      .oneOf([yup.ref("password"), null], "Password must match"),
  });

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchena),
  });

  const onSubmit = handleSubmit(async (value) => {
    console.log(value);
    const { userName, email, password } = value;
    const mainURL = "http://localhost:9999";
    const url = `${mainURL}/api/user/register`;

    const formData = new FormData();
    formData.append("userName", userName);
    formData.append("email", email);
    formData.append("password", password);

    await axios.post(url, formData);

    // navigate("/confirm");
  });

  return (
    <Container>
      <Wrapper>
        <Card1>
          <InnerCard1>
            <Logo src={logo} />
            <Text>Enter Make U See Beta Pidgin Words And Wetin E Mean</Text>
            <Text2>
              Abi you don get before?
              <HoldLink to="/UserSignIn">
                <span>Sign in</span>
              </HoldLink>
            </Text2>
          </InnerCard1>
        </Card1>
        <Card2 onSubmit={onSubmit}>
          <HeadText>Make You Create Your Account</HeadText>
          <Label>
            <LabelText>Enter Username:</LabelText>
            <span>{errors.userName?.message}</span>
            <Inputs placeholder="Precious" {...register("userName")} />
          </Label>
          <Label>
            <LabelText>Enter your email:</LabelText>
            <span>{errors.email?.message}</span>
            <Inputs placeholder="test@gmail.com" {...register("email")} />
          </Label>
          <Label>
            <LabelText>Enter your password:</LabelText>
            <span>{errors.password?.message}</span>
            <Inputs
              placeholder="6+ characters"
              type="password"
              {...register("password")}
            />
          </Label>
          <Label>
            <LabelText>Confirm your password:</LabelText>
            <span>{errors.confirm?.message}</span>
            <Inputs
              placeholder="6+ characters"
              type="password"
              {...register("confirm")}
            />
          </Label>
          <HoldLink2 to="">
            <Submit type="submit">Sign up</Submit>
          </HoldLink2>
          <Text3>
            Abi you don get before?
            <HoldLink to="/UserSignIn">
              <span>Sign up</span>
            </HoldLink>
          </Text3>
        </Card2>
      </Wrapper>
    </Container>
  );
};

export default UserSignin;
const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: lightgray;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 768px) and (min-width: 300px) {
    width: 100%;
    min-height: 100vh;
  }
  /* @media screen and (max-width: 425px) and (min-width: 300px) {
    width: 100%;
    height: 100vh;
    overflow: hidden;
    margin: 0;
    padding: 0;
  } */
`;

const Wrapper = styled.div`
  width: 750px;
  height: 500px;
  background-color: white;
  border-radius: 5px;
  box-shadow: 1px 0px 10px rgba(0, 0, 0, 0.2);
  display: flex;
  @media screen and (max-width: 1024px) and (min-width: 768px) {
    width: 410px;
    height: 500px;
    background-color: white;
    border-radius: 5px;
    box-shadow: 1px 0px 10px rgba(0, 0, 0, 0.2);
    display: flex;
    align-items: center;
    justify-content: center;
  }
  @media screen and (max-width: 766px) and (min-width: 300px) {
    width: 350px;
    height: 500px;
    background-color: grey;
    border-radius: 5px;
    box-shadow: 1px 0px 10px rgba(0, 0, 0, 0.2);
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const Text3 = styled.div`
  display: none;
  @media screen and (max-width: 1024px) and (min-width: 300px) {
    width: 70%;
    display: flex;
    font-weight: 400;
    color: black;
    font-size: 13px;
    margin-top: 10px;
    align-items: center;
    justify-content: center;
    margin-bottom: 10px;
    /* margin: 20px 0px 0px 30px; */
    span {
      font-size: 13px;
      font-weight: 500;
      margin-left: 2px;
      color: blue;
      cursor: pointer;
    }
  }
`;

const HoldLink2 = styled(NavLink)`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
`;
const HoldLink = styled(NavLink)`
  text-decoration: none;
`;

const Text2 = styled.div`
  width: 180px;
  display: flex;
  font-weight: 250;
  flex-direction: column;
  color: white;
  font-size: 13px;
  margin: 100px 0px 0px 20px;
  text-decoration: none;
  span {
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    text-decoration: none;
    color: white;
  }
`;

const Text = styled.div`
  width: 250px;
  display: flex;
  font-weight: 600;
  flex-direction: column;
  color: white;
  font-size: 20px;
  margin: 15px 0px 0px 20px;
`;

const Logo = styled.img`
  width: 120px;
  height: 80px;
  object-fit: contain;
  margin: 20px 0px 0px 20px;
  border-radius: 3px;
`;

const InnerCard1 = styled.div`
  width: 300px;
  height: 70%;
  background-color: white;
  border-radius: 15px;
  background: rgba(255, 255, 255, 0.2);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
`;

const Card1 = styled.div`
  background-image: url("/image/Shadow-Fall-Background.svg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-color: black;
  width: 375px;
  height: 100%;
  border-radius: 5px 0px 0px 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 1024px) and (min-width: 300px) {
    display: none;
  }
`;

const Submit = styled.button`
  width: 80%;
  height: 40px;
  border: none;
  background-color: black;
  border-radius: 3px;
  color: white;
  margin: 20px 0px;
  font-size: 15px;
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
`;

const Inputs = styled.input`
  width: 98%;
  height: 55%;
  outline: none;
  border-radius: 3px;
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

const Label = styled.div`
  width: 80%;
  height: 60px;
  margin: 10px 0px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  span {
    color: red;
    font-size: 12px;
  }
`;

const HeadText = styled.div`
  margin: 30px 0px;
  display: flex;
  align-items: center;
  font-weight: 600;
`;

const Card2 = styled.form`
  width: 375px;
  height: 100%;
  background-color: white;
  border-radius: 0px 5px 5px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 1024px) and (min-width: 300px) {
    width: 360px;
    height: 100%;
    background-color: white;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
  }
`;
