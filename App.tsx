import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';
import { ThemeProvider } from 'styled-components/native';
import theme from './src/theme/index';

import { SignIn } from './src/screens/SignIn';
import { Loading } from './src/components/Loading';

export default function App() {
  const [ fontsLoaded ] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold
  });

  if (!fontsLoaded) {
    return (
      <Loading />
    );
  }

  return (
    <ThemeProvider theme={theme}>
      <SignIn />
    </ThemeProvider>
  );
}
