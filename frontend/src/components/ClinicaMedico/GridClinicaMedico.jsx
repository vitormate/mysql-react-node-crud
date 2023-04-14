import React from "react";

import { FaTrash, FaEdit } from "react-icons/fa";

import axios from "axios";

import { Table, Thead, Tr, Th, Tbody, Td } from "../../styles/Grid";

export const GridClinicaMedico = ({ clinicaMedico, setOnEditCliMed, getCliMed }) => {
  
  const handleDelete = async (CodCli, CodMed) => {
    console.log(CodCli, CodMed)
    await axios
    .delete(`http://localhost:8800/clinicaMedico/${CodCli}/${CodMed}`)
    .then(({ data }) => {
      getCliMed();
      console.log(data);
    })
    .catch(({ data }) => console.log(data));
  }

  const handleEdit = async (item) => {
    setOnEditCliMed(item);
  }

  return(
    <>
      <Table>
        <Thead>
          <Tr>
            <Th>Código Clinica</Th>
            <Th>Código Médico</Th>
            <Th>Data Ingresso</Th>
            <Th onlyWeb>Carga Horaria Semanal</Th>
            <Th></Th>
            <Th></Th>
          </Tr>
        </Thead>
        <Tbody>
          {clinicaMedico.map((item, i) => 

            <Tr key={i}>
              <Td >{item.CodCli}</Td>
              <Td >{item.CodMed}</Td>
              <Td >{item.DataIngresso.slice(0, 10)}</Td>
              <Td alighCenter  onlyWeb>{item.CargaHorariaSemanal}</Td>
              <Td alighCenter >
                <FaEdit onClick={() => handleEdit(item)}/>
              </Td>
              <Td alighCenter >
                <FaTrash onClick={() => handleDelete(item.CodCli, item.CodMed)}/>
              </Td>
            </Tr>
          )}
        </Tbody>

      </Table>
      
    </>
  )
}