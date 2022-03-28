
import React, { PureComponent, useState } from 'react'
import {LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { BarChart, Bar, Cell, Legend } from 'recharts';
import { FormGroup } from '@mui/material';
import { FormControlLabel } from '@mui/material';
import { Switch } from '@mui/material';

import './Home.scss'
var xValues = [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000];





function Home() {

  const [bgurl, setBgurl] = useState("url('../../IMAGES/atmcon.jpg')")
  const [atmbg, setAtmbg] = useState({ backgroundImage: bgurl, backgroundSize: "100% 100%" })

  const data = [
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  const [rotat, setRotat] = useState(true)
  const [level, setLevel] = useState(70)
  // setInterval(() => {
  //     setLevel(level<75?level+25:level)
  // }, 100);
  const rotatecard = () => {
    if (bgurl === "url('../../IMAGES/atmcon.jpg')") {
      setBgurl("url('../../IMAGES/atmred.jpg')")
      setAtmbg({ backgroundImage: bgurl, backgroundSize: "100% 100%" })

    }else{
      setBgurl("url('../../IMAGES/atmcon.jpg')")
      setAtmbg({ backgroundImage: bgurl, backgroundSize: "100% 100%" })


    }
  }
  const pcol = { color: 'white' }
  const transferList=[
    { name: 'Samuel', id:'@sam224'},
    { name: 'Samuel', id:'@sam224'},
    { name: 'Samuel', id:'@sam224'},
    { name: 'Samuel', id:'@sam224'},
    { name: 'Samuel', id:'@sam224'},
  ]
  const transactHistry=[
    { 
      icon: { url: '../../IMAGES/greendown.svg', color:'rgba(43, 193, 85, 1)'},
      name: { id:'XYZ Store ID',cashback:'Cashback'},
      timing: { date: 'June 4, 2020', time:'05:34:45 AM'},
      amt:'+$5,553',
      status: { nm: 'Completed', coloor:'rgba(43, 193, 85, 1)'}
    },
    {
      icon: { url: '../../IMAGES/redtop.svg', color: 'rgba(254, 45, 46, 1)' },
      name: { id: 'XYZ Store ID', cashback: 'Cashback' },
      timing: { date: 'June 4, 2020', time: '05:34:45 AM' },
      amt: '+$5,553',
      status: { nm: 'Completed', coloor: 'rgba(254, 148, 70, 1)' }
    },
    {
      icon: { url: '../../IMAGES/greendown.svg', color: 'rgba(43, 193, 85, 1)' },
      name: { id: 'XYZ Store ID', cashback: 'Cashback' },
      timing: { date: 'June 4, 2020', time: '05:34:45 AM' },
      amt: '+$5,553',
      status: { nm: 'Completed', coloor: 'rgba(43, 193, 85, 1)' }
    },
    {
      icon: { url: '../../IMAGES/redtop.svg', color: 'rgba(254, 45, 46, 1)' },
      name: { id: 'XYZ Store ID', cashback: 'Cashback' },
      timing: { date: 'June 4, 2020', time: '05:34:45 AM' },
      amt: '+$5,553',
      status: { nm: 'Completed', coloor: 'rgba(254, 148, 70, 1)' }
    },

  ]

  return (
    <div className='Home'>

      <br /><br /> <br /> 
      <div className='dash'>Dashboard</div>
      <br /><br />
      <div className='row1'>
        <div className='atmcon'>
          <div className='atm' style={atmbg}>
            {rotat && <div id='mycard' className='atmdatacon'>
              <div className='a1'>Main Balance</div>
              <div className='a2'>$673,412.66</div>
              <div className='a3'><img src='../../IMAGES/atmcir.svg' alt='abc' /> **** **** **** 1234</div>
              <div className='a4'>
                <div className='light'>VALID THROUGH<br /><b>8/21</b></div>
                <div className='boldd'>CARD HOLDER <br /> <b>Franklin Jr.</b></div>
              </div>
            </div>}
            {!rotat && <div id='mycard' className='atmdatacon'>
              <div className='a1'>Main Balanceaaaaaaa</div>
              <div className='a2'>$673,412.66</div>
              <div className='a3'><img src='../../IMAGES/atmcir.svg' alt='abc' /> **** **** **** 1234</div>
              <div className='a4'>
                <div className='light'>VALID THROUGH<br /><b>8/21</b></div>
                <div className='boldd'>CARD HOLDER <br /> <b>Franklin Jr.</b></div>
              </div>
            </div>}
          </div>
          <div className='flip'>
            <div className='flipt'></div>
            <div className='flipb'></div>
            <div className='flipbtn' onClick={rotatecard}><img src='../../IMAGES/flipbtn.svg' alt='abc' /></div>
          </div>
        </div>
        <div className='liquidchart'>
          <div class="wave"></div>
          <div><div className='liquiddata'>Limit</div><b style={{ fontSize: "27px" }}>$4,000</b><div style={{ fontSize: "13px", paddingLeft: "20px", color: "grey" }}>&nbsp;&nbsp;/&nbsp;$10,000</div></div>
        </div>
        <div className='linechart'>
          <div className='r1'>
            <div className='cr1'>
              <div style={{ color:"rgba(189, 189, 189, 1)"}}>Income</div>
              <div><h2 style={{marginTop:"8px"}}>$65,123</h2></div>
              <br /><br />
{/*           
                <LineChart width={330} height={175} data={data}>
                  <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                </LineChart> */}
         
            
  
            </div>
            <div className='cr2'>
              <div style={{ color: "rgba(189, 189, 189, 1)" }}>Outcome</div>
              <div><h2 style={{ marginTop: "8px" }}>$24,551</h2></div>
              <br /><br />
           
                           
                <LineChart width={330} height={175} data={data}>
                  <Line type="monotone" dataKey="pv" stroke="#8884d8" />
                </LineChart>
          
      
            </div>
          </div>
          <div className='r2'>
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart width={200} height={60} data={data}>
                <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="rgba(30, 170, 231, 1)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
      <br /><br /><br />
      <div className='row2'>
        <div className='r2a'>
          <div className='ghead'>
            <div className='hcon'>
              <div style={{ fontSize: "21px", paddingBottom: "10px" }}><b>Transaction Overview</b></div>
              <div style={{ fontSize: "14px", color: "rgba(150, 155, 159, 1)" }}>Lorem ipsum dolor sit amet, cosectetur</div>
            </div>
            <div className='rcon'>
              <div className='btnanddot'>
                <div className='btn'><img src='../../IMAGES/down.svg' alt='abc' />&nbsp;&nbsp;&nbsp; Download Report</div>&nbsp;&nbsp;&nbsp;
                <div className='dot'>
                  <img src='../../IMAGES/dot.png' alt='abc' />
                  <img src='../../IMAGES/dot.png' alt='abc' />
                  <img src='../../IMAGES/dot.png' alt='abc' />
                </div>
              </div>
            </div>
          </div>
          <div className='weekday'>
            <ul>
              <li>Sun</li>
              <li>Mon</li>
              <li>Tue</li>
              <li>Wed</li>
              <li>Thu</li>
              <li>Fri</li>
              <li>Sat</li>
            </ul>
          </div>
          <div className='chartcon'>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="pv" fill="#8884d8" />
                <Bar dataKey="uv" fill="#82ca9d" />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className='gfoot'>
            <div className='numandanyl'>
              <div className='inc'>
                <FormGroup>
                  <FormControlLabel control={<Switch defaultChecked />} label="Number" />
                </FormGroup>
              </div>
              <div className='exp'>
                <FormGroup>
                  <FormControlLabel control={<Switch defaultChecked />} label="Analytics" />
                </FormGroup>
              </div>
            </div>
            <div className='incandexp'>
              <div className='inc'><div className='inccir'></div>&nbsp;&nbsp;Income</div>
              <div className='exp'><div className='expcir'></div>&nbsp;&nbsp;Expenses</div>
              <div></div>
            </div>
          </div>
        </div>
        <div className='r2b'>
          <div className='data'>
            <div className='lining'>
              <h2>Spendings</h2>
              <div className='indAndData'>
                <div className='invind  chcol1'></div>
                <div className='invdata'>
                  <div>Investment</div>
                  <span>$1,514</span>
                </div>
              </div>
              <div className='indAndData'>
                <div className='invind chcol2'></div>
                <div className='invdata'>
                  <div>Installment</div>
                  <span>$1,567</span>
                </div>
              </div>
              <div className='indAndData'>
                <div className='invind  chcol3'></div>
                <div className='invdata'>
                  <div>Restaurant</div>
                  <span>$487</span>
                </div>
              </div>
              <div className='indAndData'>
                <div className='invind  chcol4'></div>
                <div className='invdata'>
                  <div>Property</div>
                  <span>$3,890</span>
                </div>
              </div>
            </div>
            <div className='progressbarcon'>
              <div className='invAndInst'></div>
              <div className='restAndProp'></div>
            </div>
          </div>
          <div className='bar'>
            <div className='br1'>
              <div className='chcol1 br'>
                <div>
                
                  <div>Investment</div>
                </div>
                <span></span>

              </div>
              <div className='chcol2 br'>
                <div>
                 
                  <div>Installment</div>
                </div>

              </div>
            </div>                <div className='circular'>
            </div>                <div className='circular'>
            </div>
            <div className='br2'>
              <div className='chcol33 br'>
                <div>
                  
                  {/* <CircularProgress variant='determinate' style={{ color:"rgba(30, 170, 231, 1)"}}  value={level} width='300' height="300" size={80} className="abn" /> */}
                  <div style={{ color: "black" }}>Restaurant</div>
                </div>
              </div>
              <div className='chcol4 br'>
                <div>
                
                  <div>Property</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br /><br /><br />
      <div className='row3'>
        <div className='r3a'>
          <div className='r3a1'>
            <div className='r3a11'>
              <div style={{ fontSize: "21px", marginBottom: "10px" }}>Quick Transfer</div>
              <div style={{ fontSize: "13px", color: "rgba(150, 155, 159, 1)" }}>Lorem ipsum dolor sit amet, cosectetur</div>
            </div>
            <div className='r3a12'><h1>$56,772.38</h1></div>
          </div>
          <div className='r3a2'>
            <div className='prevbtn'><img src='../../IMAGES/prev.svg' alt='abc' /></div>
            {transferList.map((i) =>
              <div className='item'>
                <div className='itemTop'></div>
                <div className='itemBottom'>
                  <div style={{ marginBottom: "4px", fontSize: "17px" }}><b>{i.name}</b></div>
                  <div style={{ color: "rgba(159, 159, 159, 1)", fontSize: "13px" }}>{i.id}</div>
                </div>
              </div>
            )}
            <div className='nextbtn'><img src='../../IMAGES/next.svg' alt='abc' /></div>
          </div>
          <div className='r3a3'>
            <div>Amount</div>
            <div className='transcon'>&nbsp;&nbsp;742.2<div>TRANSFER NOW</div></div>
          </div>
        </div>
        <div className='r3b'>
          <div className='r3bhead'>
            <div>
              <div style={{ paddingBottom: "10px", fontSize: "21px" }}><b>Previous transactions</b></div>
              <div style={{ color: "rgba(150, 155, 159, 1)" }}>Lorem ipsum dolor sit amet, cosectetur</div>
            </div>
            <div className='mwt'><span className='one'>Monthly</span><span className='two'>Weekly</span><span className='three'>Today</span></div>
          </div>
          <br /><br />
          {transactHistry.map((i) =>
            <div className='roow'>
              <div className='col1' style={{ borderColor: i.icon.color }}><img src={i.icon.url} /></div>
              <div className='col2'>
                <div><b>{i.name.id}</b></div>
                <div>{i.name.cashback}</div>
              </div>
              <div className='col3'>
                <div>{i.timing.date}</div>
                <div>{i.timing.time}</div>
              </div>
              <div className='col4'><b>{i.amt}</b></div>
              <div className='col5' style={{ color: i.status.coloor }}>{i.status.nm}</div>
            </div>

          )}
        </div>
      </div>

      <br /><br /><br />
    </div>
  )
}

export default Home