import CssBaseline from '@material-ui/core/CssBaseline'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'

import { styled } from '@material-ui/core'
import { useState } from 'react'

import CustomTheme from './components/CustomTheme.jsx'
import ToDoForm from './components/ToDoForm'
import ToDoList from './components/ToDoList'
import useLocalStorage from './hooks/useLocalStorage'

//styled typography for entire app

const CenteredTypography = styled(Typography)({
  textAlign: 'center',
})

const App = () => {
  const [newToDo, setNewToDo] = useState('')
  const [toDoItems, setToDoItems] = useLocalStorage('toDoItems', [])

  const updateNewToDo = (e: any) => setNewToDo(e.target.value)
  const addToDoItem = () => {
    if (newToDo) {
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
  const completeToDoItem = (id: number) => {
    setToDoItems(
      toDoItems.map((toDoItem: any) =>
        toDoItem.id === id ? { ...toDoItem, completed: true } : toDoItem
      )
    )
  }
  const removeToDoItem = (id: any) => {
    setToDoItems(toDoItems.filter((toDoItem: any) => toDoItem.id !== id))
  }

  return (
    <CustomTheme>
      <CssBaseline />
      <Grid container>
        <Grid item xl={4} md={3} sm={2} xs={12}></Grid>
        <Grid item xl={4} md={6} sm={8} xs={12}>
          <Paper style={{ padding: 10 }}>
            <CenteredTypography variant="h3">
              Non-Zero Days
            </CenteredTypography>
            <CenteredTypography>
        Step 1. Add Step 2. Complete Step 3. Celebrate!
            </CenteredTypography>
            <ToDoList
              toDoItems={toDoItems}
              completeToDoItem={completeToDoItem}
              removeToDoItem={removeToDoItem}
            />
            <ToDoForm
              text={newToDo}
              updateNewToDo={updateNewToDo}
              addToDoItem={addToDoItem}
            />
          </Paper>
        </Grid>
      </Grid>
    </CustomTheme>
  )
}

export default App
