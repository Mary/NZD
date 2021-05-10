import { makeStyles, styled } from '@material-ui/core/styles'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever'
import ArrowRightIcon from '@material-ui/icons/ArrowRight'
import PropTypes from 'prop-types'


const Li = styled('li')({
  listStyleType: 'none',
  paddingTop: 10,
  marginLeft: -25,
  display: 'flex',
})

const useStyles = makeStyles({
  toDoItem: {
    textDecoration: ({ completed }: { completed: boolean }) => (completed ? 'line-through' : 'initial'),
    flexGrow: 1,
  },
})

const ToDoItem = ({ toDoItem, completeToDoItem, removeToDoItem }: {toDoItem: any, completeToDoItem: any, removeToDoItem: any}) => {

  const styleProps = {
    completed: toDoItem.completed,
  }
  const classes = useStyles(styleProps)
  return (
    <Li key={toDoItem.id}>
      <Typography
        variant="h5"
        onClick={() => completeToDoItem(toDoItem.id)}
        className={classes.toDoItem}
      >
     <div style={{
       display: 'flex',
       alignItems: 'center',
       flexWrap: 'wrap',
     }}>
        <ArrowRightIcon/>
    
      {toDoItem.text}
      </div>
      </Typography>
      <IconButton onClick={() => removeToDoItem(toDoItem.id)}>
        <DeleteForeverIcon />
      </IconButton>
    </Li>
  )
}

ToDoItem.propTypes = {
  toDoItem: PropTypes.shape({
    id: PropTypes.number,
    text: PropTypes.string,
    completed: PropTypes.bool,
  }),
}

export default ToDoItem
