import React from "react";
import { useSelector } from "react-redux";




function HangGhe(props) {
  const { hangGhe } = props;
  const selectedList = useSelector(state=>state.ticketBookingReducer.selectedList)
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
                  selectedList.find(item => item === seat.soGhe) ? 'seat-selected' : ""
                }
                defaultValue={seat.soGhe}
                disabled={seat.daDat}
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
