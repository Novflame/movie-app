
import { getMovies } from "../apis/Api"
import { useState, useEffect } from "react"
const useMovies = ()=>{
const [movies, setMovies] = useState([])
    const [errorr, setErrorr] = useState(null)

    useEffect(()=>{
        async function loadMovies(){
            try{
                 const data = await getMovies();
                 setMovies(data)
            }catch(err){
                setErrorr(err.message)
            }
           
        }
        loadMovies()
    },[])
    return (
      {movies, errorr}
    )



}
export default useMovies
