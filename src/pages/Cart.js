import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { changeName, increase } from "./../store";

export default function Cart() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  // console.log(state);

  return (
    <>
      <h6>
        {state.user.name} {state.user.age}의 장바구니
      </h6>
      <button
        onClick={() => {
          dispatch(increase(1));
        }}
      >
        버튼
      </button>
      <Table>
        <thead>
          <tr>
            <th>id</th>
            <th>상품명</th>
            <th>수량</th>
            <th>변경하기</th>
          </tr>
        </thead>
        <tbody>
          {state.cart.map((a, i) => {
            return (
              <tr key={i}>
                <td>{state.cart[i].id}</td>
                <td>{state.cart[i].name}</td>
                <td>{state.cart[i].count}</td>
                <td>
                  <button
                    onClick={() => {
                      dispatch(changeName());
                    }}
                  >
                    +
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
}
