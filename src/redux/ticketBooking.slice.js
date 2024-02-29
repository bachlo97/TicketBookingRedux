import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user:{},
  isFilled : false,
  accountsList:[],
  selectingList:[],
  selectedList:['A1'],


}

const ticketBookingSlice = createSlice({
  name: 'ticketBookingSlice',
  initialState,
  reducers: {
    getUserInfo: (state,action) =>{
      state.user.name = action.payload.name
      state.user.numSeat = action.payload.numSeat
      state.isFilled = true;
    },
    addSelectingSeat: (state,action) =>{
      state.selectingList.push(action.payload)
    },
    removeSelectingSeat: (state,action) =>{
      state.selectingList.splice(action.payload,1)
    },
    renderTable:(state) =>{
      //Thêm mảng ghế đã chọn vào user:
      state.user.seatSeleted = state.selectingList

      //Thêm đối tượng user vào mảng accountsList:
      state.accountsList.push(state.user)

      //Thêm mảng ghế đã chọ vào mảng ghế đã được đặt:
      state.selectedList = [...state.selectedList,...state.selectingList]

      //Reset các giá trị
      state.isFilled = false
      
    }
  }
});

export const {getUserInfo,addSelectingSeat,removeSelectingSeat,renderTable} = ticketBookingSlice.actions

export const ticketBookingReducer =  ticketBookingSlice.reducer