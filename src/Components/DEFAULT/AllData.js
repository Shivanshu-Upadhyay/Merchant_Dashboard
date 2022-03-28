import React from 'react'
import AllTransaction from '../TRANSACTION/AllTransaction'

const eye = <img src='../../IMAGES/eye.svg' />
const tdot = <img src='../../IMAGES/3dot.svg' style={{ height: "22px", width: "5px" }} />
const chkbox = <input type="checkbox" />
const colhead = [<input type="checkbox" />, 'ID Invoice', 'Date', 'Recipient', 'Amount', 'Method', 'Setteld Amount', 'Status']
const cashsaleshead = [<input type="checkbox" />, 'ID Invoice', 'Date', 'Recipient', 'Amount', 'Method', 'Sold by']
const refundhead = [<input type="checkbox" />, 'ID Invoice', 'Date', 'Recipient', 'Request Id', 'Issue', 'Status', 'Refund Status']
const temp=1

var temppp = [
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
    {
        checkBox: chkbox, invoice: 'Normal', date: 'June 1, 2020,05:34: AM',
        reciep: { imgpath: 'picsvg.svg', name: 'David Oconner' }, amt: '$783.22',
        paymentMethod: { name: 'UPI' }, setamt: '$783.22', status: 'Complete', dot: tdot
    },
    {
        checkBox: chkbox, invoice: 'Normal', date: 'June 1, 2020,05:34: AM',
        reciep: { imgpath: 'picsvg.svg', name: 'David Oconner' }, amt: '$783.22',
        paymentMethod: { name: 'UPI' }, setamt: '$783.22', status: 'Complete', dot: tdot
    },
    {
        checkBox: chkbox, invoice: 'Normal', date: 'June 1, 2020,05:34: AM',
        reciep: { imgpath: 'picsvg.svg', name: 'David Oconner' }, amt: '$783.22',
        paymentMethod: { name: 'UPI' }, setamt: '$783.22', status: 'Complete', dot: tdot
    },
    {
        checkBox: chkbox, invoice: 'Normal', date: 'June 1, 2020,05:34: AM',
        reciep: { imgpath: 'picsvg.svg', name: 'David Oconner' }, amt: '$783.22',
        paymentMethod: { name: 'UPI' }, setamt: '$783.22', status: 'Complete', dot: tdot
    },
    {
        checkBox: chkbox, invoice: 'Normal', date: 'June 1, 2020,05:34: AM',
        reciep: { imgpath: 'picsvg.svg', name: 'David Oconner' }, amt: '$783.22',
        paymentMethod: { name: 'UPI' }, setamt: '$783.22', status: 'Complete', dot: tdot
    },
    {
        checkBox: chkbox, invoice: 'Normal', date: 'June 1, 2020,05:34: AM',
        reciep: { imgpath: 'picsvg.svg', name: 'David Oconner' }, amt: '$783.22',
        paymentMethod: { name: 'UPI' }, setamt: '$783.22', status: 'Complete', dot: tdot
    },
    {
        checkBox: chkbox, invoice: 'Normal', date: 'June 1, 2020,05:34: AM',
        reciep: { imgpath: 'picsvg.svg', name: 'David Oconner' }, amt: '$783.22',
        paymentMethod: { name: 'UPI' }, setamt: '$783.22', status: 'Complete', dot: tdot
    },
    {
        checkBox: chkbox, invoice: 'Normal', date: 'June 1, 2020,05:34: AM',
        reciep: { imgpath: 'picsvg.svg', name: 'David Oconner' }, amt: '$783.22',
        paymentMethod: { name: 'UPI' }, setamt: '$783.22', status: 'Complete', dot: tdot
    },
    {
        checkBox: chkbox, invoice: 'Normal', date: 'June 1, 2020,05:34: AM',
        reciep: { imgpath: 'picsvg.svg', name: 'David Oconner' }, amt: '$783.22',
        paymentMethod: { name: 'UPI' }, setamt: '$783.22', status: 'Complete', dot: tdot
    },
    {
        checkBox: chkbox, invoice: 'Normal', date: 'June 1, 2020,05:34: AM',
        reciep: { imgpath: 'picsvg.svg', name: 'David Oconner' }, amt: '$783.22',
        paymentMethod: { name: 'UPI' }, setamt: '$783.22', status: 'Complete', dot: tdot
    },
    {
        checkBox: chkbox, invoice: 'Normal', date: 'June 1, 2020,05:34: AM',
        reciep: { imgpath: 'picsvg.svg', name: 'David Oconner' }, amt: '$783.22',
        paymentMethod: { name: 'UPI' }, setamt: '$783.22', status: 'Complete', dot: tdot
    },
    {
        checkBox: chkbox, invoice: 'Normal', date: 'June 1, 2020,05:34: AM',
        reciep: { imgpath: 'picsvg.svg', name: 'David Oconner' }, amt: '$783.22',
        paymentMethod: { name: 'UPI' }, setamt: '$783.22', status: 'Complete', dot: tdot
    },
    {
        checkBox: chkbox, invoice: 'Normal', date: 'June 1, 2020,05:34: AM',
        reciep: { imgpath: 'picsvg.svg', name: 'David Oconner' }, amt: '$783.22',
        paymentMethod: { name: 'UPI' }, setamt: '$783.22', status: 'Complete', dot: tdot
    },
    {
        checkBox: chkbox, invoice: 'Normal', date: 'June 1, 2020,05:34: AM',
        reciep: { imgpath: 'picsvg.svg', name: 'David Oconner' }, amt: '$783.22',
        paymentMethod: { name: 'UPI' }, setamt: '$783.22', status: 'Complete', dot: tdot
    },
    {
        checkBox: chkbox, invoice: 'Normal', date: 'June 1, 2020,05:34: AM',
        reciep: { imgpath: 'picsvg.svg', name: 'David Oconner' }, amt: '$783.22',
        paymentMethod: { name: 'UPI' }, setamt: '$783.22', status: 'Complete', dot: tdot
    },
    {
        checkBox: chkbox, invoice: 'Normal', date: 'June 1, 2020,05:34: AM',
        reciep: { imgpath: 'picsvg.svg', name: 'David Oconner' }, amt: '$783.22',
        paymentMethod: { name: 'UPI' }, setamt: '$783.22', status: 'Complete', dot: tdot
    },
    {
        checkBox: chkbox, invoice: 'Normal', date: 'June 1, 2020,05:34: AM',
        reciep: { imgpath: 'picsvg.svg', name: 'David Oconner' }, amt: '$783.22',
        paymentMethod: { name: 'UPI' }, setamt: '$783.22', status: 'Complete', dot: tdot
    },
    {
        checkBox: chkbox, invoice: 'Normal', date: 'June 1, 2020,05:34: AM',
        reciep: { imgpath: 'picsvg.svg', name: 'David Oconner' }, amt: '$783.22',
        paymentMethod: { name: 'UPI' }, setamt: '$783.22', status: 'Complete', dot: tdot
    },
    {
        checkBox: chkbox, invoice: 'Normal', date: 'June 1, 2020,05:34: AM',
        reciep: { imgpath: 'picsvg.svg', name: 'David Oconner' }, amt: '$783.22',
        paymentMethod: { name: 'UPI' }, setamt: '$783.22', status: 'Complete', dot: tdot
    },
    {
        checkBox: chkbox, invoice: 'Normal', date: 'June 1, 2020,05:34: AM',
        reciep: { imgpath: 'picsvg.svg', name: 'David Oconner' }, amt: '$783.22',
        paymentMethod: { name: 'UPI' }, setamt: '$783.22', status: 'Complete', dot: tdot
    },
    {
        checkBox: chkbox, invoice: 'Normal', date: 'June 1, 2020,05:34: AM',
        reciep: { imgpath: 'picsvg.svg', name: 'David Oconner' }, amt: '$783.22',
        paymentMethod: { name: 'UPI' }, setamt: '$783.22', status: 'Complete', dot: tdot
    },
    {
        checkBox: chkbox, invoice: 'Normal', date: 'June 1, 2020,05:34: AM',
        reciep: { imgpath: 'picsvg.svg', name: 'David Oconner' }, amt: '$783.22',
        paymentMethod: { name: 'UPI' }, setamt: '$783.22', status: 'Complete', dot: tdot
    },
    {
        checkBox: chkbox, invoice: 'Normal', date: 'June 1, 2020,05:34: AM',
        reciep: { imgpath: 'picsvg.svg', name: 'David Oconner' }, amt: '$783.22',
        paymentMethod: { name: 'UPI' }, setamt: '$783.22', status: 'Complete', dot: tdot
    },
    {
        checkBox: chkbox, invoice: 'Normal', date: 'June 1, 2020,05:34: AM',
        reciep: { imgpath: 'picsvg.svg', name: 'David Oconner' }, amt: '$783.22',
        paymentMethod: { name: 'UPI' }, setamt: '$783.22', status: 'Complete', dot: tdot
    },

]
var allTransaction=[]
for (let i = 0; i < 9; i++) {
    allTransaction[i] = temppp[i];
    
}
allTransaction.push(temppp[0])

