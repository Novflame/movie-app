// import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';
// import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
// import AirplayIcon from '@mui/icons-material/Airplay';

// import "../index.css";

// import { MoviesContext } from '../moviesContext/MovieContext';
// import { useContext } from 'react';


// const Moviecard = ({ movie }) => {

//     const { addFavorite } = useContext(MoviesContext);


//     return (

//         <div className="card">

//             <div className="icons">

//                 <FavoriteBorderIcon
//                     onClick={() => addFavorite(movie)}
//                 />

//                 <AirplayIcon />

//                 <DownloadForOfflineIcon />

//             </div>


//             <img
//                 src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
//                 alt={movie.title}
//                 className="img"
//             />


//             <div className="movie-info">

//                 <h2 className="title">
//                     {movie.title}
//                 </h2>


//                 <p className="date">
//                     {movie.release_date}
//                 </p>

//             </div>


//         </div>

//     );
// };


// export default Moviecard;
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AirplayIcon from '@mui/icons-material/Airplay';

import "../index.css";

import { MoviesContext } from '../moviesContext/MovieContext';
import { useContext } from 'react';


const Moviecard = ({ movie }) => {

    const { favorite, addFavorite, removeFavorite } = useContext(MoviesContext);


    const isFavorite = favorite.some(
        item => item.id === movie.id
    );


    const handleFavorite = () => {

        if (isFavorite) {
            removeFavorite(movie.id);
        } else {
            addFavorite(movie);
        }

    };


    return (

        <div className="card">

            <div className="icons">

                {
                    isFavorite ?

                    <FavoriteIcon
                        className="fav active"
                        onClick={handleFavorite}
                    />

                    :

                    <FavoriteBorderIcon
                        className="fav"
                        onClick={handleFavorite}
                    />
                }


                <AirplayIcon />

                <DownloadForOfflineIcon />

            </div>


            <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className="img"
            />


            <div className="movie-info">

                <h2 className="title">
                    {movie.title}
                </h2>


                <p className="date">
                    {movie.release_date}
                </p>

            </div>


        </div>

    );
};


export default Moviecard;