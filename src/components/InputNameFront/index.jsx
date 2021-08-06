import React, { useEffect, useState } from "react";
import axios from "axios";
import Styled from "styled-components";

import iconVerify from "../../assets/Shape.svg";
import editPen from "../../assets/editPen.svg";

const Input = Styled.input`
    width: 12.5rem;
    background-color: #ffffff;
    padding-left: 0.2rem;
    font-family: Segoe UI;
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 32px;
    color: #424242;
`;

const Span = Styled.span`
    font-family: Segoe UI;
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 32px;
    color: #424242;
`;

const Img = Styled.img`
  cursor: pointer;
  margin-left: 0.4rem
`;

export default function InputNameFront(props) {
  const [contentNameFront, setcontentNameFront] = useState("default");
  const [nameFront, setNameFront] = useState({ materia:""});

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_HOST}/serie`)
      .then((res) => {
        setNameFront({materia:res.data[0].materia})
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  function submitNewNameFront() {
    axios.post(
      `${process.env.REACT_APP_API_HOST}/novoTituloMateria`,
      nameFront
    );
    setcontentNameFront("default");
  }

  if (contentNameFront === "default" && props.userProfile === "admin") {
    return (
      <Span>
        {nameFront.materia}
        <Img
          src={editPen}
          onClick={() => setcontentNameFront("newNameFront")}
        />
      </Span>
    );
  } else if (
    contentNameFront === "newNameFront" &&
    props.userProfile === "admin"
  ) {
    return (
      <div>
        <Input
          type="text"
          placeholder="Novo nome da frente"
          onChange={(e) => setNameFront({ materia: `${e.target.value}` })}
        />
        <Img src={iconVerify} onClick={() => submitNewNameFront()} />
      </div>
    );
  } else if (props.userProfile === "student") {
    return <Span>{nameFront.materia}</Span>;
  }
}
