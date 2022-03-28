import React from 'react'
import './Header.scss'

function Header() {
    const sbar = { backgroundImage: "url('../../IMAGES/sbar.jpg')", backgroundSize: "100% 100%" }
    const sweather = { backgroundImage: "url('../../IMAGES/weathercon.jpg')", backgroundSize: "100% 100%" }
    const cloudcon = { backgroundImage: "url('../../IMAGES/cloud&data.jpg')", backgroundSize: "100% 100%" }


  return (
    <div className='Header'>
          <div className='searchbarCon' style={sbar}>
              <img src='../../IMAGES/sicon.svg' alt='abc' />
              <input type="text" placeholder='Search here...' />
          </div>
          <div className='weatherCon' style={sweather}>
              <div className='cn' style={cloudcon}>
                  <img src='../../IMAGES/cloud.svg' alt='abc' />
                  <div className='clouddata'>21<span>o</span></div>
              </div>
              <div className='mdn'>Medan, IDN</div>
          </div>
          <div className='mesAndNotiCon'>
              <div className='noticon'>
                  <img src='../../IMAGES/notiicon.svg' alt='abc' />
              </div>
              <div className='badge'>12</div>
              <div className='mescon'>
                  <img src='../../IMAGES/message.svg' alt='abc' />
              </div>
              <div className='badge'>5</div>
          </div>
          <div className='profileCon'>
              <div className='name'>
                  <div style={{ fontSize: "17px" }}>Hello, <b>Franklin</b></div>
                  <div style={{ fontSize: "13px", color: "rgba(153, 153, 153, 1)" }}>Super Admin</div>
              </div>
              <img src='../../IMAGES/picsvg.svg' alt='abc' />

          </div>
          <div className='settingCon'>
              <div className='set'>
                  <img src='../../IMAGES/set.svg' alt='abc' />
              </div>
          </div>
    </div>
  )
}

export default Header