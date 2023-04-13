import React from "react";

import { FaTrash, FaEdit } from "react-icons/fa";

import axios from "axios";

import { Table, Thead, Tr, Th, Tbody, Td } from "../styles/Grid";
import { toast } from "react-toastify";

export const GridClinica = ({ clinicas, setOnEditCli, getClinicas }) => {
  
  const handleDelete = async (CodCli) => {
    console.log(CodCli)
    await axios
    .delete(`http://localhost:8800/clinicas/${CodCli}`)
    .then(({ data }) => {
      getClinicas();
      console.log(data);
    })
    .catch(({ data }) => {
      console.log(data)
    })
  }

  const handleEdit = async (item) => {
    setOnEditCli(item);
  }

  return(
    <>
      <Table>
        <Thead>
          <Tr>
            <Th>Código</Th>
            <Th>Nome</Th>
            <Th>Endereço</Th>
            <Th onlyWeb>Telefone</Th>
            <Th>Email</Th>
            <Th></Th>
            <Th></Th>
          </Tr>
        </Thead>
        <Tbody>
          {clinicas.map((item, i) => 
            <Tr key={i}>
              <Td >{item.CodCli}</Td>
              <Td >{item.NomeCli}</Td>
              <Td >{item.Endereco}</Td>
              <Td  onlyWeb>{item.Telefone}</Td>
              <Td >{item.Email}</Td>
              <Td alighCenter >
                <FaEdit onClick={() => handleEdit(item)}/>
              </Td>
              <Td alighCenter >
                <FaTrash onClick={() => handleDelete(item.CodCli)}/>
              </Td>
            </Tr>
          )}
        </Tbody>

      </Table>
      
    </>
  )
}