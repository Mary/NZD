import ToDoItem from './ToDoItem'

const ToDoList = ({ toDoItems, completeToDoItem, removeToDoItem }: {toDoItems: Array<any>, completeToDoItem: any, removeToDoItem: any}) => (
  <ul>
    {toDoItems.map((toDoItem: any) => (
      <ToDoItem
        key={toDoItem.id}
        toDoItem={toDoItem}
        completeToDoItem={completeToDoItem}
        removeToDoItem={removeToDoItem}
      />
    ))}
  </ul>
)

export default ToDoList
