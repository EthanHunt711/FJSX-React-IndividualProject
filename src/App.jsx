import Header from './Components/Header/Header'
import Content from './Components/Content/Content'
import Footer from './Components/Footer/Footer'


import { useState } from 'react'
import './App.css'


const date = `${new Date().getFullYear()}-${(new Date().getMonth()+1 < 10 ? `0${new Date().getMonth()+1}` : `${new Date().getMonth()+1}`)}-${(new Date().getDate() < 10 ? `0${new Date().getDate()}` : `${new Date().getDate()}`)}`

function App() {
  
  const [addedDate, setAddedDate] = useState(date)

  const [columns, setColumns] = useState([])

  const [addToDoCard, setAddToDoCard] = useState([])

  const [addDoingCard, setAddDoingCard] = useState([])

  const [addDoneCard, setAddDoneCard] = useState([])

  const [isLoading, setIsLoading] = useState(true)

  return (
    <>
      <Header />
      <main>
        <Content 
          columns={columns}
          addedDate={addedDate}
          setAddedDate={setAddedDate}
          addToDoCard= {addToDoCard}
          setAddToDoCard={setAddToDoCard}
          addDoingCard={addDoingCard}
          setAddDoingCard={setAddDoingCard}
          addDoneCard={addDoneCard}
          setAddDoneCard={setAddDoneCard}
        />
      </main>
      <Footer />
    </>
  )
}

export default App
