import React from 'react'
import {useSelector} from "react-redux"
import SingleTodo from './SingleTodo';

const ListTodos = () => {
  // Store Abone Olma
  const merkeziVeri = useSelector((store) => store.todoReducer);
  
  return (
    <div>

    {merkeziVeri.sayi === 0 && <p> Doldur La Boş Alani.. </p>}

      {merkeziVeri.todos.map((todo) => (
        <SingleTodo  todo={todo}/>
      ))}
    </div>
  )
}

export default ListTodos
