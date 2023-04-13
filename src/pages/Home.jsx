import { Clinicas } from "../components/Clinicas";
import { Medicos } from "../components/Medicos";
import { ClinicaMedico } from "../components/ClinicaMedico";

export const Home = () => {
  return(
    <>
      <Clinicas/>
      <Medicos/>
      <ClinicaMedico/>
    </>
  )
}