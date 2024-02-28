import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  accountsList:[],
  selectedList:[],


}

const ticketBookingSlice = createSlice({
  name: 'ticketBookingSlice',
  initialState,
  reducers: {}
});

export const {} = ticketBookingSlice.actions

export const ticketBookingReducer =  ticketBookingSlice.reducer