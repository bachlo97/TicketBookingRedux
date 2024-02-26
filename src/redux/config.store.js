import { configureStore } from "@reduxjs/toolkit"
import {ticketBookingReducer} from "./ticketBooking.slice"
export const store = configureStore({
    reducer:{
        ticketBookingReducer,
    }
})