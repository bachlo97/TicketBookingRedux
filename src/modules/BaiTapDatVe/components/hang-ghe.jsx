import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addSelectingSeat,
  removeSelectingSeat,
  ticketBookingReducer,
} from "../../../redux/ticketBooking.slice";

function HangGhe(props) {
  const { hangGhe } = props;
  const isFilled = useSelector((state) => state.ticketBookingReducer.isFilled);
  const selectedList = useSelector(
    (state) => state.ticketBookingReducer.selectedList
  );
  const selectingList = useSelector(
    (state) => state.ticketBookingReducer.selectingList
  );
  const user = useSelector((state) => state.ticketBookingReducer.user);
  const dispatch = useDispatch();
  console.log(hangGhe);
  return (
    <tr>
      <td>{hangGhe.hang}</td>

      {hangGhe.danhSachGhe.map((seat, index) => {
        if (!hangGhe.hang) {
          return <td key={index}>{seat.soGhe}</td>;
        } else if (seat.soGhe) {
          return (
            <td key={index}>
              <input
                type="checkbox"
                className={
                  selectedList.find((item) => item === seat.soGhe)
                    ? "seat-selected"
                    : ""
                }
                defaultValue={seat.soGhe}
                disabled={
                  selectedList.find((item) => item === seat.soGhe)
                    ? true
                    : false
                }
                onClick={(e) => {
                  if (!isFilled) {
                    return;
                  }

                  const indexSeat = selectingList.findIndex(
                    (item) => item === seat.soGhe
                  );


                  if (+user.numSeat === selectingList.length) {
                    if (indexSeat !== -1) {
                      e.target.className = "";
                      const action = removeSelectingSeat(indexSeat);
                      dispatch(action);
                    }
                  } else {
                    if (indexSeat === -1) {
                      e.target.className = "seat-selecting";
                      const action = addSelectingSeat(seat.soGhe);
                      dispatch(action);
                    } 
                    else {
                      e.target.className = "";
                      const action = removeSelectingSeat(indexSeat);
                      dispatch(action);
                    }
                  }
                }}
              />
            </td>
          );
        } else {
          return <td key={index}></td>;
        }
      })}
    </tr>
  );
}

export default HangGhe;
