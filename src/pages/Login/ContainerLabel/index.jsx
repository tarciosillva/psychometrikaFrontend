import React from "react";
import Styled from "styled-components";

const Content = Styled.div`
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
`;

export default function ContainerLabel(props) {
  return <div>
      <Content>
          <label>{props.textLabel}</label>
      </Content>
  </div>
}
