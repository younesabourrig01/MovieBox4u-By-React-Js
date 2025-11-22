import { Container } from "react-bootstrap";
import "./Footer.css";

export const Footer = () => {
  return (
    <div className="footer">
      <footer className="movie-footer mt-4">
        <Container className="text-center py-3">
          <p className="mb-0">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </Container>
      </footer>
    </div>
  );
};
