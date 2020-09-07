import React from "react";

export default function MovieCard({movie}) {
    return (
        <div className="card">
            <img className="card--image"
                src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
                alt={movie.title + ' poster'}
            />
            <div className="card--content">
                <h3 className="card--title">{movie.title}</h3>
                <p>RELEASE DATE: <b>{movie.release_date}</b></p>
                <p className="card--rating">RATING: <b>{movie.vote_average}</b> </p>
                <p><em className="card--desc">{movie.overview}</em></p>
                <p><small>ORIGINAL LANGUAGE: {movie.original_language}</small></p>
            </div>

        </div>
    )
}