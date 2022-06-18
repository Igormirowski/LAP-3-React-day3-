import './App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';



function App() {
  const[students, setStudents] = useState([]) ;
  const[cohort, setCohort] = useState('') ;
  const[search, setSearch] = useState('') ;
  const[error, setError] = useState('') ; // state to handle errors 
  const[statusMessage, setStatusMeassage] = useState('Loading') ; //set status message , if it takes longer we tell component things are loading
  
  useEffect(() => {
    
    const fetchStudents = async (searchTerm) => { // create function with parameter
      searchTerm ||= 'auguste' // if the value is 0 please allocate 'auguste' instead
      // searchTerm = searchTerm ? searchTerm : 'auguste'
try {

  const url = `https://raw.githubusercontent.com/getfutureproof/fp_study_notes_hello_github/main/${searchTerm}/roster.json`
  // const { data: {students} } = await axios.get(URL) // Other way of doing it 
  // setStudents(students)
  const { data } = await axios.get(url)
  console.log('I was mouted')
  setStudents(data.students)
  setStatusMeassage('')
} catch (err) {
  console.log(err)
  setError(err)
  setStatusMeassage('Loading...')

    }

  }

  setTimeout(() => {
    fetchStudents(search)
    
  }, 3000);



  }, [search])

  // 3 scenarios:
  // nothing => useEffect will run like crazy
  // [] => useEffect will run oncuechange
  // [search, term] => use effect will run everytime the value changes

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
