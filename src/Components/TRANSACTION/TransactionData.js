import React from 'react'
import './Transaction.scss'

function TransactionData({name}) {
    const eye = <img src='../../IMAGES/eye.svg' />
    const tdot = <img src='../../IMAGES/3dot.svg' style={{ height: "22px", width: "5px" }} />
    const chkbox = <input type="checkbox" />
    var merchantslid1 = 1
    var merchantslid2 = 1
    var merchantslid3 = 1
    var coll='green'
  const farma1 = name.map((i) =>
    <tr id='tbrow' className='p-5'>
      <td>{merchantslid1++}</td>
      <td>{i.checkBox}</td>
      <td>{i.invoice}</td>
      <td>{i.date}</td>
      <td><img style={{ borderRadius: "50px", width: "40px" }} src={'../../IMAGES/' + i.reciep.imgpath} />&nbsp;&nbsp;&nbsp;{i.reciep.name}</td>
      <td>{i.amt}</td>
      <td>
        <span>{i.status === 'Pending' ? <img src="../../IMAGES/redtop.svg" alt="" width='20px' /> : <img src="../../IMAGES/greendown.svg" alt="" width='20px' />}</span>
        &nbsp;&nbsp;&nbsp;<span>{i.paymentMethod.name}</span>
      </td>
      <td>{i.setamt}</td>
      <td>
        {i.status === 'Pending' ?
          <div style={{ border: "1px solid", padding: "7px 0 7px 20px", borderRadius: "20px", borderColor: "rgba(249, 80, 26, 1)", color: "rgba(249, 80, 26, 1)" }}>{i.status}</div>

          : i.status === 'Request' ?
            <div style={{ border: "1px solid", padding: "7px 0 7px 20px", borderRadius: "20px", borderColor: "rgba(255, 67, 7, 1)", color: "rgba(255, 67, 7, 1)" }}>{i.status}</div>
            : <div style={{ border: "1px solid", padding: "7px 0 7px 20px", borderRadius: "20px", borderColor: "rgba(43, 193, 85, 1)", color: "rgba(43, 193, 85, 1)" }}>{i.status}</div>
        }
      </td>
      <td>{i.dot}</td>
    </tr>
  )
  const farma2 = name.map((i) =>
    <tr id='tbrow' className='p-5'>
      <td>{merchantslid2++}</td>
      <td>{i.checkBox}</td>
      <td>{i.invoice}</td>
      <td>{i.date}</td>
      <td><img style={{ borderRadius: "50px", width: "40px" }} src={'../../IMAGES/' + i.reciep.imgpath} />&nbsp;&nbsp;&nbsp;{i.reciep.name}</td>
      <td>{i.amt}</td>
      <td>
        <span>{i.status === 'Complete' ? <img src="../../IMAGES/greendown.svg" alt="" /> : <img src="../../IMAGES/redtop.svg" alt="" />}</span>
        &nbsp;&nbsp;&nbsp;<span>{i.paymentMethod.name}</span>
      </td>
      <td>{i.soldby}</td>
      <td>{i.dot}</td>
    </tr>
  )
  const farma3 = name.map((i) =>
    <tr id='tbrow' className='p-5'>
      <td>{merchantslid3++}</td>
      <td>{i.checkBox}</td>
      <td>{i.invoice}</td>
      <td>{i.date}</td>
      <td><img style={{ borderRadius: "50px", width: "40px" }} src={'../../IMAGES/' + i.reciep.imgpath} />&nbsp;&nbsp;&nbsp;{i.reciep.name}</td>
      <td>{i.reqid}</td>
      <td>{i.issue}</td>
      <td>{i.status === 'Pending' ? <span className='sta'>{i.status}</span> : <span className='stb' >{i.status}</span>}</td>
      <td>
        {i.refstatus === 'Pending' ? <span className='refsta'>{i.refstatus}</span> :
          <span className='refstb'>{i.refstatus}</span>}</td>
    </tr>
  )


  var mainfarma=farma1
  if (window.location.href ==='http://localhost:3000/cashsales'){
    mainfarma=farma2
  }
  else if (window.location.href === 'http://localhost:3000/refunds' || window.location.href === 'http://localhost:3000/voids' ) {
    mainfarma=farma3
  }
  return mainfarma
}

export default TransactionData