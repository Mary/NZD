import PropTypes from 'prop-types'

const ToDoItem =({toDoItem, completeToDoItem, removeToDoItem}) => {
    <li key={toDoItem.id}>
        {toDoItem.text}
    </li>
}
ToDoItem.prototypes ={
    toDoItem: PropTypes.shape({
        id: PropTypes.number,
        text: PropTypes.string,
        completed: PropTypes.bool,

    })
}
export default ToDoItem