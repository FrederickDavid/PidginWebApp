import React from "react";
import styled from "styled-components";
import { FcLike } from "react-icons/fc";
import { BsBookmarkFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const DetailPage = () => {
  return (
    <div>
      <Cont>
        <Wrap>
          <Word>
            <UserWord>Word: wetin dey xup</UserWord>
          </Word>
          <Card>
            <TextHolder>
              <Others>
                <NameText>By: Toheeb</NameText>
                <WordDefintion>
                  Definition: <br />i dont use it much
                </WordDefintion>
              </Others>
              <ImageHold>
                <Link to="/UserSignUp">
                  <Image src={"/image/Buzz Cut.png"} alt="" />
                </Link>
              </ImageHold>
            </TextHolder>
            <LikesDefinition>
              <Likes>1,530 likes</Likes>
            </LikesDefinition>
            <Icons>
              <Love />
              <Book />
            </Icons>
          </Card>
          <Card>
            <TextHolder>
              <Others>
                <NameText>By: Toheeb</NameText>
                <WordDefintion>
                  Definition: <br />i dont use it much
                </WordDefintion>
              </Others>
              <ImageHold>
                <Image src={"/image/Buzz-Cut.png"} alt="" />
              </ImageHold>
            </TextHolder>
            <LikesDefinition>
              <Likes>1,530 likes</Likes>
            </LikesDefinition>
            <Icons>
              <Love />
              <Book />
            </Icons>
          </Card>
          <Card>
            <TextHolder>
              <Others>
                <NameText>By: Toheeb</NameText>
                <WordDefintion>
                  Definition: <br />i dont use it much
                </WordDefintion>
              </Others>
              <ImageHold>
                <Image src={"/image/Buzz Cut 2.png"} alt="" />
              </ImageHold>
            </TextHolder>
            <LikesDefinition>
              <Likes>1,530 likes</Likes>
            </LikesDefinition>
            <Icons>
              <Love />
              <Book />
            </Icons>
          </Card>
        </Wrap>
      </Cont>
    </div>
  );
};

export default DetailPage;

const Cont = styled.div`
  width: 100%;
  height: 100%;
  font-family: cursive;
  display: flex;
  justify-content: center;
`;

const Wrap = styled.div`
  width: 85%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 20px;
`;

const Word = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 600px;

  @media (max-width: 800px) {
    width: 85%;
  }
`;

const UserWord = styled.div`
  font-size: 25px;
  font-weight: 700;
  @media screen and (max-width: 425px) {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  @media screen and (max-width: 320px) {
    width: 100%;
    font-size: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const Others = styled.div``;

const Card = styled.div`
  width: 600px;
  height: 200px;
  margin: 20px 20px;
  color: black;
  padding: 10px;
  font-family: cursive;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;

  @media screen and (max-width: 425px) {
    width: 330px;
    height: 180px;
  }
  @media screen and (max-width: 320px) {
    width: 280px;
    height: 180px;
  }
`;

const ImageHold = styled.div`
  height: 90px;
  width: 90px;
  background-color: red;
  border-radius: 50%;
  @media screen and (max-width: 425px) {
    width: 70px;
    height: 70px;
  }
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 100%;
`;

const NameText = styled.div`
  font-size: 30px;
  margin-bottom: 20px;
  font-weight: 700;
`;

const WordDefintion = styled.div`
  font-size: 13px;
  margin-top: 20px;
`;

const LikesDefinition = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
`;

const Likes = styled.div``;

const TextHolder = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

const Icons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 5px;
`;

const Love = styled(FcLike)`
  margin-left: 10px;
  font-size: 25px;
  color: red;
`;

const Book = styled(BsBookmarkFill)`
  font-size: 25px;
  margin-right: 10px;
  color: red;
`;
