import PropTypes from 'prop-types'

const NewToDoForm =({ text = '', updateNewToDo, addToDoItem }) => {
    const sumbitOnEnter = ({ code }) => {
        if (code === 'Enter') {
            addToDoItem()
        }
    }
    return (
        <div>Form</div>
    )
}