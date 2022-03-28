import React from 'react'
import Filter from '../Filter'
import './Transaction.scss'
import TransactionData from './TransactionData'
import TransactionProgress from './TransactionProgress'
const eye = <img src='../../IMAGES/eye.svg' />
const tdot = <img src='../../IMAGES/3dot.svg' style={{ height: "22px", width: "5px" }} />
const chkbox = <input type="checkbox" />

const allTransactionDataa = [
    {
        checkBox: chkbox, invoice: 'Normal', date: 'June 1, 2020,05:34: AM',
        reciep: { imgpath: 'picsvg.svg', name: 'David Oconner' }, amt: '$783.22',
        paymentMethod: { name: 'UPI' }, setamt: '$783.22', status: 'Pending', dot: tdot
    },
    {
        checkBox: chkbox, invoice: 'Normal', date: 'June 1, 2020,05:34: AM',
        reciep: { imgpath: 'picsvg.svg', name: 'David Oconner' }, amt: '$783.22',
        paymentMethod: { name: 'UPI' }, setamt: '$783.22', status: 'Complete', dot: tdot
    },

]

function AllTransaction() {
    return (
        <div className='AllTransaction'>
            <br />
            <div className='dashh'>Transactions </div>
            <TransactionProgress />
            <br /><br /><br />
            <div className='downAndFilter'><Filter /><button><img src='../../IMAGES/downbtn.svg' />&nbsp;&nbsp; Download Report</button></div>

            <table class="table">
                <thead>
                    <tr style={{ padding: "20px" }}>
                        <th scope="col">#</th>
                        <th scope="col"><input type="checkbox" /></th>

                        <th scope="col">ID Invoice</th>
                        <th scope="col">Date</th>
                        <th scope="col">Recipient</th>
                        <th scope="col">Amount</th>
                        <th scope="col">Method</th>
                        <th scope="col">Setteld Amount</th>
                        <th scope="col">Status</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    <TransactionData name={allTransactionDataa} />

                </tbody>
            </table>
        </div>
    )
}

export default AllTransaction