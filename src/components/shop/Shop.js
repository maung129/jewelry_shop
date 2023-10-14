import Filter from "./Filter";
import Container from "react-bootstrap/Container";
import Paginator from "./Paginator";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Shop() {
  return (
    <div className="shop-section  my-5">
      <Container style={{ maxWidth: 850 }}>
        <Row>
          <Col md={3} sm={4}>
            <Filter />
          </Col>
          <Col>
            <Paginator />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
