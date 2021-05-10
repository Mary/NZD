import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'


//dark theme default -- can add preference with type: prefersDarkMode ?
const theme = createMuiTheme({
  palette: {
    type: 'dark',
  },
})

const CustomTheme = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

export default CustomTheme

