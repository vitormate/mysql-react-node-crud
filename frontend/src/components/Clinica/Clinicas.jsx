import React, { useState, useEffect } from "react";

import axios from "axios";

import { Container, Title } from "../../styles/Home";

import { Button } from "../../styles/Forms";

import { FormClinica } from "./FormClinica";
import { GridClinica } from "./GridClinica";

export const Clinicas = () => {
  const [clinicas, setClinicas] = useState([]);
  const [onEditCli, setOnEditCli] = useState(null);

  const getClinicas = async () => {
    try {
      const res = await axios.get("http://localhost:8800/clinicas");
      setClinicas(res.data);
    } catch (error) {
      console.log(error);
    }
  }

  const getClinicasPorNome = async () => {
    try {
      const res = await axios.get("http://localhost:8800/clinicas/ordena");
      setClinicas(res.data);
    } catch (error) {
      console.log(error);
    }
  }



  useEffect(() => {

    getClinicas();
  }, [setClinicas]);

  return(
    <>
      <Container>
        <Title>Clínicas</Title>
        
        <Button onClick={() => getClinicasPorNome()}>Por nome</Button>
        <GridClinica clinicas={clinicas} setOnEditCli={setOnEditCli} getClinicas={getClinicas}/>
        <FormClinica onEditCli={onEditCli} setOnEditCli={setOnEditCli} getClinicas={getClinicas}/>

      </Container>

    </>
  )
}