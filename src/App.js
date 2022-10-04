import "./App.css";
import { Container, Nav, Navbar, Row, Col } from "react-bootstrap";
import { useEffect, useState } from "react";
import data from "./data";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
import Detail from "./pages/Detail";
import Cart from "./pages/Cart";
import axios from "axios";
import { useQuery } from "react-query";

function App() {
  useEffect(() => {
    localStorage.setItem("watched", JSON.stringify([]));
  }, []);

  const [shoes, setShoes] = useState(data);
  const [count, setCount] = useState(1);
  const navigate = useNavigate();

  const result = useQuery("user", () => {
    return axios
      .get("http://codingapple1.github.io/userdata.json")
      .then((a) => {
        console.log("요청됨");
        return a.data;
      });
  });

  return (
    <div className="App">
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand
            onClick={() => {
              navigate("/");
            }}
          >
            SHOESHOP
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link
              onClick={() => {
                navigate("/detail/0");
              }}
            >
              Detail
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate("/cart");
              }}
            >
              Cart
            </Nav.Link>
          </Nav>
          <Nav className="ms-auto">
            {/* {result.isLoading ? "로딩중" : result.data.name} */}
            {result.isLoading && "로딩중"}
            {result.error && "에러남"}
            {result.data && result.data.name}
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route
          path="/"
          element={
            <>
              <div className="main-bg"></div>
              <Container>
                <Row>
                  {shoes.map((a, i) => {
                    return <Card shoes={shoes[i]} i={i}></Card>;
                  })}
                </Row>
              </Container>
              <button
                onClick={() => {
                  // 로딩중 ui 띄우기
                  axios
                    .get(
                      // "https://codingapple1.github.io/shop/data" +
                      //   setCount(count + 1) +
                      //   ".json"
                      "https://codingapple1.github.io/shop/data2.json"
                    )
                    .then((result) => {
                      if (count < 4) {
                        const copy = [...shoes, ...result.data];
                        setShoes(copy);
                      } else {
                        // display = none
                        <div>상품 더 없음</div>;
                      }
                      // console.log(result.data);

                      // 로딩중 ui 숨기기
                    })
                    .catch(() => {
                      console.log("data 가져오기 실패");
                      // 로딩중 ui 숨기기
                    });
                }}
              >
                더보기
              </button>
            </>
          }
        />
        <Route path="/detail/:id" element={<Detail shoes={shoes} />} />
        <Route path="/cart" element={<Cart shoes={shoes} />} />
        <Route path="*" element={<div>없는페이지임</div>} />
        <Route path="/about" element={<About />}>
          <Route path="member" element={<div>member</div>} />
          <Route path="location" element={<div>location</div>} />
        </Route>
        <Route path="/event" element={<Event />}>
          <Route path="one" element={<div>첫 주문시 양배추즙 서비스</div>} />
          <Route path="two" element={<div>생일기념 쿠폰받기</div>} />
        </Route>
      </Routes>
    </div>
  );
}

function Event() {
  return (
    <>
      <h4>오늘의 이벤트</h4>
      <Outlet></Outlet>
    </>
  );
}

function About() {
  return (
    <div>
      <h4>about us</h4>
      <Outlet></Outlet>
    </div>
  );
}

function Card(props) {
  return (
    <Col>
      <img
        src={
          "https://codingapple1.github.io/shop/shoes" + (props.i + 1) + ".jpg"
        }
        alt=""
        style={{ width: "80%" }}
      />
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.price}</p>
    </Col>
  );
}

export default App;
