import { makeStyles } from '@material-ui/core/styles'

import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import PropTypes from 'prop-types'

const useStyles = makeStyles({
  form: {
    display: 'flex',
  },
  textField: {
    flexGrow: 1,
  },
})

const NewToDoForm = ({ text, updateNewToDo, addToDoItem }: {text: string, updateNewToDo: any, addToDoItem: any}) => {
  const classes = useStyles()

  const submitOnEnter = ({ code }: {code: any}) => {
    if (code === 'Enter') {
      addToDoItem()
    }
  }
  
  return (
    <div className={classes.form}>
      <TextField
        value={text}
        onChange={updateNewToDo}
        onKeyDown={submitOnEnter}
        size="small"
        fullWidth
        className={classes.textField}
      />
      <Button onClick={addToDoItem}>Submit</Button>
    </div>
  )
}

NewToDoForm.propTypes = {
    code: PropTypes.any,
  text: PropTypes.string,
  updateNewToDo: PropTypes.func,
  addToDoItem: PropTypes.func,
}

export default NewToDoForm
