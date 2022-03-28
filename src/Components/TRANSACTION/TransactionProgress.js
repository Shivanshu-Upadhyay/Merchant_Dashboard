import React from 'react'
import './Transaction.scss'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

function TransactionProgress() {
  return (
      <div className='TransactionProgress'>
          <div className='TransactionProgressBox one'>
              <div className='TransactionProgressBar one'>
                  <CircularProgressbar value={40} text={`${40}%`} />
              </div>
              <div className='TransactionProgressData'>
                  <div className='thead'>Transaction</div>
                  <div className='tpara'>$9321.21.00</div>
              </div>
          </div>
          <div className='TransactionProgressBox two'>
              <div className='TransactionProgressBar one'>
                  <CircularProgressbar value={40} text={`${40}%`} />
              </div>
              <div className='TransactionProgressData two'>
                  <div className='thead'>Collected</div>
                  <div className='tpara'>$9321.21.00</div>
              </div>
          </div>
          <div className='TransactionProgressBox three'>
              <div className='TransactionProgressBar one'>
                  <CircularProgressbar value={40} text={`${40}%`} />
              </div>
              <div className='TransactionProgressData'>
                  <div className='thead'>Refunds & Voids</div>
                  <div className='tpara'>$5,412</div>
              </div>
          </div>
          <div className='TransactionProgressBox four'>
              <div className='TransactionProgressBar one'>
                  <CircularProgressbar value={40} text={`${40}%`} />
              </div>
              <div className='TransactionProgressData'>
                  <div className='thead'>Net Sales</div>
                  <div className='tpara'>$5,412</div>
              </div>
          </div>
      </div>
  )
}

export default TransactionProgress