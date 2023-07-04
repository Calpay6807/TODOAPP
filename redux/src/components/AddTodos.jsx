import {useState} from 'react'
import {useDispatch} from "react-redux"

const AddTodos = () => {
    //distpach methodunu kurma
    const dispatch = useDispatch();

    const[text, setText] = useState('')
    

    //form gönderildiğinde veriyi store aktarma
    const handleSubmit = (e) => {
        e.preventDefault()
        const newTodo ={
            id: new Date().getTime(),
            text,
            isDone: false,
            date: new Date(),
        };

        /*
        !Oluşturduğumuz objeyi stora aktarma
        * storda değişiklik yapmanın tek yolu 
        *bir eylemi (action)'ı dispatch yöntemiyle reducura sevk etmek
        */
       
        dispatch({
          type:'ADD_TODO',
          payload :newTodo
        })
        
    };

  return (
    <form className='d-flex'  onSubmit={handleSubmit}>
    
      <input className='form-control' type="text" onChange={(e) => setText(e.target.value)}/>
      <button className='btn btn-primary'>Ekle</button>
    </form>
  )
}

export default AddTodos
