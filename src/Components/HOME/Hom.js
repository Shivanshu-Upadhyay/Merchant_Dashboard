import React from 'react'
import './Hom.scss'
import { useState } from 'react'

function Hom() {
const [bgurl, setBgurl] = useState("url('../../IMAGES/atmcon.jpg')")
const [atmbg, setAtmbg] = useState({ backgroundImage: bgurl, backgroundSize: "100% 100%" })
  return (
    <div className='Hom'>
        <div id="item1">
              <div id="atmm" className='atmCard'>
                  <div className='cardd' style={atmbg}></div>
                  <div className='flippcon'>
                      <div className='flipt'></div>
                      <div className='flipb'></div>
                      <div className='flipbtn' ><img src='../../IMAGES/flipbtn.svg' alt='abc' /></div>

                  </div>
              </div>
        </div>
        <div id="item2"></div>
    </div>
  )
}

export default Hom