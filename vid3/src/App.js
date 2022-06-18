import './App.css';
import React, { useEffect } from 'react';
import axios from 'axios';


const URL ="https://raw.githubusercontent.com/getfutureproof/fp_study_notes_hello_github/main/auguste/roster.json"

function App() {
  useEffect(() => {
     const response = axios.get(URL)
  }, [])
  return (
    <div className="App">
      <header className="App-header">
       App component
      </header>
    </div>
  );
}

export default App;
