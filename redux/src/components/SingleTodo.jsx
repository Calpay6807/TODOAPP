import React from 'react'
import { useDispatch } from 'react-redux'

const SingleTodo = ({todo}) => {
    //dispatch methodunu kurma

    const dispatch = useDispatch();

    // sil butonuna tıklanır
   const handleDelete = () => {
    dispatch({
        //silme işlemi gerçekleştirmek istediğimizi 
        // belirten eylemi reducura sevk ettik
       type: "DELETED_TODO",
       payload: todo.id
    })
   }

   const handleUpdate = () =>{
    //Güncellenicek elemanı ve elemanın güncel ahalini stora gönderme
    //elemanı güncellme

    const updateTodo ={...todo, isDone: !todo.isDone}

    //güncel halini reducura gönderme

    dispatch({
      type:"UPDATED_TODO",
      payload: updateTodo,
    })
   }

  return (
    <div className='card'>
   <div className='card-body'>
      <h4 className='lead my-4'>{todo.text}</h4>
      <h5 className='lead my-4'>{todo.isDone ? "Tamamlandi" : "Devam Ediyor"}</h5>   
      <p>{new Date(todo.date).toLocaleDateString()}</p>
      <button onClick={handleUpdate} className='btn btn-warning'>{todo.isDone ? "Geri Al" : "Tamamla"}</button>
      <button onClick={handleDelete} className='btn btn-danger'>Sil</button>

      </div>
      </div>
  )
}

export default SingleTodo
