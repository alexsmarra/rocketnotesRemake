import { Container } from './styles'

import { Button } from '../../components/Button'

export function Details() {
  return (
    <Container>
      <h1>Olá a todos!</h1>
      <span>Exemplo</span>

      <Button title="Cadastrar" />
      <Button title="Entrar" />
      <Button title="Voltar" />
    </Container>
  )
}