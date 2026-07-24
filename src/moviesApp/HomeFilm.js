import Moviecard from "./MovieCard"
import "../index.css"
import Button from '@mui/material/Button';
import { useState} from "react";
import TextField from '@mui/material/TextField';
import useMovies from "../hooks/useMovies";
const HomeFilm = () => {
    const [search, setSearch] = useState("")
    const {movies} = useMovies()
    

const handleSubmit = (e)=>{
    e.preventDefault()
    setSearch("")

}
    return(
    
    <>
      <div>
            <form onSubmit={handleSubmit} 
             className="main-form">
        <TextField style={{backgroundColor:'white'}}
                value = {search}
                 onChange={(e)=>setSearch(e.target.value)}
                  className="seach-feild"
                 label="search for movie" 
                 
                 variant="outlined"/>
                 <Button type="submit" style={{color:"white"}}
                  className="seach-btn" > search</Button>
            </form>
        </div>
    
    <div className="main">

    { movies.map((movie)=>(
        movie.title.toLocaleLowerCase().startsWith(search) &&
       <div key={movie.id} className="card"> <Moviecard key={movie.id}
        movie={movie}/>
       </div>
    ))}
    
    
    </div>

    </>

)
    

 
     
    
    

}
export default HomeFilm





