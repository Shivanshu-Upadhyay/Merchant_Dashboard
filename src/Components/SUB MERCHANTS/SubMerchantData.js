import React from 'react'
import './Merchant.scss'

const eye=<img src='../../IMAGES/eye.svg'/>
const merchantlist=[
    ['Normal', 'David Oconner', '1066', '557b35d', 'Approved', 'Approved','25/03/2021',eye],
    ['Normal', 'David Oconner', '1066', '557b35d', 'Approved', 'Approved','25/03/2021',eye],
    ['Normal', 'David Oconner', '1066', '557b35d', 'Approved', 'Approved','25/03/2021',eye],
    ['Normal', 'David Oconner', '1066', '557b35d', 'Approved', 'Approved','25/03/2021',eye],
    ['Normal', 'David Oconner', '1066', '557b35d', 'Approved', 'Approved','25/03/2021',eye],
]
var merchantslid=1
const merchanttable = merchantlist.map((i) =>
    <tr id='tbrow' className='p-5'>
        <td>{merchantslid++}</td>
        {i.map(j => j === eye ? <td className='cen'>&nbsp;&nbsp;&nbsp;&nbsp;{j}</td> : <td>{j}</td>
        )}
    </tr>
)
export default merchanttable