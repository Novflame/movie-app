import { createContext, useContext, useState } from "react";
import { useEffect } from "react";
export const MoviesContext = createContext()

export  function MoviesProvider ({children}){
    const [favorite, setFavorite] = useState(() => {
  const saved = localStorage.getItem("favorite");
  return saved ? JSON.parse(saved) : [];
})
    const context = useContext(MoviesContext)
    console.log(context);
    useEffect(() => {
  localStorage.setItem("favorite", JSON.stringify(favorite));
}, [favorite]);
    


function addFavorite(movie){

    setFavorite(prev => {

        const alreadyExist = prev.some(
            item => item.id === movie.id
        );

        if(alreadyExist){
            return prev;
        }

        return [...prev, movie];
    });

}

    function removeFavorite(id){
        setFavorite(prev => prev.filter(movie => movie.id !== id))
    }
    const value = {
        favorite,
        addFavorite,
        removeFavorite
    };

return (
    <MoviesContext.Provider value={value}>
        {children}

    </MoviesContext.Provider>
)


}