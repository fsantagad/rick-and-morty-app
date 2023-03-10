import React from 'react';
import './App.css';
import 'react-loading-skeleton/dist/skeleton.css'
import Header from './components/Header';
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./themes/GlobalStyles";
import { lightTheme, darkTheme } from "./themes";
import { useTheme } from "./hooks/useTheme";
import CharactersLit from './components/CharactersList';

function App() {
  const [theme, themeToggler] = useTheme();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyles />
      <div className="App">
        <Header 
          title='Rick and Morty app' 
          subtitle='(Click on item to see more details)'
          theme={theme} 
          themeToggler={themeToggler} />
        <CharactersLit />
      </div>
    </ThemeProvider>
  );
}

export default App;
