import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import { DarkTheme } from './src/styles/DarkTheme';
import color from 'color'; 
import { PRIMARY, DARKBACKGROUND } from './src/styles/colors';
import { BaseContainer } from './src/components/BaseContainer';
import { Login } from './src/pages/Login';
import { Cadastro } from './src/pages/Cadastro';
import { Perfil } from './src/pages/Perfil';

export default function App() {
  return (
    <ThemeProvider theme={DarkTheme}>
      <StatusBar style="light" backgroundColor={color(DARKBACKGROUND).darken(0.6).hex()} translucent={false}/>
      <BaseContainer>
          <Perfil />
      </BaseContainer>
    </ThemeProvider>
  );
}

/* const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
}); */
