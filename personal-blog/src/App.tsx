import './App.css'
import { Route, Routes } from 'react-router-dom'



import Home from './routes/home/home.route'
import Navigation from './routes/navigation/navigation.route'
import Coding from './routes/coding-projects/coding.route'
import Writing from './routes/writing-projects/writing-projects.route'
import Hobbies from './routes/hobbies/hobbies.route'

function App() {
  // use an empty tag instead of fragment in vite/typescript <> </>


  

  return (
    <>
      <Routes>
        <Route path='/' element={<Navigation />} > 
          <Route index element={<Home/>} />
          <Route path='coding-projects' element={<Coding/>} />
          <Route path='writing-projects' element={<Writing/>} />
          <Route path='hobbies' element={<Hobbies/>} />
        </Route>
        

      </Routes>

      
    </>
  )
}

export default App
