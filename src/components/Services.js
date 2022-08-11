import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useResize } from "../hooks/useResize";
import { Button } from "../share/Button";
import Spinner from "./Spinner";

const Services = () => {
    const[show, setShow] = useState(true);
    const { isPhone } = useResize()
 

    setTimeout(() => {
        setShow(false);
    }, 5000)

  return (
    <Wrapper>
      <div>
        <div>Bem vindo ao {isPhone && <br />}Só Pra Elas</div>
        <span>7MT / Dia</span>
        {show  ? <Spinner /> : <Button variant="primary">Aderir ao Servico</Button>}
        <p>Ao clicar em Aderir, confirma que acedeu, leu e concorda com os Termos e Condições do Só Pra Elas.</p>
        <Link to="/privacity">Termos e Condições</Link>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
  > div {
    display: flex;
    flex-direction: column;
    /* max-width: 450px; */
    margin: 25px;
    text-align: center;
    div:first-child{
      color: white;
      font-size: 4em;
    }
    span {
      color: white;
      font-size: 2.4em;
      margin: 15px 0;
    }
    p {
        font-size: 1.5em;
        color: white;
        margin: 25px 35px;
    }
    a {
        color: white;
        font-size: 1.8em;
    }
  }
`;

export default Services;
