import React from "react";
import Styled from "styled-components";

const Div = Styled.div`
    width: 100%;
    height: 10vh;
    display: flex;
    align-items:center;
    background-color:#fff;
    padding:1rem 0.5rem 1rem 4rem;
    margin: 4px 0 3rem 0;
    box-shadow: 0px 1px 1px rgba(58, 58, 68, 0.1), 0px 2px 5px 1px rgba(90, 103, 106, 0.05);

    p{
        font-family: Segoe UI;
        font-style: normal;
        font-weight: 600;
        font-size: 22px;
        line-height: 24px;
    }
`;

export default function NameSchool() {
  return (
    <Div>
      <p>Escola Arco íris</p>
    </Div>
  );
}
