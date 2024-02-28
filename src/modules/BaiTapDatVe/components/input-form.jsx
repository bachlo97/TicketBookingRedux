import React from "react";

function InputForm() {
  return (
    <div style={{ width: "100%" }}>
      <h2>Fill The Required Details Below And Select Your Seats</h2>
      <div className="row">
        <div className="col-md-8 mb-4">
          <label htmlFor="Name" className="form-label">
            Name<span> *</span>
          </label>
          <input type="text" className="form-control" id="name" />
        </div>
        <div className="col-md-4 mb-4">
          <label htmlFor="num-ticket" className="form-label">
            Number of Seats<span>*</span>
          </label>
          <input type="number" className="form-control" id="num-ticket" />
        </div>
      </div>
      <button className="btn btn-secondary mt-3">Start Selecting</button>
    </div>
  );
}

export default InputForm;
