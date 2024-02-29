import { createSlice } from "@reduxjs/toolkit";
import { sortArray } from "../modules/BaiTapDatVe/const";

const initialState = {
  nameInput: "",
  seatInput: "",
  user: {},
  isFilled: false,
  accountsList: [],
  selectingList: [],
  selectedList: [],
};

const ticketBookingSlice = createSlice({
  name: "ticketBookingSlice",
  initialState,
  reducers: {
    onChangeInput: (state, action) => {
      console.log(action.payload);
      switch (Object.keys(action.payload)[0]) {
        case "nameInput":
          state.nameInput = action.payload.nameInput;
          break;
        case "seatInput":
          state.seatInput = action.payload.seatInput;
          break;
      }
    },
    getUserInfo: (state, action) => {
      state.user.name = action.payload.name;
      state.user.numSeat = action.payload.numSeat;
      state.isFilled = true;
      // Khi đặt số ghế nhiều hơn số ghế còn trống thì ....
      state.seatInput = action.payload.numSeat
    },

    addSelectingSeat: (state, action) => {
      state.selectingList.push(action.payload);
    },

    removeSelectingSeat: (state, action) => {
      state.selectingList.splice(action.payload, 1);
    },

    renderTable: (state) => {

      //Sắp xếp mảng ghế đang chọn theo thứ tự Aphabel
      let sortList = sortArray(state.selectingList)
      //Thêm mảng ghế đã chọn vào user:
      state.user.seatSeleted = sortList;

      //Thêm đối tượng user vào mảng accountsList:
      state.accountsList.push(state.user);

      //Thêm mảng ghế đã cho vào mảng ghế đã được đặt:
      state.selectedList = [...state.selectedList, ...state.selectingList];



      //Reset các giá trị

      state.isFilled = false;
      state.nameInput = "";
      state.seatInput = "";
      state.user = {}
      state.selectingList = []   
    },
  },
});

export const {
  getUserInfo,
  addSelectingSeat,
  removeSelectingSeat,
  renderTable,
  onChangeInput,
} = ticketBookingSlice.actions;

export const ticketBookingReducer = ticketBookingSlice.reducer;
