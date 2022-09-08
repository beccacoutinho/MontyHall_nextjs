import { useState } from "react";
import Porta from "../components/Porta";
import Presente from "../components/Presente";
import { atualizarPortas, criarPortas } from "../funtions/portas";
import PortaModel from "../model/porta";

export default function Home() {

  return (
    <div style={{display: "flex"}}>
      <h1>Formulário de inicio</h1>
    </div>
  )
}
