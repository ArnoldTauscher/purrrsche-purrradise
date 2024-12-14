import React from 'react';
import { ThemeProvider, useTheme } from './components';
import { Welcome, WakeUp, NavBar, PurrrscheModels, Footer } from './components';
import { Header, WhatIsSomething, News, Library } from './containers';
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

const AppContent = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <div className={`app ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      <div className="App">
        <Welcome />
        <WakeUp />
        <div className='gradient__bg'> 
        <NavBar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />          
        <Header />      
        <WhatIsSomething />
        <PurrrscheModels />
        <News />
        <Library />     
        <Footer />
        </div>   
      </div>
    </div>
  );
};

export default App;
