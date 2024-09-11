import React from 'react';
import './App.css';
import Card from './Card';

function App() {
  return (
    <div className="App">
      <h1>Ex1</h1>
      <Card
        name="Card"
        description="Card desc"
      />
      <Card
        name="Card2"
        description="Card desc2"
      />
    </div>
  );
}

export default App;
