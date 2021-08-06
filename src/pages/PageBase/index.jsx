import React from "react";
import HeaderContentTrainee from "../../components/HeaderContentTrainee";
import NameScholl from "../../components/NameSchool";
import SerieContainer from "../../components/SerieConatiner";
import Styled from "styled-components";

const Container = Styled.div`
    background-color: #fcfcfc;
    height: 100%
`;

const ContentSerie = Styled.div`
  display:flex;
`;

export default function PageBase(props) {
  return (
    <Container>
      <HeaderContentTrainee />
      <NameScholl />
      <ContentSerie>
        <SerieContainer userProfile={props.userProfile} />
      </ContentSerie>
    </Container>
  );
}
