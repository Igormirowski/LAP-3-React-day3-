import './App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';


const URL ="https://raw.githubusercontent.com/getfutureproof/fp_study_notes_hello_github/main/auguste/roster.json"

function App() {
  const[students, setStudents] = useState([]) ;


  useEffect(() => {

    const fetchStudents = async () => {
      // const { data: {students} } = await axios.get(URL) // Other way of doing it 
      // setStudents(students)
      const { data } = await axios.get(URL)
      console.log('I was mouted')
      setStudents(data.students)
    }

    fetchStudents()

  }, [])

const renderedStudents = students.map(st => {
  return (<li>{st.name}</li>)
  
})

  console.log(students)


  return (
    <div className="App">
      <header className="App-header">
       <ul>
         {/* App Component */}
         {renderedStudents}
         </ul>
      </header>
    </div>
  );
}

export default App;
