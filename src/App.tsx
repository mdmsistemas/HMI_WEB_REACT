//import React from 'react';
//import logo from './logo.svg';
//import './App.css';
import RefreshProvider from './context/AutoRefresh';
import AppRouter from './AppRouter';

function App() {
  return (
      <RefreshProvider>  
          <div className="container pt-4">
              <AppRouter/>
          </div>   
      </RefreshProvider>
  );
}

export default App;
