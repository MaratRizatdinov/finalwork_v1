import React from 'react'
import { AppRoutes } from './routes'
import { GlobalStyle } from './GlobalStyle'
import { useSelector } from 'react-redux'

function App() {
  const isUser = useSelector((state) => state.user.authorization)
  return (
    <div className="App">
      <GlobalStyle/>
      <AppRoutes isUser={isUser}/>      
    </div>
  )
}

export default App
