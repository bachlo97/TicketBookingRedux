import React from 'react'
import './ticket-booking.css'
import InputForm from './components/input-form'
function TicketBooking() {
  return (
    <div className='container'>
      <h1>Movie Seat Selection</h1>

      <div className="reg-page">
        <InputForm/>

        <ul className='seat-legend' style={{margin: '2em 0',padding: 0,listStyle:'none'}}>

        </ul>

      </div>

      <footer style={{margin:'3em 0em', textAlign:'center'}}><p>© 2018 Movie Seat Selection . All Rights Reserved | Design by
        <a href="https://w3layouts.com/" target="_blank">W3layouts</a>
      </p></footer>
    </div>
  )
}

export default TicketBooking