const allSales = [
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
    {
        checkBox: chkbox, invoice: 'Normal', date: 'June 1, 2020,05:34: AM',
        reciep: { imgpath: 'picsvg.svg', name: 'David Oconner' }, amt: '$783.22',
        paymentMethod: { name: 'UPI' }, setamt: '$783.22', status: 'Request', dot: tdot
    },

]
const cashSales = [
    {
        checkBox: chkbox, invoice: 'Normal', date: 'June 1, 2020,05:34: AM',
        reciep: { imgpath: 'picsvg.svg', name: 'David Oconner' }, amt: '$783.22',
        paymentMethod: { name: 'UPI' }, soldby: 'jebsmanage'
    },
    {
        checkBox: chkbox, invoice: 'Normal', date: 'June 1, 2020,05:34: AM',
        reciep: { imgpath: 'picsvg.svg', name: 'David Oconner' }, amt: '$783.22',
        paymentMethod: { name: 'UPI' }, soldby: 'jebsmanage'
    },

]
const virtualterm = [
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
const invoice = [
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
const apitransaction = [
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
const refunds = [
    {
        checkBox: chkbox, invoice: 'Normal', date: 'June 1, 2020,05:34: AM',
        reciep: { imgpath: 'picsvg.svg', name: 'David Oconner' }, reqid: 'REQ2022010711395752'
        , issue: 'Test', status: 'Pending', refstatus:'Pending',
        paymentMethod: ''
    },
    {
        checkBox: chkbox, invoice: 'Normal', date: 'June 1, 2020,05:34: AM',
        reciep: { imgpath: 'picsvg.svg', name: 'David Oconner' }, reqid: 'REQ2022010711395752'
        , issue: 'Test', status: 'Accept', refstatus: 'OK',
        paymentMethod: ''
    },

]
const voidd = [
    {
        checkBox: chkbox, invoice: 'Normal', date: 'June 1, 2020,05:34: AM',
        reciep: { imgpath: 'picsvg.svg', name: 'David Oconner' }, reqid: 'REQ2022010711395752'
        , issue: 'Test', status: 'Pending', refstatus: 'Pending',
        paymentMethod: ''
    },
    {
        checkBox: chkbox, invoice: 'Normal', date: 'June 1, 2020,05:34: AM',
        reciep: { imgpath: 'picsvg.svg', name: 'David Oconner' }, reqid: 'REQ2022010711395752'
        , issue: 'Test', status: 'Accept', refstatus: 'OK',
        paymentMethod: ''
    },

]

const alljasondata = { invoicearr:['Invoice Transaction', invoice, colhead],
virtualterminalarr : ['Virtual Transaction', virtualterm, colhead],
transactionarr :['Transaction', allTransaction, colhead],
salesarr :['Sales', allSales, colhead],
apitransactionarr :['API Transaction', apitransaction, colhead],
refundarr: ['Refund Transaction', refunds, refundhead],
    voidarr: ['Void Transaction', voidd, refundhead],
cashsalesarr :['Cash Sales', cashSales, cashsaleshead]
}
export default alljasondata