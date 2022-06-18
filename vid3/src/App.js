import './App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';


const URL ="https://raw.githubusercontent.com/getfutureproof/fp_study_notes_hello_github/main/auguste/roster.json"

function App() {
  const[students, setStudents] = useState([]) ;
  const[cohort, setCohort] = useState('') ;
  const[search, setSearch] = useState('') ;

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
  return (
  <li key={st.github}>{st.name}</li>

  )
  
})

const onInputChange = (e) => {
setCohort(e.target.value)
}
  // console.log(students)

  const onFormSubmit = (e) => {
    e.preventDefault()  // prevent default behaviour when form is submitted that refeshes the page
    setSearch(cohort)
    setCohort('')
  }

  return (
    <div className="App">
      <header className="App-header">
       <ul>
         
         {renderedStudents}
         </ul>

         <form onSubmit={onFormSubmit}>
          <label htmlFor="cohort">Cohort</label>
          <input 
          type="text" 
          id="cohort" 
          value={cohort} 
          onChange={onInputChange}
          />
         </form>
      </header>
    </div>
  );
}

export default App;
