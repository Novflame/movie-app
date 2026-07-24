import { Link } from "react-router-dom";
import "../index.css";


function Header(){

    return(

        <header className="header">

            <h1 className="header-name">
                Movie App
            </h1>


            <nav>

                <Link className="home-Link" to="/">
                    Home
                </Link>


                <Link to="/favorite">
                    Favorite
                </Link>

                <Link to ="/Contact" > contact </Link>

                 <Link to ="/Sahar" > msg for Sahar </Link>


            </nav>


        </header>

    )

}

export default Header;