import React, { useState } from 'react'
import './Filterr.scss'

function Filterr({p,tpos,rpos}) {
  const [lgpop,setlgpop]=useState(false)
  const [smpop,setsmpop]=useState(false)
  const bhideshow=(t)=>{
    if (smpop) {
      setsmpop(!smpop)
      setlgpop(!lgpop)
  }else{
        setlgpop(!lgpop)

  }
    }
  const shideshow=(t)=>{
      setsmpop(!smpop)
    }
  return (
      <div className='filterrrr' style={{top:tpos,right:rpos}}>
            <div className='filterrr'>
        <div className='subpop'>
                    {smpop && <div className='hovpopupp'>
              <ul>
                  <li onClick={shideshow,bhideshow}>
                      <span>Compared To</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <img src='../../IMAGES/bidirect.svg' />
                  </li>
                  <li>None</li>
                  <li>Previous Month</li>
                  <li>Previous 3 Month</li>
                  <li>Previous 6 Month</li>
              </ul>
          </div>}
        </div>
          <div className='Filterr'>
      <div className="filt2"  onClick={bhideshow}>
              <div className='filterp1'>
                  <img src='../../IMAGES/dateicon.svg' />
                  <input placeholder='Filter date' />
                  <img src='../../IMAGES/dropiconn.svg'/>
              </div>
            {p && <div className='downAndFilter'><button><img src='../../IMAGES/downbtn.svg' />&nbsp;&nbsp; Download Report</button></div>
}

      </div>
      <div className="filt3">
      {lgpop &&
        <div className='histpopupp'>
              <ul>
                  <li onClick={shideshow}>12:00:00 am - 11:59:59 pm</li>
                  <li>Yesterday 6/3/22 12:00 am - 6/3/22 11:59 pm</li>
                  <li>This Week 7/3/22 12:00 am - 2/3/22 11:59 pm</li>
                  <li>This Month 7/3/22 12:00 am - 7/3/22 11:59 pm</li>
                  <li>This Month 7/3/22 12:00 am - 7/3/22 11:59 pm</li>
                  <li>This Year 7/3/22 12:00 am - 7/3/22 11:59 pm</li>
                  <li>Last Week 7/3/22 12:00 am - 7/3/22 11:59 pm</li>
                  <li>Last Month 7/3/22 12:00 am - 7/3/22 11:59 pm</li>
                  <li>Last Year 1/1/21 12:00 am - 31/12/21 11:59 pm</li>
                  <li>Custo Range</li>
              </ul>
          </div>
          }
      </div>
    </div>
    </div>
      </div>
  )
}

export default Filterr