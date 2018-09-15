import React                              from 'react'
import ReactDOM                           from 'react-dom'
import {AppContainer}                     from 'react-hot-loader'
import Button                             from 'mui/Button'
import {MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles'
import blue from '@material-ui/core/colors/blue'

const theme = createMuiTheme({
    palette: {
        secondary: blue
    }
})

class App extends React.Component {
    render() {
        return <MuiThemeProvider theme={ theme }>
            <Button color={'secondary'}>aaaa</Button>
        </MuiThemeProvider>
    }
}

function run() {
    ReactDOM.render(
        <AppContainer><App/></AppContainer>, document.getElementById('app'))
}

run()

if (module.hot) {
    module.hot.accept(() => {
        run()
    })
}
// run()
