import React, { useEffect, useState } from "react";
import axios from "axios";
import Styled from "styled-components";

import InputNameFront from "../InputNameFront";
import ContentChapter from "../ContentChapter";

const DivContainer = Styled.div`
    width: 29rem;
    background-color: #ffffff;
    padding: 1rem;
    margin: 0.3rem 0 1rem 4rem;
    box-shadow: 0px 1px 1px rgba(58, 58, 68, 0.1), 0px 2px 5px 1px rgba(90, 103, 106, 0.05);
    border-radius: 8px;
`;

export default function FrontContainer(props) {
  const [capitulo, setCapitulo] = useState([])

  useEffect(() => {
   axios
      .get(`${process.env.REACT_APP_API_HOST}/serie`)
      .then((res) => {
        res.data.map(e=>{
          setCapitulo(e.capitulos)
        })
      })
      .catch((error) => {
        console.log(error);
      })
  },[])

  return (
    <DivContainer>
      <InputNameFront userProfile={props.userProfile}/>
      {capitulo.map((element,index)=>
        <ContentChapter capitulo={element.normalize('NFD').replace(/[\u0300-\u036f]/g, '').split(' ').join('_').toLowerCase()} userProfile={props.userProfile} key={index} numberChapter={index+1} title={element} />
      )}
    </DivContainer>
  );
}
