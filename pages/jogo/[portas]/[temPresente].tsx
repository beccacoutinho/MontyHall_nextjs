import styles from "../../../styles/Jogo.module.css"
import { useEffect, useState } from "react"
import Porta from "../../../components/Porta"
import { atualizarPortas, criarPortas } from "../../../funtions/portas"
import Link from "../../../node_modules/next/link"
import { useRouter } from "../../../node_modules/next/router"



export default function jogo(){

  const router = useRouter()

  const[valido, setValido] = useState(false)
  const[portas, setPortas] = useState([])

  useEffect(() => {
    const portas = +router.query.portas
    const temPresente = +router.query.temPresente
    
    const qtdePortasValidas = portas >= 3 && portas <= 100
    const temPresenteValido = temPresente >= 1 && temPresente <= portas

    setValido (qtdePortasValidas && temPresenteValido)
  }, [portas])
  
  useEffect(() => {
    const portas = +router.query.portas
    const temPresente = +router.query.temPresente

    setPortas(criarPortas(portas, temPresente))
  }, [router?.query])


  function renderizarPortas(){
    return portas.map( porta => {
      return <Porta key={porta.numero} value={porta} 
      onChange={novaPorta => setPortas(atualizarPortas(portas, novaPorta))}/>
    })
  }

  return (
    <div className={styles.jogo}>
        <div className={styles.portas}>
            {valido ? renderizarPortas() : 
            <h1>Valores inválidos</h1>}
        </div>
        <div className={styles.botoes}>
            <Link href="/"><button>Reiniciar jogo</button></Link>
        </div>
    </div>
  )
}