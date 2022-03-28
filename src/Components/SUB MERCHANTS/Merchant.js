import React, { useState } from 'react'
import merchanttable from './SubMerchantData'
import './Merchant.scss'
import Filter2 from '../Filter2'


function Merchant() {
    const [pop,setpop]=useState(false)
    const [hvpop,sethvpop]=useState(false)
    const popup=()=>{
        setpop(!pop)
        sethvpop(false)
    }
    const hovpop = () => {
        sethvpop(!hvpop)
    }
    const myfun=()=>{
        sethvpop(false)
        setpop(false)
    }
  return (
      <div className='Merchant'>
          <Filter2/>
          <table class="table">
              <thead>
                  <tr style={{ padding: "20px" }}>
                      <th scope="col">#</th>
                      <th scope="col">Account Type</th>
                      <th scope="col">Name</th>
                      <th scope="col">Mer Id</th>
                      <th scope="col">Secret Key</th>
                      <th scope="col">Status</th>
                      <th scope="col">Web Payment</th>
                      <th scope="col">Created</th>
                      <th scope="col" className='cen'>Action</th>
                  </tr>
              </thead>
              <tbody>
                  {merchanttable}
              </tbody>
          </table>
      </div>
  )
}

export default Merchant