import React, { useState } from "react";
import styled from "styled-components";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate, NavLink } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import axios from "axios";

const SignUp = () => {
  const navigate = useNavigate();
  const [image, setImage] = useState("/images/fiverr_profile.jpg");
  const [avatar, setAvatar] = useState("");

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

  const handleImage = (e) => {
    const file = e.target.files[0];
    const save = URL.createObjectURL(file);
    setImage(save);
    setAvatar(file);
  };

  const onSubmit = handleSubmit(async (value) => {
    console.log(value);
    const { userName, email, password } = value;
    const mainURL = "http://localhost:9999";
    const url = `${mainURL}/api/user/register`;

    const formData = new FormData();
    formData.append("userName", userName);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("avatar", avatar);

    await axios.post(url, formData);

    navigate("/confirm");
  });

  return (
    <Container>
      <Left>
        <LogoHold to="/">
          <Logo src={"/image/mainLogo.png"} />
        </LogoHold>
      </Left>
      <Right>
        {/* <NewHold>
          <Logo></Logo>
          <Text>
            .<span>P</span>idgin
          </Text>
        </NewHold> */}
        {/* <Content>Create an account</Content> */}
        <Form onSubmit={onSubmit}>
          <Upload>
            <Label htmlFor="pix">
              <img src={image} />
              <p>Upload your image</p>
              <input type="file" id="pix" onChange={handleImage} />
            </Label>
          </Upload>
          <Hold>
            <InputHold>
              <Input placeholder="Name" {...register("userName")} />
            </InputHold>
            <InputHold>
              <Input placeholder="Email" {...register("email")} />
            </InputHold>
            <InputHold>
              <Input
                placeholder="Password"
                type="password"
                {...register("password")}
              />
            </InputHold>
            <InputHold>
              <Input
                placeholder="Confirm Password"
                type="password"
                {...register("confirm")}
              />
            </InputHold>
            <Buttons>
              <Button bg type="submit">
                Create account
              </Button>
              <Button2 bg1>
                <span>
                  <FcGoogle />
                </span>
                Sign Up with Google
              </Button2>
            </Buttons>
            <Next>
              <Tag>
                Shie you don get account already ?.{" "}
                <Link to="/signIn" style={{ textDecoration: "none" }}>
                  <span>LogIn</span>
                </Link>
              </Tag>
            </Next>
          </Hold>
        </Form>
      </Right>
    </Container>
  );
};

export default SignUp;

const NewHold = styled.div`
  display: none;
`;
const Tag = styled.div`
  margin-top: 10px;
  font-size: 13px;
  color: grey;
  span {
    color: blue;
    cursor: pointer;
  }
`;
const Next = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
  margin-bottom: 10px;
`;
const Button = styled.button`
  margin-top: 10px;
  width: 100%;
  height: 40px;
  cursor: pointer;
  font-family: consolas;
  font-size: 17px;
  border: 0;
  outline: none;
  border-radius: 5px;
  color: ${({ bg }) => (bg ? "#fff" : "#000")};
  background-color: ${({ bg }) => (bg ? "black" : "transparent")};
  border: 1px solid ${({ bg1 }) => (bg1 ? "black" : 0)};
  transition: all 350ms;
  transform: scale(1);
  :hover {
    cursor: pointer;
    transform: scale(1.015);
  }
`;
const Button2 = styled.button`
  margin-top: 10px;
  width: 100%;
  height: 40px;
  font-family: segoe UI;
  font-size: 14px;
  border-radius: 5px;
  color: rgba(0, 0, 0, 0.7);
  background-color: white;
  border: 1px solid grey;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 350ms;
  transform: scale(1);
  :hover {
    cursor: pointer;
    transform: scale(1.015);
  }

  span {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 5px;
    font-size: 18px;
  }
`;
const Buttons = styled.div`
  margin-top: 20px;
`;
const InputHold = styled.div`
  width: 100%;
  height: 35px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  @media screen and (max-width: 768px) {
    margin-top: 10px;
  }
  @media screen and (max-width: 425px) {
    margin-top: 10px;
  }
`;
const Input = styled.input`
  border: 0;
  outline: none;
  width: 100%;
  height: 30px;
  color: rgba(0, 0, 0, 0.7);
  ::placeholder {
    color: rgba(0, 0, 0, 0.4);
    font-family: consolas;
  }
`;
const Label = styled.label`
  width: 250px;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px dashed lightgrey;
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  p {
    position: absolute;
    color: lightgrey;
  }
  input {
    display: none;
  }
`;
const Upload = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
`;
const Content = styled.div`
  width: 300px;
  font-size: 20px;
  font-weight: bold;
  text-align: left;
  font-family: consolas;
  margin-top: 10px;
  margin-bottom: 10px;
  @media screen and (max-width: 800px) {
    text-align: center;
    margin-top: 10px;
    margin-bottom: 20px;
  }
`;
const Hold = styled.div`
  width: 300px;
`;
const Form = styled.form`
  width: 85%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const Right = styled.div`
  width: 40%;
  height: 100vh;
  // height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  @media screen and (max-width: 900px) {
    flex: 0.7;
  }
  @media screen and (max-width: 768px) {
    flex: 0.7;
  }
  @media screen and (max-width: 425) {
    flex: 0.7;
  }
`;

const Logo = styled.img`
  width: 100%;
  height: 100%;
`;
const LogoHold = styled(NavLink)`
  width: 150px;
  height: 50px;
  display: flex;
  align-items: flex-end;
  margin: 20px;
`;
const Left = styled.div`
  width: 60%;
  height: 100%;
  /* background-color: silver; */
  background-image: url("/image/signin.svg");
  background-repeat: no-repeat;
  background-position: center;
  @media screen and (max-width: 900px) {
    display: none;
  }
  @media screen and (max-width: 900px) {
    display: none;
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
  @media screen and (max-width: 425) {
    display: none;
  }
`;
const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  @media screen and (max-width: 800px) {
    height: auto;
  }
`;
