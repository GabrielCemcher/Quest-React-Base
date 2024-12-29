import './App.css'
import { ButtonAlerta } from './Components/Button-alerta/button-alerta'
import { ParagrafoCustomizado } from './Components/Paragrafos-customizados/paragrafos-customizados'

function App() {

  return (
    <>
      <h2>Desafio 1</h2>
      <ParagrafoCustomizado texto="Parágrafo personalizado" colorText={'blue'}></ParagrafoCustomizado>
      <br />
      <h2>Desafio 2</h2>
      <ButtonAlerta label='Baixar CV'></ButtonAlerta>
    </>
  )
}

export default App
