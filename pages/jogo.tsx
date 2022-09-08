import styles from "../styles/Jogo.module.css"
import { useState } from "react"
import Porta from "../components/Porta"
import { atualizarPortas, criarPortas } from "../funtions/portas"
import Link from "../node_modules/next/link"



export default function jogo(){
    const[portas, setPortas] = useState(criarPortas(3,2))

  function renderizarPortas(){
    return portas.map( porta => {
      return <Porta key={porta.numero} value={porta} 
      onChange={novaPorta => setPortas(atualizarPortas(portas, novaPorta))}/>
    })
  }

  console.log(criarPortas(3,2))
  

  return (
    <div className={styles.jogo}>
        <div className={styles.portas}>
            {renderizarPortas()}
        </div>
        <div className={styles.botoes}>
            <Link href="/"><button>Reiniciar jogo</button></Link>
        </div>
    </div>
  )
}