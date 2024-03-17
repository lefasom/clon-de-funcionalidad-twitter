import { useEffect, useState } from 'react'
import  Axios  from 'axios'
import './App.css'

function App() {
  const [data, setData] = useState([])
  const getTasks = async() => {
    const resp = await Axios.get('http://localhost:3000/tasks')
    setData(resp.data)
  }
  useEffect(()=>{
    getTasks()
  },[])
  return (
    <>
   <h1>HOLA MUNDO</h1>
   {data.map((val)=>{
    return(
    <div key={val.id}>
      <h6>{val.title}</h6>
      <p>{val.description}</p>
    </div>
    )
  })}
    </>
  )
}

export default App
