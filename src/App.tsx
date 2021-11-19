import React, { useState, useEffect } from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Cat from './Cat'
import './App.css'

function App() {
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
      <div className="Container">
        <Cat />
      </div>
      
    </div>
  );
}

export default App;
