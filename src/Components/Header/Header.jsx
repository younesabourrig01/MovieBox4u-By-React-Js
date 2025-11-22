import { Link } from "react-router-dom";
import "./Header.css";
import { Container, Row, Col, Button } from "react-bootstrap";
export const Header = ({ title, path }) => {
  return (
    <Container className="header py-3">
      <Row className="align-items-center">
        <Col>
          <h3>{title}</h3>
        </Col>
        <Col className="text-end">
          <Button className="btn" variant="outline-warning" as={Link} to={path}>
            Show All
          </Button>
        </Col>
      </Row>
    </Container>
  );
};
