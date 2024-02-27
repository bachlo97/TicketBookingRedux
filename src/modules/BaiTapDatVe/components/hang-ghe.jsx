import React from "react";

function HangGhe(props) {
  const { hangGhe } = props;
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
                className="seats"
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
