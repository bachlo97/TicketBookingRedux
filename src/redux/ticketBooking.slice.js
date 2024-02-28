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
    }
  }
});

export const {getUserInfo,addSelectingSeat,removeSelectingSeat} = ticketBookingSlice.actions

export const ticketBookingReducer =  ticketBookingSlice.reducer