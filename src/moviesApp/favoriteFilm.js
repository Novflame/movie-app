import { useContext } from "react";
import Moviecard from "./MovieCard";
import { MoviesContext } from "../moviesContext/MovieContext";

function Favorite() {
    const { favorite } = useContext(MoviesContext)
    
    
    return (
        <div className="favr">
            <h1 className="fav-msg">your favorit movies</h1>
            <div className="fav-div">
                {favorite.map(movie => (<Moviecard
                    key={movie.id}
                    movie={movie} />))}
            </div>

        </div>
    )
}
export default Favorite