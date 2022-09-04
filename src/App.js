import "./App.css";
import { Container, Nav, Navbar, Row, Col } from "react-bootstrap";
import { useState } from "react";
import data from "./data";

function App() {
  let [shoes, setShoes] = useState(data);

  return (
    <div className="App">
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">SHOESHOP</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <div className="main-bg"></div>

      <Container>
        <Row>
          {shoes.map((a, i) => {
            return <Card shoes={shoes[i]} i={i + 1}></Card>;
          })}
        </Row>
      </Container>
    </div>
  );
}

function Card(props) {
  return (
    <Col>
      <img
        src={"https://codingapple1.github.io/shop/shoes" + props.i + ".jpg"}
        alt=""
        style={{ width: "80%" }}
      />
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.price}</p>
    </Col>
  );
}

export default App;
