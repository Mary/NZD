import { useState } from 'react'
import useLocalStorage from './hooks/useLocalStorage'
// import ToDoForm from './components/ToDoForm'
import ToDoList from './components/ToDoList'

const App = () => {
  const [newToDo, setNewToDo] = useState('')
  const [toDoItems, setToDoItems] = useLocalStorage('toDoItems', [])

  const updateNewToDo = (e) => setNewToDo(e.target.value)
  const addToDoItem = () => {
    if(newToDo) {
      setToDoItems([
        ...toDoItems,
        {
          id: new Date().valueOf(),
          completed: false,
          text: newToDo,
        },
      ])
      setNewToDo('')
    }
  }
  const completeToDoItem =(id: number) => {
    setToDoItems(
//       toDoItems.map((toDoItem)) =>
//       toDoItem.id === id ? { ...toDoItem, completed: true } : toDoItem
//     )
//   }
//   const deleteToDoItem =(id: number) => {
//     setToDoItems(toDoItems.filter((toDoItem) =>deleteToDoItem.id !== id))
//   }

//   return (
//     <h1>Tonic To Do List</h1>
  )
}
export default App
