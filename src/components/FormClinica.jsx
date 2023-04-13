import React, { useRef, useEffect } from "react";

import axios from "axios";

import { toast } from "react-toastify";

import { FormContainer, InputArea, Input, Label, Button } from "../styles/Forms";

export const FormClinica = ({ onEditCli, setOnEditCli, getClinicas }) => {
  const refCli = useRef();

  useEffect(() => {
    if (onEditCli) {
      const clinica = refCli.current;

      clinica.CodCli.value = onEditCli.CodCli;
      clinica.NomeCli.value = onEditCli.NomeCli;
      clinica.Endereco.value = onEditCli.Endereco;
      clinica.Telefone.value = onEditCli.Telefone;
      clinica.Email.value = onEditCli.Email;
    }
  })

  const handleSubmit = async (event) => {
    event.preventDefault();

    const clinica = refCli.current;

    if (
      !clinica.CodCli.value ||
      !clinica.NomeCli.value ||
      !clinica.Endereco.value ||
      !clinica.Telefone.value ||
      !clinica.Email.value
    ) {
      return toast.warn("Preencha todos os campos!");
    }

    if (onEditCli) {
      await axios.put(`http://localhost:8800/clinicas/${onEditCli.CodCli}`, {
        CodCli: clinica.CodCli.value,
        NomeCli: clinica.NomeCli.value,
        Endereco: clinica.Endereco.value,
        Telefone: clinica.Telefone.value,
        Email: clinica.Email.value
      })
      .then(({ data }) => console.log(data))
      .catch(({ data }) => console.log(data));
    } else {
      await axios.post("http://localhost:8800/clinicas", {
        CodCli: clinica.CodCli.value,
        NomeCli: clinica.NomeCli.value,
        Endereco: clinica.Endereco.value,
        Telefone: clinica.Telefone.value,
        Email: clinica.Email.value
      })
      .then(({ data }) => console.log(data))
      .catch(({ data }) => console.log(data));
    }

    clinica.CodCli.value = "";
    clinica.NomeCli.value = "";
    clinica.Endereco.value = "";
    clinica.Telefone.value = "";
    clinica.Email.value = "";

    setOnEditCli(null);
    getClinicas();
  }


  return(
    <>
      <FormContainer ref={refCli} onSubmit={handleSubmit}>
      <InputArea>
          <Label>CodCli</Label>
          <Input name="CodCli" />
        </InputArea>
        <InputArea>
          <Label>NomeCli</Label>
          <Input name="NomeCli" />
        </InputArea>
        <InputArea>
          <Label>Endereco</Label>
          <Input name="Endereco" />
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