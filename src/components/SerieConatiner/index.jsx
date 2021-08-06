import React from "react";

import Styled from "styled-components";

import ButtonRestore from "../../components/ButtonRestore";
import FrontContainer from "../../components/FrontContainer";

const Container = Styled.div`
    h1{
      display: grid;
      grid-template-columns: 1fr 0fr;
      align-items: center;
      font-family: Segoe UI;
      font-style: normal;
      font-weight: 600;
      font-size: 28px;
      line-height: 32px;
      color: #424242;
      margin-left: 4rem;
      margin-bottom: 1rem;
    }
`;

export default function SerieContainer(props) {
  if (props.userProfile === "admin") {
    return (
      <Container>
        <h1>
          1º Série <ButtonRestore />
        </h1>
        <FrontContainer userProfile={props.userProfile} />
      </Container>
    );
  } else if (props.userProfile === "student") {
    return (
      <Container>
        <h1>1º Série</h1>
        <FrontContainer userProfile={props.userProfile} />
      </Container>
    );
  }
}
