import { Fragment } from "react"
/* Quando importamos assim, automaticamente será aplicado o css em nossos elementos dessa página */
import "./styles.css"

export function Details() {
  return (
    /* Podemos utilizar o Fragment para embrulhar os elementos, mas ele (<Fragment>) não pode 
    ser estilizado; caso precisemos de estilizar, podemos embrulhar os elementos com uma <div> 
    comum mesmo. */
    <Fragment>
      <h1>Olá a todos!</h1>
      <span>Exemplo</span>
    </Fragment>
  )
}