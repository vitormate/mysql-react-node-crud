import React, { useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/react-toastify";

import axios from "axios";

import { Container, Title, Row } from "../styles/Home";

import { FormMedico } from "./FormMedico";
import { GridMedico } from "./GridMedico";
import { Button } from "../styles/Forms";

export const Medicos = () => {
  const [medicos, setMedicos] = useState([]);
  const [onEdit, setOnEdit] = useState(null);

  const getMedicos = async () => {
    try {
      const res = await axios.get("http://localhost:8800/medicos");
      setMedicos(res.data);
    } catch (error) {
      toast.error(error);
    }
  }

  const getMedicosPorNome = async () => {
    try {
      const res = await axios.get("http://localhost:8800/medicos/ordena");
      setMedicos(res.data);
    } catch (error) {
      toast.error(error);
    }
  }

  const getMedicosFem = async () => {
    try {
      const res = await axios.get("http://localhost:8800/medicos/feminino");
      setMedicos(res.data);
    } catch (error) {
      toast.error(error);
    }
  }

  const getMedicosMas = async () => {
    try {
      const res = await axios.get("http://localhost:8800/medicos/masculino");
      setMedicos(res.data);
    } catch (error) {
      toast.error(error);
    }
  }
  useEffect(() => {

    getMedicos();
  }, [setMedicos]);

  return(
    <>
      <Container>
        <Title>Médicos</Title>
        <Row>
          <Button onClick={() => getMedicosFem()}>Feminino</Button>
          <Button onClick={() => getMedicosMas()}>Masculino</Button>
          <Button onClick={() => getMedicosPorNome()}>Por nome</Button>
        </Row>
        <GridMedico medicos={medicos} setOnEdit={setOnEdit} getMedicos={getMedicos}/>
        <FormMedico onEdit={onEdit} setOnEdit={setOnEdit} getMedicos={getMedicos}/>

      </Container>

    </>
  )
}