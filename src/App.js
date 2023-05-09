import React from 'react';
import './App.css';
import Header from './components/Header'
import Main from './components/Main'
import AsideNav from './components/AsideNav'

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <AsideNav/>
    </div>
  );
}

export default App;