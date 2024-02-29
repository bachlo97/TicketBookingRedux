import React from "react";
import danhSachGheData from "../../../data/danhSachGhe.json";
import HangGhe from "./hang-ghe";

function SeatsTable() {
  return (
    <>
      <table>
        <tbody>
          {danhSachGheData.map((hangGhe, index) => {
            if (!hangGhe.hang && index !== 0) {
              return <tr key={index} className="seatVGap"></tr>;
            } else {
              return <HangGhe hangGhe={hangGhe} key={index} />;
            }
          })}
        </tbody>
      </table>
    </>
  );
}

export default SeatsTable;
