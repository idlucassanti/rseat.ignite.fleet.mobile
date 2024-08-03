import backgroundImage from '../../assets/background.png';
import { Button } from '../../components/Button';
import { Container, Title, Slogan } from "./styles";

export function SignIn() {
  return (
    <Container source={backgroundImage}>
      <Title>Ignite Fleet</Title>
      <Slogan>Gestão de uso de veículos</Slogan>

      <Button title='Entrar com o Google' />
    </Container>
  );
}