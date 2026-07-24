
import Header from "./moviesApp/Header"
import Footer from "./moviesApp/Footer"
import HomeFilm from "./moviesApp/HomeFilm"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { MoviesProvider } from "./moviesContext/MovieContext"
import Favorite from "./moviesApp/favoriteFilm"
import Contact from "./moviesApp/Contact"
import Sahar from "./moviesApp/Sahar"
export default function App(){
 
  return(
    <>

    <BrowserRouter>


    <MoviesProvider>
  <Header />

    <Routes>

        <Route 
            path="/"
            element={<HomeFilm />}
        />


        <Route
            path="/favorite"
            element={<Favorite />}
        />

        <Route
         path="/Contact" 
         element ={<Contact />}
          />

            <Route path="/Sahar" element ={<Sahar />} />


    </Routes>

   
  <Footer />


</MoviesProvider>
    
    </BrowserRouter>

  
    
     
     
  
    </>


  )

}

