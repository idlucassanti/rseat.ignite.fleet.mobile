import { TouchableOpacityProps } from "react-native";
import { Container, Title, Loading } from "./styles";

type Props = TouchableOpacityProps & {
  title: string;
  isLoading?: boolean;
}

export function Button({ title, isLoading = false, ...rest }: Props) {
  return (
    <Container
      activeOpacity={0.7} //nível de opacidade.
      disabled={isLoading} //desabilita o botão para que o usuário não clique várias vezes.
      {...rest}
    >
      {
        isLoading
          ? <Loading />
          : <Title>{title}</Title>
      }
    </Container>
  );
}
