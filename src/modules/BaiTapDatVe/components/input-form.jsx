import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { TOTAL_SEATS,handleInput } from "../const";
import { current } from "@reduxjs/toolkit";
function InputForm() {
  const name = useRef();
  const numSeat = useRef();


  const dispatch = useDispatch()
  return (
    <div style={{ width: "100%" }}>
      <h2>Fill The Required Details Below And Select Your Seats</h2>
      <form className="row" onSubmit={(e) => {
        e.preventDefault()
        if(!handleInput(name.current.value,numSeat.current.value)){
          return;
        }
        // const action = {

        // }
        // dispatch(action)
      }}>
        <div className="col-md-8 mb-4">
          <label htmlFor="Name" className="form-label">
            Name<span> *</span>
          </label>
          <input type="text" ref={name} className="form-control" id="name" />
        </div>
        <div className="col-md-4 mb-4">
          <label htmlFor="num-ticket" className="form-label">
            Number of Seats<span>*</span>
          </label>
          <input type="number" ref={numSeat} className="form-control" id="num-ticket" />
        </div>
        <div><button className="btn btn-secondary mt-3">Start Selecting</button></div>
      </form>
    </div>
  );
}

export default InputForm;
