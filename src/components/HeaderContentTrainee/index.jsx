import React from "react";
import Styled from "styled-components";

import ImgLogo from "../../assets/Logo.png";
import imgDow from "../../assets/keyboard_arrow_down_black_24dp.svg";

const Header = Styled.header`
    width:100vw;
    height:11vh;
    display: flex;
    align-items: center;
    background-color:#fff;
    padding:1rem 0.5rem 1rem 4rem;
    box-shadow: 0px 1px 1px rgba(58, 58, 68, 0.1), 0px 2px 5px 1px rgba(90, 103, 106, 0.05);
    display: grid;
    grid-template-columns: 9rem 1rem 65rem 2rem;
    img{
        width: 8rem;
        height: 1.9rem;
        margin-right: 1rem;
    }

    span{
        width: 1.5px;
        height: 2rem;
        background-color: #e2e2e2;
    }

    p{
        font-size: 1.2em;
        font-family: "Roboto Mono", monospace;
        font-weight: 500;
        margin-left: 1rem;
    }
`;

const ContentAvatar = Styled.div`
    border: 1px #25b7c5 solid;
    background-color: aliceblue;
    border-radius: 50%;
    padding: 0.1rem 0.6rem 0.3rem 0.6rem;
    font-weight: 600;
    color: #0683F9;
    font-size: 1.2rem;
`;

const Box = Styled.div`
  display: flex;
  align-items:center;
  cursor: pointer;
`;

export default function HeaderContentTrainee() {
  return (
    <Header>
      <img src={ImgLogo} alt="Logo trainee" />
      <span></span>
      <p>Desafio Trainee</p>

      <Box>
        <ContentAvatar>A</ContentAvatar>
        <img src={imgDow} alt="Icone seta para baixo" />
      </Box>
    </Header>
  );
}
