import React, { useState, useEffect } from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import './App.css'

function App() {
  //cataas
  const url = `https://cataas.com/cat`

  //clock
  var start = new Date()

  const [date, setDate] = useState(start)
  

  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date())
    }, 1000)
    
    return () => clearInterval(timer)
    }, [setDate]
  )

  return (
    <div className="App">
      <AppBar color="default">
              <Toolbar >
                  <Typography variant="h6" color="inherit">
                      ChronoCat
                  </Typography>  
              </Toolbar>
          </AppBar>
          <Toolbar />
      <img src={url} alt="cat" />

      <h1>{date.toLocaleTimeString()}  </h1>

    </div>
  );
}

export default App;
