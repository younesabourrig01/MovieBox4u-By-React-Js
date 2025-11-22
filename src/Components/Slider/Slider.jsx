import { Carousel, Row, Col, Card, Button } from "react-bootstrap";
import "./Slider.css";
import { UseMovies } from "../../Context/MoviesContext";
import headerimg from "../../assets/logo.png";
import { MoviesCard } from "../MoviesCard/MoviesCard";
import { Link } from "react-router-dom";

export const Slider = () => {
  const { sliderMovies, loading } = UseMovies();

  if (loading) return <h2>Loading...</h2>;

  return (
    <Row className="slider">
      <Col sm="8">
        <div>
          <Carousel fade className="movie-slider movie-slider-cards">
            {sliderMovies.map((sliderMovie) => (
              <Carousel.Item
                key={sliderMovie.id}
                className="carousel-card-item"
              >
                <div className="carousel-card-wrapper">
                  <MoviesCard movie={sliderMovie} />
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
      </Col>

      <Col sm="4">
        <div className="infoCard">
          <Card className="descriptionCard bg-dark text-white border-0 shadow-lg">
            <Card.Img variant="top" src={headerimg} className="infoCard-img" />

            <Card.Body className="infoCard-body">
              <Card.Title className="infoCard-title">WELCOME 🎬</Card.Title>

              <Card.Text className="infoCard-text">
                MovieBox4U is a huge movie hub where you can explore, discover,
                and enjoy every type of film you love.
              </Card.Text>

              <Button as={Link} to={"/about"} className="infoCard-btn">
                About Us
              </Button>
            </Card.Body>
          </Card>
        </div>
      </Col>
    </Row>
  );
};
