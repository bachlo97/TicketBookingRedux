import React, { useState } from "react";
import "./ticket-booking.css";
import InputForm from "./components/input-form";
import TableForm from "./components/table-form";
import SeatsTable from "./components/seats-table";
import { useDispatch, useSelector } from "react-redux";
import { renderTable } from "../../redux/ticketBooking.slice";


function TicketBooking() {
  const isFilled = useSelector((state) => state.ticketBookingReducer.isFilled);
  const numSeat = useSelector(
    (state) => state.ticketBookingReducer.user.numSeat
  );
  const lenSelectingList = useSelector(
    (state) => state.ticketBookingReducer.selectingList
  ).length;
  const dispatch = useDispatch();

  const [chart,setChart] = useState({
    options: {},
    series: [44, 55, 41, 17, 15],
    labels: ["A", "B", "C", "D", "E"],
  });

  const [springs, api] = useSpring(() => ({
    from: { x: 0 },
  }));

  const handleClick = () => {
    api.start({
      from: {
        x: 0,
      },
      to: {
        x: 100,
      },
    });
  };

  return (
    <div className="container">
      <h1>Movie Seat Selection</h1>

      <div className="reg-page">
        <InputForm />

        <ul
          className="seat-legend"
          style={{ margin: "2em 0", padding: 0, listStyle: "none" }}
        >
          <li className="smallBox greenBox">Selected Seat</li>
          <li className="smallBox redBox">Reserved Seat</li>
          <li className="smallBox emptyBox">Empty Seat</li>
        </ul>

        <div
          className="seatStructure text-center"
          style={{
            overflowX: "auto",
            display: "flex",
            flexDirection: "column",
            width: "100%",
          }}
        >
          <p id="notification" style={{ width: "100%" }}>
            {isFilled ? <span>Please Select your Seats NOW!</span> : ""}
          </p>

          <SeatsTable />

          <div className="screen">
            <h2 className="wthree">Screen this way</h2>
          </div>

          <div>
            <button
              className="btn btn-secondary"
              style={{ margin: "15px" }}
              onClick={() => {
                if (!isFilled) {
                  return;
                }
                if (+numSeat !== lenSelectingList) {
                  let soGhe = +numSeat - lenSelectingList;
                  alert(
                    `Vui lòng chọn đủ số ghế đã đăng ký. Bạn hãy chọn thêm ${soGhe} ghế nhé 😘`
                  );
                  return;
                }
                const action = renderTable();
                dispatch(action);
              }}
            >
              Confirm Selection
            </button>
          </div>
        </div>

        <div
          className="displayerBoxes text-center"
          style={{
            overflowX: "auto",
            margin: "10px auto",
            overflowY: "auto",
            height: "300px",
          }}
        >
          <TableForm />
        </div>
      </div>

      <footer style={{ margin: "3em 0em", textAlign: "center" }}>
        <p>
          © 2018 Movie Seat Selection . All Rights Reserved | Design by
          <a href="https://w3layouts.com/" target="_blank">
            W3layouts
          </a>
        </p>
      </footer>
    </div>
  );
}

export default TicketBooking;

