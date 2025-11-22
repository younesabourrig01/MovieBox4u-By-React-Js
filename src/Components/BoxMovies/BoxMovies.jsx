import { Header } from "../Header/Header";
import { MoviesCard } from "../MoviesCard/MoviesCard";

import { Row, Col } from "react-bootstrap";
import "./BoxMovies.css";

export const BoxMovies = ({ movies, title, path }) => {
  return (
    <div className="moviesBox container blur-box p-4 mt-4">
      <Header title={title} path={path} />
      <Row className="g-4 mt-3">
        {movies.map((movie) => (
          <Col key={movie.id}>
            <MoviesCard movie={movie} />
          </Col>
        ))}
      </Row>
    </div>
  );
};
