import React, { useRef } from 'react'
import { FaEdit } from "react-icons/fa";
import { MdDoneOutline } from "react-icons/md";
import { MdDeleteForever } from "react-icons/md";
import { motion } from 'framer-motion'

const TodoItem = (props) => {
    const {item, updatetodo, removeTodo, completeTodo} = props;
    
   const inputRef =useRef(true);

   const changeFocus = () => {
       inputRef.current.disabled = false;
       inputRef.current.focus();
   };

   const update = (id,value,e) =>{

       if(e.which === 13){
          
         updatetodo({id, item:value });
         inputRef.current.disabled = true;
       }
   };

  return (
     <motion.li 
     
     initial={{x:"150vw",
     transition:{type: "spring", duration: 2}, 

    }}
     animate={{x: 0,
     transition:{type: "spring", duration: 2}, 

    }}
    
      
     whileHover={{ scale: .9, transition:{type:"spring",
      duration: .5
    } 
  }}
    exit={{
      x:"-60vw",
      scale:[1, 0],
      transition: { duration: 0.5 },
      backgroundColor: "rgba(255,0,0,1)"


    }}
     key={item.id} className="card">
         <textarea 
           ref={inputRef}
           disabled={inputRef} 
           defaultValue={item.item}
           onKeyUp={(e) => update(item.id, inputRef.current.value, e)}
         /> 
         <div className="btns">
         <button onClick={() => changeFocus()}><FaEdit /></button>
         
         {
          item.completed === false && (
            <button 
         style={{color: "green"}}
         onClick={() => completeTodo(item.id)}><MdDoneOutline /></button>
          )}
         <button 
         style={{color: "red"}}
         onClick={() => removeTodo(item.id)}><MdDeleteForever /></button>{" "}
         </div>
         {item.completed && <span className="completed">done</span>}
        
         </motion.li>
  )
}

export default TodoItem
