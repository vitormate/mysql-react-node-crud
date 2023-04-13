import React, { useRef, useEffect } from "react";

import axios from "axios";

import { toast } from "react-toastify";

import { FormContainer, InputArea, Input, Label, Button } from "../styles/Forms";

export const FormClinicaMedico = ({ onEditCliMed, setOnEditCliMed, getCliMed }) => {
  const refCliMed = useRef();

  useEffect(() => {
    if (onEditCliMed) {
      const clinicaMedico = refCliMed.current;

      clinicaMedico.CodCli.value = onEditCliMed.CodCli;
      clinicaMedico.CodMed.value = onEditCliMed.CodMed;
      clinicaMedico.DataIngresso.value = onEditCliMed.DataIngresso;
      clinicaMedico.CargaHorariaSemanal.value = onEditCliMed.CargaHorariaSemanal;
    }
  })

  const handleSubmit = async (event) => {
    event.preventDefault();

    const clinicaMedico = refCliMed.current;

    if (
      !clinicaMedico.CodCli.value ||
      !clinicaMedico.CodMed.value ||
      !clinicaMedico.DataIngresso.value ||
      !clinicaMedico.CargaHorariaSemanal.value
    ) {
      return toast.warn("Preencha todos os campos!");
    }

    if (onEditCliMed) {
      await axios.put(`http://localhost:8800/clinicaMedico/${onEditCliMed.CodCli}/${onEditCliMed.CodMed}`, {
        CodCli: clinicaMedico.CodCli.value,
        CodMed: clinicaMedico.CodMed.value,
        DataIngresso: clinicaMedico.DataIngresso.value.slice(0, 10),
        CargaHorariaSemanal: clinicaMedico.CargaHorariaSemanal.value
      })
      .then(({ data }) => console.log(data))
      .catch(({ data }) => console.log(data));
    } else {
      await axios.post("http://localhost:8800/clinicaMedico", {
        CodCli: clinicaMedico.CodCli.value,
        CodMed: clinicaMedico.CodMed.value,
        DataIngresso: clinicaMedico.DataIngresso.value,
        CargaHorariaSemanal: clinicaMedico.CargaHorariaSemanal.value
      })
      .then(({ data }) => console.log(data))
      .catch(({ data }) => console.log(data));
    }

    clinicaMedico.CodCli.value = "";
    clinicaMedico.CodMed.value = "";
    clinicaMedico.DataIngresso.value = "";
    clinicaMedico.CargaHorariaSemanal.value = "";

    setOnEditCliMed(null);
    getCliMed();
  }


  return(
    <>
      <FormContainer ref={refCliMed} onSubmit={handleSubmit}>
      <InputArea>
          <Label>CodCli</Label>
          <Input name="CodCli" />
        </InputArea>
        <InputArea>
          <Label>CodMed</Label>
          <Input name="CodMed" />
        </InputArea>
        <InputArea>
          <Label>DataIngresso</Label>
          <Input name="DataIngresso" />
        </InputArea>
        <InputArea>
          <Label>CargaHorariaSemanal</Label>
          <Input name="CargaHorariaSemanal" />
        </InputArea>

        <Button type="submit">SALVAR</Button>

      </FormContainer>
    </>
  )
}