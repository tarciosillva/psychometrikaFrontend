import React, { useState } from "react";
import Styled from "styled-components";

const Content = Styled.div`
    p,s{
        font-size: 1rem;
        font-family: Segoe UI;
        font-style: normal;
        font-weight: 600;
        margin-left: 0.7rem;
    }
`;

export default function NameChapter(props) {
  const [statusElement] = useState(props.statusElement);
  console.log(statusElement);
  if (props.statusElement === "enabled") {
    return (
      <Content>
        <p>{props.title}</p>
      </Content>
    );
  } else if (props.statusElement === "disabled") {
    return (
      <Content>
        <s>{props.title}</s>
      </Content>
    );
  }
}
