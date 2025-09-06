import { useEffect, useState } from 'react'

import './App.css'



function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://localhost:3001/")
    .then(res => res.text())
    .then(data => setMessage(data));
  }, []);


  return (
    <div>
      <h1>Landing Page</h1>
      <p>Resposta do backend: {message}</p>
    </div>
  )

}

export default App
