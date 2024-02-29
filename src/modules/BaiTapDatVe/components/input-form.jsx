import React, {useRef} from "react";
import { useDispatch, useSelector } from "react-redux";
import { TOTAL_SEATS, handleInput } from "../const";
import { getUserInfo, onChangeInput } from "../../../redux/ticketBooking.slice";
function InputForm() {
  const name = useRef();
  const numSeat = useRef();
  const nameInput = useSelector(
    (state) => state.ticketBookingReducer.nameInput
  );
  const seatInput = useSelector(
    (state) => state.ticketBookingReducer.seatInput
  );
  const selectedList = useSelector(
    (state) => state.ticketBookingReducer.selectedList
  );


  const isFilled = useSelector((state) => state.ticketBookingReducer.isFilled);
  const dispatch = useDispatch();

  return (
    <div style={{ width: "100%" }}>
      <h2>Fill The Required Details Below And Select Your Seats</h2>
      <form
        className="row"
        onSubmit={(e) => {
          e.preventDefault();
          if(selectedList.length === TOTAL_SEATS){
            alert('Rạp không còn ghế trống. Hẹn quý khách lần sau.Tks so much 🥰')
            return;
          }
          const num = handleInput(
            name.current.value,
            numSeat.current.value,
            selectedList.length
          );
          if (!num) {
            return;
          }
          const action = getUserInfo({
            name: name.current.value,
            numSeat: num,
          });
          dispatch(action);
        }}
      >
        <div className="col-md-8 mb-4">
          <label htmlFor="Name" className="form-label">
            Name<span> *</span>
          </label>
          <input
            type="text"
            ref={name}
            className="form-control"
            value={nameInput}
            onChange={(e) => {
              const action = onChangeInput({
                nameInput: e.target.value,
              });
              dispatch(action);
            }}
            readOnly = {isFilled}
          />
        </div>
        <div className="col-md-4 mb-4">
          <label htmlFor="num-ticket" className="form-label">
            Number of Seats<span>*</span>
          </label>
          <input
            type="number"
            ref={numSeat}
            className="form-control"
            value={seatInput}
            onChange={(e) => {
              const action = onChangeInput({
                seatInput: e.target.value,
              });
              dispatch(action);
            }}
            readOnly = {isFilled}
          />
        </div>
        <div>
          <button disabled={isFilled} className="btn btn-secondary mt-3">Start Selecting</button>
        </div>
      </form>
    </div>
  );
}

export default InputForm;
