import React from "react";
import Styled from "styled-components";
import iconvisiblePassword from "../../../assets/Olho_esconder.svg";

const Content = Styled.div`
  padding: 0.8rem 0 0.8rem 0.2rem;
  border: #b8b8b8 1px solid;
  margin-top: 0.5rem;
  border-radius: 0.2rem;
  display: flex;
  justify-content: center;

  img {
    margin-right: 0.5rem;
    cursor: pointer;
  }
`;

export default function ContainerInput(props) {
  if (props.img === true) {
    return (
      <Content>
        <input type={props.type} placeholder={props.placeholder} />
        <img
          src={iconvisiblePassword}
          alt="Icone olho de visualização de senha"
        />
      </Content>
    );
  } else {
    return (
      <Content>
        <input type={props.type} placeholder={props.placeholder} />
      </Content>
    );
  }
}
