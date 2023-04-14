import { Clinicas } from "../components/Clinica/Clinicas";
import { Medicos } from "../components/Medico/Medicos";
import { ClinicaMedico } from "../components/ClinicaMedico/ClinicaMedico";

export const Home = () => {
  return(
    <>
      <Clinicas/>
      <Medicos/>
      <ClinicaMedico/>
    </>
  )
}