import React from "react";
import Styled from "styled-components";

import enable from "../../assets/enabled.svg";
import disabled from "../../assets/disabled.svg";

const Img = Styled.img`
    width:2.4rem;
    cursor: pointer;
`;

export default function ButtonRestore(props) {
  return <Img src={disabled} alt="Icone Relógio" />;
}
