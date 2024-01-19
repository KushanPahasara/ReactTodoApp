import { useState } from 'react'
import Todo from "./components/Todo"
import DisplayTodos from './components/DisplayTodos'
import "./css/main.css"
import { motion } from 'framer-motion'


function App() {
  

  return (
    <div className="App">
      
      < motion.h1 initial={{ y: -300}} animate={{ y:0 }} transition={{ type:"spring", duration: 2}}
      whileHover={{ scale: 1.1}}>Todo App</motion.h1>
      <motion.div initial={{ y: 1000}}
       animate={{ y:0 }}
       transition={{ type:"spring", duration: 2}}
      >
      <Todo />
      <DisplayTodos />

      </motion.div>
     
    </div>
  )
}

export default App
