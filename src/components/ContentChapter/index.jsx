import React, { useEffect, useState } from "react";
import Styled from "styled-components";
import axios from "axios";
import moveIcon from "../../assets/moveIcon.svg";
import eyeEnable from "../../assets/eyeEnable.svg";
import eyeDisabled from "../../assets/eyeDisabled.svg";
import iconLink from "../../assets/iconLink.svg";

const Content = Styled.div`
    background-color: #f7f7f7;
    padding: 0.5rem;
    margin: 0.3rem 0 0.3rem 0;
    display: grid;
    grid-template-columns: 0fr 0fr 1fr 0fr 0fr;
    align-items: center;
    border-radius: 4px;

    img{
        width: 2.25rem;
        margin-right: 0.3rem;
        cursor: pointer;
    }

    .move{
        cursor: grab;
    }

    p,s{
        font-size: 1rem;
        font-family: Segoe UI;
        font-style: normal;
        font-weight: 600;
        margin-left: 0.7rem;
    }
`;

const ContentStudent = Styled.div`
    background-color: #f7f7f7;
    padding: 0.5rem;
    margin: 0.3rem 0 0.3rem 0;
    display: grid;
    grid-template-columns: 0fr 1fr 0fr;
    align-items: center;
    border-radius: 4px;

    p{
        font-size: 1rem;
        font-family: Segoe UI;
        font-style: normal;
        font-weight: 600;
        margin-left: 0.7rem;
    }
`;

const ContentDisabled = Styled.div`
    background-color: #dadada;
    padding: 0.5rem;
    margin: 0.3rem 0 0.3rem 0;
    display: grid;
    grid-template-columns: 0fr 0fr 1fr 0fr 0fr;
    align-items: center;
    border-radius: 4px;

    .eyeDisabled{
      width: 2.25rem;
        margin-right: 0.3rem;
        cursor:pointer;
    }

    .linkDesabled{
        width: 2.25rem;
        margin-right: 0.3rem;
        cursor:no-drop;
    }

    .move{
        cursor: grab;
    }

    p,s{
        font-size: 1rem;
        font-family: Segoe UI;
        font-style: normal;
        font-weight: 600;
        margin-left: 0.7rem;
    }
`;

const NumberChapther = Styled.div`
    width: 2rem;
    font-size: 1rem;
    font-family: Segoe UI;
    font-style: normal;
    font-weight: 600;
    color: #8C939D;
    border: 1px solid #8C939D;
    border-radius: 50%;

    display: flex;
    justify-content: center;
    align-items: center;
    padding: 4px;
`;

export default function ContentChapter(props) {
  const [statusElement, setStatusElement] = useState("enabled");
  const [capitulos, setCapitulos] = useState({ capitulos: [] });
  const [capitulosAlunos, setcapitulosAlunos] = useState({
    capitulos: []
  });

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_HOST}/serie`).then((res) => {
      res.data.map((e, i) => {
        setCapitulos({ capitulos: ([i] = e.capitulos) });
      });
    });

    axios
      .get(`${process.env.REACT_APP_API_HOST}/listarCapitulosAlunos`)
      .then((res) => {
        res.data.map((e, i) => {
          setcapitulosAlunos({ capitulos:[i] = e.capitulos });
        });
      });
  }, []);

  function reorderTitle(element) {
    setStatusElement("disabled");
    var indice = capitulos.capitulos.indexOf(element);
    capitulos.capitulos.splice(indice, 1);
    capitulos.capitulos.push(element);
    setCapitulos({ capitulos: capitulos });

    capitulosAlunos.capitulos.splice(indice, 1)
    setcapitulosAlunos({capitulos: capitulosAlunos})

    
    axios.post(`${process.env.REACT_APP_API_HOST}/novaOrdemMateria`, capitulos);
    axios.post(`${process.env.REACT_APP_API_HOST}/modificarExibicaoCapitulosAlunos`, capitulosAlunos)
  }

  if (props.userProfile === "admin" && statusElement === "enabled") {
    return (
      <Content>
        <img className="move" src={moveIcon} alt="Icone de mover" />
        <NumberChapther>{props.numberChapter}</NumberChapther>
        <p>{props.title}</p>
        <img
          src={eyeEnable}
          onClick={() => reorderTitle(props.title)}
          alt="Icone de olho visualizar"
        />
        <a href={`/capitulo/${props.capitulo}`}>
          <img src={iconLink} alt="Icone de link" />
        </a>
      </Content>
    );
  } else if (props.userProfile === "admin" && statusElement === "disabled") {
    return (
      <ContentDisabled>
        <img className="move" src={moveIcon} alt="Icone de mover" />
        <NumberChapther>{props.numberChapter}</NumberChapther>
        <s>{props.title}</s>
        <img
          className="eyeDisabled"
          src={eyeDisabled}
          onClick={() => setStatusElement("enabled")}
          alt="Icone de olho visualizar"
        />
        <img className="linkDesabled" src={iconLink} alt="Icone de link" />
      </ContentDisabled>
    );
  } else if (props.userProfile === "student") {
    return (
      <ContentStudent>
        <NumberChapther>{props.numberChapter}</NumberChapther>
        <p>{capitulosAlunos.capitulos[props.numberChapter - 1]}</p>
        <a href={`/capitulo/${props.capitulo}`}>
          <img src={iconLink} alt="Icone de link" />
        </a>
      </ContentStudent>
    );
  }
}
