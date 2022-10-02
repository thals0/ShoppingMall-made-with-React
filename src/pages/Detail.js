import { useParams } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import { Nav } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addItem } from "../store";
// import styled from "styled-components";

// const Btn = styled.button`
//   background-color: ${(props) => props.bg};
//   color: ${(props) => (props.bg == "black" ? "white" : "black")};
//   padding: 10px;
// `;

// const NewBtn = styled.button(Btn);

function Detail(props) {
  let { id } = useParams();
  let product = props.shoes.find((x) => x.id == id);
  // console.log(product.id);
  // let [alert, setAlert] = useState(true);
  let [num, setNum] = useState("");
  const [tap, setTap] = useState(0);
  const [fade, setFade] = useState("");

  const dispatch = useDispatch();

  // useEffect(() => {
  //   const a = setTimeout(() => {
  //     setAlert(false);
  //   }, 2000);

  //   return () => {
  //     clearTimeout(a);
  //   };
  // }, []);

  useEffect(() => {
    if (isNaN(num) == true) {
      alert("경고");
    }
  }, [num]);

  useEffect(() => {
    const a = setTimeout(() => {
      setFade("end");
    }, 100);

    return () => {
      clearTimeout(a);
      setFade("");
    };
  }, []);

  return (
    <div className={"container start " + fade}>
      {/* {alert === true ? (
        <div className="alert alert-warning">2초 이내 구매시 할인</div>
      ) : null} */}
      <input
        onChange={(e) => {
          setNum(e.target.value);
        }}
      ></input>
      {/* <Btn bg="orange">버튼</Btn> */}
      {/* <Btn bg="black">버튼</Btn> */}
      {/* <NewBtn bg="yellow">버튼</NewBtn> */}
      <div className="row">
        <div className="col-md-6">
          <img
            src={
              "https://codingapple1.github.io/shop/shoes" +
              (product.id + 1) +
              ".jpg"
            }
            width="100%"
            alt="img"
          />
        </div>
        <div className="col-md-6">
          <h4 className="pt-5">{product.title}</h4>
          <p>{product.content}</p>
          <p>{product.price}</p>
          <button
            onClick={() => {
              dispatch(addItem({ id: 1, name: "Red Knit", count: 1 }));
              console.log(product);
            }}
            className="btn btn-danger"
          >
            주문하기
          </button>
        </div>
      </div>

      <Nav variant="tabs" defaultActiveKey="link0">
        <Nav.Item>
          <Nav.Link
            onClick={() => {
              setTap(0);
            }}
            eventKey="link0"
          >
            버튼0
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            onClick={() => {
              setTap(1);
            }}
            eventKey="link1"
          >
            버튼1
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            onClick={() => {
              setTap(2);
            }}
            eventKey="link2"
          >
            버튼2
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <TapContent tap={tap} shoes={props.shoes} />
    </div>
  );
}

function TapContent({ tap, shoes }) {
  const [fade, setFade] = useState("");
  useEffect(() => {
    const a = setTimeout(() => {
      setFade("end");
    }, 100);

    return () => {
      clearTimeout(a);
      setFade("");
    };
  }, [tap]);

  if (tap === 0) {
    return (
      <div className={`start ${fade}`}>
        <div>{shoes[0].title}</div>
      </div>
    );
  }
  if (tap === 1) {
    return <div className={`start ${fade}`}>내용1</div>;
  }
  if (tap === 2) {
    return <div className={`start ${fade}`}>내용2</div>;
  }
}

export default Detail;
