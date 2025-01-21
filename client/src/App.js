import {useEffect} from "react"

function App(){
  useEffect(()=>{
    fetch("/movies")
    .then((r)=> r.json())
    .then((movies) => console.log(movies))
  }, [])



  return <h1>Check The Console for a list of all the movies!</h1>



}

export default App;