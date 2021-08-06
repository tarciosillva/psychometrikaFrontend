import React from "react";
import styled from "styled-components";

import imgBackground from "../../assets/backgroundLogin.svg";
import logo from "../../assets/Logo.png";

import ContainerLabel from "./ContainerLabel";
import ContainerInput from "./ContainerInput";
import ContainerButton from "./ContainerButton";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: url(${imgBackground}) no-repeat;
  position: absolute;
  width: 100vw;
  height: 100vh;
`;

const ContainerLogin = styled.div`
  width: 451px;
  height: 420px;
  background-color: #fff;
  box-shadow: 0px 1px 0px rgb(58 58 68 / 10%), -3px 2px 24px rgb(58 58 68 / 8%),
    0px 24px 48px rgb(90 91 106 / 8%);
  border-radius: 16px;
  padding: 3rem;
  p {
    font-size: 1em;
    font-family: "Roboto Mono", monospace;
    font-weight: 600;
    margin: 0.2rem 0 0.5rem 0;
  }
  form {
    input {
      width: 100%;
      font-family: Segoe UI;
      font-size: 1rem;
    }
    label {
      font-family: Segoe UI;
      font-size: 1rem;
      font-weight: normal;
      color: #424242;
    }
  }
`;

export default function Login() {
  return (
    <Container>
      <ContainerLogin>
        <img src={logo} alt="logo psychometrika" />
        <p>Desafio Trainee</p>
        <form>
          <>
            <ContainerLabel textLabel="Email" />
            <ContainerInput type="text" placeholder="Seu email institucional" />
          </>
          <>
            <ContainerLabel textLabel="Senha" />
            <ContainerInput
              type="password"
              placeholder="Mínino 8 caracteres"
              img={true}
            />
          </>
        </form>
        <ContainerButton />
      </ContainerLogin>
    </Container>
  );
}
