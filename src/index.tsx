import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from 'styled-components'

import reportWebVitals from './reportWebVitals'
import { unregister } from './core'
import { GlobalStyles, theme } from './styles'
import { Content, Title, Card } from './components'
import Grid from './components/grid'

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <Content data-cy="content">
      <Title data-cy="title">Sudoku</Title>
      <Card data-cy="card">
        <Grid />
      </Card>
    </Content>
  </ThemeProvider>,
  document.getElementById('root')
)

reportWebVitals()
unregister()
