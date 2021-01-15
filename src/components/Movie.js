import React from 'react';

const IMAGE_API = "https://image.tmdb.org/t/p/w1280/";

const setVoteClass = (vote) => {
    if (vote >= 8) {
        return 'green'
    } else if (vote >= 6) {
        return 'orange'
    } else {
        return 'red';
    }
};

const Movie = ({title, poster_path, overview, vote_average, release_date}) => (
        <div className="movie">
            <img src={poster_path ? IMAGE_API + poster_path :
                "https://images.unsplash.com/photo-1515634928627-2a4e0dae3ddf?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=" +
                "rb-1.2.1&auto=format&fit=crop&w=2100&q=80"
            }
                 alt={title}/>
            <div className="movie-info">
                <h3> {title} </h3>
                <span className={`tag ${setVoteClass(vote_average)}`}> {vote_average} </span>
            </div>

            <div className="movie-over">
                <h2> Overview: </h2>
                <p> {overview} </p>
                <p className="release"> Released on <span> {release_date} </span></p>
            </div>
        </div>
    )
;

export default Movie;
