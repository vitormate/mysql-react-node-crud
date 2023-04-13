import React, { useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/react-toastify";

import axios from "axios";

import { Container, Title, Row } from "../styles/Home";

import { Label, Input, Button } from "../styles/Forms";

import { FormClinicaMedico } from "./FormClinicaMedico";
import { GridClinicaMedico } from "./GridClinicaMedico";

export const ClinicaMedico = () => {
  const [clinicaMedico, setClinicaMedico] = useState([]);
  const [onEditCliMed, setOnEditCliMed] = useState(null);

  const getCliMed = async () => {
    try {
      const res = await axios.get("http://localhost:8800/clinicaMedico");
      setClinicaMedico(res.data);
    } catch (error) {
      toast.error(error);
    }
  }

  const getCliMedMaiorQuarenta = async () => {
    try {
      const res = await axios.get("http://localhost:8800/clinicaMedico/maior/quarenta");
      setClinicaMedico(res.data);
    } catch (error) {
      toast.error(error);
    }
  }

  const getCliMedMenorQuarenta = async () => {
    try {
      const res = await axios.get("http://localhost:8800/clinicaMedico/menor/quarenta");
      setClinicaMedico(res.data);
    } catch (error) {
      toast.error(error);
    }
  }

  const getCliMedMaisAno = async () => {
    try {
      const res = await axios.get("http://localhost:8800/clinicaMedico/mais/ano");
      setClinicaMedico(res.data);
    } catch (error) {
      toast.error(error);
    }
  }

  const getCliMedMenosAno = async () => {
    try {
      const res = await axios.get("http://localhost:8800/clinicaMedico/menos/ano");
      setClinicaMedico(res.data);
    } catch (error) {
      toast.error(error);
    }
  }

  useEffect(() => {

    getCliMed();
  }, [setClinicaMedico]);

  return(
    <>
      <Container>
        <Title>Clínica Médico</Title>
        <Row>

        <Button onClick={() => getCliMedMaiorQuarenta()}>Carga {'>='} 40</Button>
        <Button onClick={() => getCliMedMenorQuarenta()}>Carga {'<'} 40</Button>
        <Button onClick={() => getCliMedMaisAno()}>{'>='} 1 ano</Button>
        <Button onClick={() => getCliMedMenosAno()}>{'<'} 1 ano</Button>
        </Row>
        <GridClinicaMedico clinicaMedico={clinicaMedico} setOnEditCliMed={setOnEditCliMed} getCliMed={getCliMed}/>
        <FormClinicaMedico onEditCliMed={onEditCliMed} setOnEditCliMed={setOnEditCliMed} getCliMed={getCliMed}/>
      </Container>

    </>
  )
}