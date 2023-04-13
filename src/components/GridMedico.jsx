import React from "react";

import { FaTrash, FaEdit } from "react-icons/fa";

import axios from "axios";

import { Table, Thead, Tr, Th, Tbody, Td } from "../styles/Grid";

export const GridMedico = ({ medicos, setOnEdit, getMedicos }) => {
  
  const handleDelete = async (CodMed) => {
    console.log(CodMed)
    await axios
    .delete(`http://localhost:8800/medicos/${CodMed}`)
    .then(({ data }) => {
      
      getMedicos();
      console.log(data);
    })
    .catch(({ data }) => console.log(data));
  }

  const handleEdit = async (item) => {
    setOnEdit(item);
  }

  return(
    <>
      <Table>
        <Thead>
          <Tr>
            <Th>Código</Th>
            <Th>Nome</Th>
            <Th>Gênero</Th>
            <Th onlyWeb>Telefone</Th>
            <Th>Email</Th>
            <Th></Th>
            <Th></Th>
          </Tr>
        </Thead>
        <Tbody>
          {medicos.map((item, i) => 
            
            <Tr key={i}>
              <Td >{item.CodMed}</Td>
              <Td >{item.NomeMed}</Td>
              <Td >{item.Genero}</Td>
              <Td  onlyWeb>{item.Telefone}</Td>
              <Td >{item.Email}</Td>
              <Td alighCenter >
                <FaEdit onClick={() => handleEdit(item)}/>
              </Td>
              <Td alighCenter >
                <FaTrash onClick={() => handleDelete(item.CodMed)}/>
              </Td>
            </Tr>
          )}
        </Tbody>

      </Table>
      
    </>
  )
}