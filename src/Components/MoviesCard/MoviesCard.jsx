import { Link } from "react-router-dom";
import "./MoviesCard.css";
import { Card } from "react-bootstrap";

export const MoviesCard = ({ movie }) => {
  return (
    <div className="moviesCard">
      <Card
        className="movie-card shadow-lg border-0"
        as={Link}
        to={`/movie/${movie.id}`}
      >
        <div className="movie-image-wrapper">
          <Card.Img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            className="movie-img"
          />
          <div className="movie-overlay">
            <h5 className="movie-title">{movie.title}</h5>

            <div className="movie-info">
              <span className="movie-pop">{movie.vote_average.toFixed(1)}</span>
              <span className="movie-date">{movie.release_date}</span>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};
