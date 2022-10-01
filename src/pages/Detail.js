import { useParams } from "react-router-dom";
import styled from "styled-components";

const Btn = styled.button`
  background-color: ${(props) => props.bg};
  color: ${(props) => (props.bg == "black" ? "white" : "black")};
  padding: 10px;
`;

const NewBtn = styled.button(Btn);

function Detail(props) {
  let { id } = useParams();
  let product = props.shoes.find((x) => x.id == id);
  // console.log(product.id);

  return (
    <div className="container">
      <Btn bg="orange">버튼</Btn>
      <Btn bg="black">버튼</Btn>
      <NewBtn bg="yellow">버튼</NewBtn>
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
          <button className="btn btn-danger">주문하기</button>
        </div>
      </div>
    </div>
  );
}

export default Detail;
