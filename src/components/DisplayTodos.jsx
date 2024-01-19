import React, { useState } from 'react'
import { connect } from 'react-redux'
import { addTodos, completeTodos, removeTodos, updateTodos } from "../redux/reducer";
import TodoItem from './TodoItem';
import { AnimatePresence, motion } from 'framer-motion'

const mapStateToProps = (state) => {
  return {
    todos: state,

  };
};

const mapDispatchToProps = (dispatch) =>{
    return {
        addTodo: (obj) => dispatch(addTodos(obj)),
        removeTodo: (id) => dispatch(removeTodos(id)),
        updatetodo: (obj) => dispatch(updateTodos(obj)),
        completeTodo: (id) => dispatch(completeTodos(id)),
    };
};

const DisplayTodos = (props) => {
   const [sort, setSort]= useState("active")
  return (
    <div className="displaytodos">
        <div className="buttons">
            <button onClick={()=>setSort("active")}>Active</button>
            <button onClick={()=>setSort("completed")}>Completed</button>
            <button onClick={()=>setSort("all")}>All</button>

        </div>
        <ul>
           <AnimatePresence>
           {props.todos.length > 0 && sort === "active" 
                  ? props.todos.map((item) => {
                     return (
                       item.completed === false && (
                       <TodoItem 
                          key={item.id}
                          item={item}
                          removeTodo={props.removeTodo}
                          updatetodo={props.updatetodo}
                          completeTodo={props.completeTodo}

                       />
                    )  
                 );
                
            })
         : null}
          {props.todos.length > 0 && sort === "completed" 
                  ? props.todos.map((item) => {
                     return (
                       item.completed === true && (
                       <TodoItem 
                          key={item.id}
                          item={item}
                          removeTodo={props.removeTodo}
                          updatetodo={props.updatetodo}
                          completeTodo={props.completeTodo}

                       />
                    )  
                 );
                
            })
         : null}
          {props.todos.length > 0 && sort === "all" 
                  ? props.todos.map((item) => {
                     return (
                       <TodoItem 
                          key={item.id}
                          item={item}
                          removeTodo={props.removeTodo}
                          updatetodo={props.updatetodo}
                          completeTodo={props.completeTodo}
                       />  
                 );  
            })
         : null}
           </AnimatePresence>
        </ul>
    </div>
  );
};

export default connect(mapStateToProps,mapDispatchToProps)(DisplayTodos);

