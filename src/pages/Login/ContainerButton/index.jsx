import React from "react";
import Styled from "styled-components";

const Content = Styled.div`
  display: flex;
  justify-content: center;
  padding: 0.5rem;
  margin-top: 1.5rem;
  background-color: #00718a;
  border-radius: 0.3rem;

  button {
    font-weight: 600;
    font-size: 1rem;
    color: #fff;
    font-family: Segoe UI;
    width: 100%;
    cursor: pointer;
  }
`;

export default function ContainerButton() {
  return <Content>
      <button><a href="/admin/materias">Entrar</a></button>
  </Content>
}
