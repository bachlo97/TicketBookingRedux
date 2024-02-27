import React from 'react'

function TableForm() {
    return (
        <>
            <table className="table table-bordered table-hover" style={{width:'500px'}}>
                <thead className='table-dark'>
                    <tr>
                        <th scope="col" style={{width:"30%"}}>Name</th>
                        <th scope="col" style={{width:"30%"}}>Number of Seats</th>
                        <th scope="col" style={{width:"30%"}}>Seats</th>
                    </tr>
                </thead>
                <tbody className='align-middle'>
                    <tr>
                        <th scope="row" className='text-start'>Pham The Cuong</th>
                        <td>10</td>
                        <td>A1, A2, A3, A4, A5, A6</td>
                    </tr>
                </tbody>
            </table>

        </>
    )
}

export default TableForm
