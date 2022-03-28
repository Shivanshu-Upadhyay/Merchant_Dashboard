import React from 'react'
import Pagination from '../PAGINATION/Pagination'
import './Transaction.scss'
import TransactionData from './TransactionData'
import TransactionProgress from './TransactionProgress'
import Filterr from '../FILTER/Filterr'



function AllTransaction({ dataarray}) {
  return (
    <div className='AllTransaction'>
      <br />
      <div className='dashh'>{dataarray[0]}</div>
      <TransactionProgress />
      <br /><br /><br /><br /><br /><br />
      <Filterr p={true} tpos={"370px"} rpos={"30px"}/>
      <table class="table">
        <thead>
          <tr style={{ padding: "20px" }}>
            <th scope="col">#</th>
            {dataarray[2].map((i)=>
            <th>{i}</th>
            )}
            <th></th>
          </tr>
        </thead>
        <tbody>
          <TransactionData name={dataarray[1]}/>
        </tbody>
      </table>
      <br/>
      <Pagination />
    </div>
  )
}

export default AllTransaction