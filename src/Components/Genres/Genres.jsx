import { Link } from "react-router-dom";
import { UseMovies } from "../../Context/MoviesContext";
import "./Genres.css";
import { Card, Row, Col } from "react-bootstrap";

export const Genres = () => {
  const { genres, loading } = UseMovies();

  if (loading) {
    <h2>Loading...</h2>;
  }

  return (
    <div>
      <Row xs={2} sm={3} md={4} lg={6} className="g-3">
        {genres.map((genre) => (
          <Col key={genre.id}>
            <Card
              className="hover text-center p-3 bg-dark text-light border-0 shadow-sm"
              style={{
                cursor: "pointer",
                borderRadius: "12px",
                textDecoration: "none",
              }}
              as={Link}
              to={`/allgenres/${genre.id}`}
            >
              <Card.Body className="p-2">
                <Card.Title style={{ fontSize: "16px" }}>
                  {genre.name}
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};
