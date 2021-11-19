import React, { useState, useEffect } from 'react'

import './Cat.css'

function Cat() {
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
      <div className="Cat">
        <img src={url} alt="cat" />
        <h1>{date.toLocaleTimeString()}  </h1>
      </div>
  );
}

export default Cat;