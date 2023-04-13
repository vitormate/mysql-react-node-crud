import React, { useRef, useEffect } from "react";

import axios from "axios";

import { toast } from "react-toastify";

import { FormContainer, InputArea, Input, Label, Button } from "../styles/Forms";

export const FormMedico = ({ onEdit, setOnEdit, getMedicos }) => {
  const refMed = useRef();

  useEffect(() => {
    if (onEdit) {
      const medico = refMed.current;

      medico.CodMed.value = onEdit.CodMed;
      medico.NomeMed.value = onEdit.NomeMed;
      medico.Genero.value = onEdit.Genero;
      medico.Telefone.value = onEdit.Telefone;
      medico.Email.value = onEdit.Email;
    }
  })

  const handleSubmit = async (event) => {
    event.preventDefault();

    const medico = refMed.current;

    if (
      !medico.CodMed.value ||
      !medico.NomeMed.value ||
      !medico.Genero.value ||
      !medico.Telefone.value ||
      !medico.Email.value
    ) {
      return toast.warn("Preencha todos os campos!");
    }

    if (onEdit) {
      await axios.put(`http://localhost:8800/medicos/${onEdit.CodMed}`, {
        CodMed: medico.CodMed.value,
        NomeMed: medico.NomeMed.value,
        Genero: medico.Genero.value,
        Telefone: medico.Telefone.value,
        Email: medico.Email.value
      })
      .then(({ data }) => console.log(data))
      .catch(({ data }) => console.log(data));
    } else {
      await axios.post("http://localhost:8800/medicos", {
        CodMed: medico.CodMed.value,
        NomeMed: medico.NomeMed.value,
        Genero: medico.Genero.value,
        Telefone: medico.Telefone.value,
        Email: medico.Email.value
      })
      .then(({ data }) => console.log(data))
      .catch(({ data }) => console.log(data));
    }

    medico.CodMed.value = "";
    medico.NomeMed.value = "";
    medico.Genero.value = "";
    medico.Telefone.value = "";
    medico.Email.value = "";

    setOnEdit(null);
    getMedicos();
  }


  return(
    <>
      <FormContainer ref={refMed} onSubmit={handleSubmit}>
      <InputArea>
          <Label>CodMed</Label>
          <Input name="CodMed" />
        </InputArea>
        <InputArea>
          <Label>NomeMed</Label>
          <Input name="NomeMed" />
        </InputArea>
        <InputArea>
          <Label>Genero</Label>
          <Input name="Genero" />
        </InputArea>
        <InputArea>
          <Label>Telefone</Label>
          <Input name="Telefone" />
        </InputArea>
        <InputArea>
          <Label>Email</Label>
          <Input name="Email" />
        </InputArea>

        <Button type="submit">SALVAR</Button>

      </FormContainer>
    </>
  )
}