import React from 'react';
import styled from 'styled-components';
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { createUser } from "../GlobalState/Global";
import { Link, useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import axios from "axios";

const SignIn = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const formSchema = yup.object().shape({
        email: yup.string().email().required("This field cannot be empty"),
        password: yup.string().required("This field cannot be empty"),
        confirm: yup
            .string()
            .oneOf([ yup.ref("password"), null ], "Password must match"),
    });

    const {
        register,
        reset,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(formSchema),
    });

    const onSubmit = handleSubmit(async (value) => {
        console.log(value);
        const { email, password } = value;
        const url = "http://localhost:9999/api/user/signIn";

        await axios.post(url, { email, password }).then((res) => {
            console.log(res.data.data);
            dispatch(createUser(res.data.data));
        });

        navigate("/");
    });
    return (
        <Container>
            <Left>
                <LogoHold>
                    <Logo></Logo>
                    <Text>
                        .<span>P</span>idgin
                    </Text>
                </LogoHold>
            </Left>
            <Right>
                <NewHold>
                    <Logo></Logo>
                    <Text>
                        .<span>P</span>idgin
                    </Text>
                </NewHold>
                <Content>Login your account</Content>
                <Form onSubmit={ onSubmit }>
                    <Hold>
                        <InputHold>
                            <Input placeholder="Email" { ...register("email") } />
                        </InputHold>
                        <InputHold>
                            <Input placeholder="Password" type="password" { ...register("password") } />
                        </InputHold>
                        <InputHold>
                            <Input placeholder="Confirm Password" type="password" { ...register("confirm") } />
                        </InputHold>
                        <Buttons>
                            <Button bg type='submit'>Login your account</Button>
                            <Button2 bg1>
                                <span>
                                    <FcGoogle />
                                </span>{ " " }
                                Log In with Google
                            </Button2>
                        </Buttons>
                        <Next>
                            <Tag>
                                Don't have an account yet?.
                                <Link to="/signUp" style={ { textDecoration: "none" } }>
                                    { " " }
                                    <span>Register</span>
                                </Link>
                            </Tag>
                        </Next>
                    </Hold>
                </Form>
            </Right>
        </Container>
    );
};

export default SignIn;
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
const Content = styled.div`
  width: 300px;
  font-size: 20px;
  font-weight: bold;
  text-align: left;
  font-family: consolas;
  margin-bottom: 10px;
  @media screen and (max-width: 800px) {
    text-align: center;
    margin-top: 30px;
    margin-bottom: 20px;
  }
`;
const Hold = styled.div`
  width: 300px;
`;
const Form = styled.form`
  width: 85%;
  height: 570px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const Right = styled.div`
  width: 40%;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  @media screen and (max-width: 900px) {
    flex: 0.7;
    height: 500px;
  }
  @media screen and (max-width: 768px) {
    flex: 0.7;
  }
  @media screen and (max-width: 425) {
    flex: 0.7;
  }
`;
const Text = styled.div`
  font-weight: 800;
  font-size: 20px;
  margin-left: 10px;

  span {
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
const Left = styled.div`
  width: 60%;
  height: 100%;
  background-color: silver;
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
`;
