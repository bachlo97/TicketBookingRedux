import React from 'react'
import danhSachGheData from '../../../data/danhSachGhe.json'
console.log(danhSachGheData)
function SeatsTable() {
  return (
    <>
      <table>
        <tbody>
            {danhSachGheData.map()}
        </tbody>
      </table>
    </>
  )
}

export default SeatsTable