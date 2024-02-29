import React from 'react'
import { useSelector } from 'react-redux'

function TableForm() {
    const accountsList = useSelector(state => state.ticketBookingReducer.accountsList)
    return (
        <>
            <table className="table table-bordered table-hover" style={{ width: '500px' }}>
                <thead className='table-dark'>
                    <tr>
                        <th scope="col" style={{ width: "30%" }}>Name</th>
                        <th scope="col" style={{ width: "30%" }}>Number of Seats</th>
                        <th scope="col" style={{ width: "30%" }}>Seats</th>
                    </tr>
                </thead>
                <tbody className='align-middle'>
                    {accountsList.map((user, index) => {
                        return (
                            <tr key={index}>
                                <th scope="row" className='text-start'>{user.name}</th>
                                <td>{user.numSeat}</td>
                                <td>{user.seatSeleted ? user.seatSeleted.join(', ') : ''}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>

        </>
    )
}

export default TableForm
