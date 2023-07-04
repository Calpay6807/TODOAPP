import './App.css'
import AddTodos from './components/AddTodos'
import ListTodos from './components/ListTodos'

function App() {
  

  return (
    <div className='d-flex flex-column align-items-center justify-content-center'>
    <h1>Redux</h1>

    <AddTodos/>
    <ListTodos/>
    </div>
  )
}

export default App
