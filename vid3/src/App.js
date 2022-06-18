import './App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';


const URL ="https://raw.githubusercontent.com/getfutureproof/fp_study_notes_hello_github/main/auguste/roster.json"

function App() {
  useEffect(() => {


    const fetchStudents = async () => {

      const {data} = await axios.get(URL)
   
      console.log(data)
    }
    fetchStudents()

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
