import React from 'react'
import './Pagination.scss'
const pdata=[1,2,3,4]
var emparr=[]
const myfun=(t)=>{
    t.forEach(el => {
        document.getElementById(el).removeAttribute("class");        
});
}
function Pagination({}) {
    const chpage =(id)=> { 
        myfun(emparr)     
        document.getElementById(id).setAttribute("class", "nclass");
        emparr.push(id)        
    }
  return (
      <div className='Pagination'>
         <div className='pdata'>
             <img src="../../IMAGES/prevb.svg" alt="" />
             {pdata.map((j,l)=>
                 <div id={"a" + String(l + 1)} onClick={() => chpage("a" + String(l + 1))}>{j}</div>
             )}
              <img src="../../IMAGES/nextb.svg" alt="" />
         </div>
      </div>
  )
}

export default Pagination