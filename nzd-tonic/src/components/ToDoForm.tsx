import { makeStyles } from '@material-ui/core/styles'

import Button from '@material-ui/core/Button'
import FormControl from "@material-ui/core/FormControl";
import TextField from '@material-ui/core/TextField'
import InputLabel from '@material-ui/core/InputLabel';
import InputIcon from '@material-ui/icons/Input';
import PropTypes from 'prop-types'
import { FormHelperText, InputAdornment } from '@material-ui/core';

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
  <div>
    <FormControl className={classes.form}>
      <TextField
      variant="outlined"
       size="small"
        id="input-with-icon"
        aria-describedby="my-helper-text" 
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">  
              <InputIcon/>
            </InputAdornment>
          ),
        }}
        value={text}
        onChange={updateNewToDo}
        onKeyDown={submitOnEnter}
        fullWidth
        className={classes.textField}
      />
      <FormHelperText 
      id="my-helper-text"
      >
        Add A Task You'd Like To Get Done Here
        </FormHelperText>
    </FormControl>
    <Button 
    variant="contained"
    onClick={addToDoItem}>
      Submit
    </Button>
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
