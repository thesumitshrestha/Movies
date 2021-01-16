import './App.css';
import Movie from "./components/Movie";
import React, {useEffect, useState} from 'react'

const FEATURED_API = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const SEARCH_API = "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&page=1&query=";

function App() {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState([]);

    useEffect(() => {
        getMovies(FEATURED_API);
    }, []);

    const getMovies = (API) => {
        fetch(API)
            .then((res) => res.json())
            .then((data) => {
                setMovies(data.results);
            });
    };

    const handleOnSubmit = (e) => {
        e.preventDefault();

        if (searchTerm) {
            getMovies(SEARCH_API + searchTerm);
            setSearchTerm('');
        }
    };

    const handleOnChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const noMovie = () => {
        return (
            <>
                <div className="text-center no-found">
                    <h1> No Movies Found </h1>
                    {/*<h4><em> Some of the famous movies </em></h4>*/}
                </div>
            </>
        )
    };

    return (

        <>
            <header>
                <div className="logo">
                    Movies List
                </div>
                <form action="" onSubmit={handleOnSubmit}>
                    <input
                        className="search"
                        type="text"
                        value={searchTerm}
                        placeholder="Search..."
                        onChange={handleOnChange}
                    />
                </form>
            </header>

            <div className="movie-container">
                {movies.length > 0 ?
                    movies.map((movie) => <Movie key={movie.id}{...movie}  />) : noMovie()
                }

            </div>
        </>
    );

}

export default App;
