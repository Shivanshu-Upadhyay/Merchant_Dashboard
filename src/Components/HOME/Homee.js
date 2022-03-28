import React from 'react'
import './Homee.scss'
import { useState } from 'react'
import { Area, AreaChart, Bar, BarChart, CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { FormControl, FormControlLabel, FormGroup, Switch } from '@mui/material';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import LineChartt from '../LineChartt';
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
const state = {
    labels: ['January', 'February', 'March',
        'April', 'May'],
    datasets: [
        {
            label: 'Rainfall',
            fill: false,
            lineTension: 0.5,
            backgroundColor: 'rgba(75,192,192,1)',
            borderColor: 'rgba(0,0,0,1)',
            borderWidth: 5,
            data: [65, 59, 80, 81, 56]
        }
    ]
}

const transferList = [
    { name: 'Samuel', id: '@sam224' },
    { name: 'Samuel', id: '@sam224' },
    { name: 'Samuel', id: '@sam224' },
    { name: 'Samuel', id: '@sam224' },
    { name: 'Samuel', id: '@sam224' },
]
const transactHistry = [
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

function Homee() {
const [bgurl, setBgurl] = useState("url('../../IMAGES/atmcon.jpg')")
const [atmbg, setAtmbg] = useState({ backgroundImage: bgurl, backgroundSize: "100% 100%" })
const rotatecard = () => {
    if (bgurl === "url('../../IMAGES/atmcon.jpg')") {
        setBgurl("url('../../IMAGES/atmred.jpg')")
        setAtmbg({ backgroundImage: bgurl, backgroundSize: "100% 100%" })

    } else {
        setBgurl("url('../../IMAGES/atmcon.jpg')")
        setAtmbg({ backgroundImage: bgurl, backgroundSize: "100% 100%" })


    }
}

  return (
      <div className='Homee'>
          <div className='dashh' style={{fontWeight:"800"}}>Dashboard</div>
          <div id="item-1" className='item'>
                  <div className='atmCard'>
                      <div className='cardd' style={atmbg}>
                      <div className='a1'>Main Balance</div>
                      <div className='a2'>$673,412.66</div>
                      <div className='a3'><img src='../../IMAGES/atmcir.svg' alt='abc' /> **** **** **** 1234</div>
                      <div className='a4'>
                          <div className='light'>VALID THROUGH<br /><b>8/21</b></div>
                          <div className='boldd'>CARD HOLDER <br /> <b>Franklin Jr.</b></div>
                      </div>
                      </div>
                        <div className='flippcon'>
                        <div className='flipt'></div>
                        <div className='flipb'></div>
                      <div className='flipbtn' onClick={rotatecard}><img src='../../IMAGES/flipbtn.svg' alt='abc' /></div>

                        </div>
                  </div>
                  <div className='limit'>
                  <div className='liquidchart'>
                      <div class="wave"></div>
                      <div><div className='liquiddata'>Limit</div><b style={{ fontSize: "27px" }}>$4,000</b><div style={{ fontSize: "13px", paddingLeft: "20px", color: "grey" }}>&nbsp;&nbsp;/&nbsp;$10,000</div></div>
                  </div>
                  </div>
          </div>
          <div id="item-2" className='item'>
              <div className='lineGraph1'>
                  <div className='inc'>Income</div>
                  <div className='incamt'>$65,123</div>
                  <br />

                  <ResponsiveContainer>
                      <LineChart width={330} height={175} data={data} borderWidth="10px">
                          <Line type="monotone" dataKey="uv" stroke="rgba(65, 198, 255, 1)" width="100"  />
                      </LineChart>
                  </ResponsiveContainer>
              </div>
              <div className='lineGraph2'>
                  <div className='inc'>Outcome</div>
                  <div className='incamt'>$65,123</div>
                  <br/>
                  <ResponsiveContainer>
                      <LineChart width={330} height={175} data={data}>
                          <Line type="monotone" dataKey="uv" stroke="rgba(65, 198, 255, 1)" />
                      </LineChart>
                  </ResponsiveContainer>
              </div>
              <div className='fillGraph'>
                  <ResponsiveContainer width="100%" height="100%">
                      <AreaChart width={200} height={60} data={data}>
                          <Area type="monotone" dataKey="uv" stroke="rgba(30, 170, 231, 1)" fill="rgba(30, 170, 231, 1)" />
                      </AreaChart>
                  </ResponsiveContainer>
              </div>
          </div>
          <div id="item-3" className='item'>
              <div className='gbody'>
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
          <div id="item-4" className='item'>
              <div className='spendAmt'>
                  <h2>Spending</h2>
                  <div><div className='indicator ind1'></div><div>Investment <br /><br />$1,415</div></div>
                  <div><div className='indicator ind2'></div><div>Installment <br /><br />$1,415</div></div>
                  <div><div className='indicator ind3'></div><div>Restaurant <br /><br />$1,415</div></div>
                  <div><div className='indicator ind4'></div><div>Property <br /><br />$1,415</div></div>
              </div>
              <div className='spendProgress'>
                  <div className='spendrow1'>
                      <div className='progressbar ind1'>
                          <div className='pbar'><CircularProgressbar value={20} text={`${20}%`} style={{ backgroundColor: '#3e98c7'}} />;</div>
                          <div className='spendtype'>Investment</div>
                        </div>
                      <div className='progressbar ind2'>
                          <div className='pbar'><CircularProgressbar value={40} text={`${40}%`} />;</div>
                          <div className='spendtype'>Installment</div>
                        </div>
                  </div>
                  <div className='spendrow2'>
                      <div className='progressbar ind3' style={{ border: "1px solid #1EAAE7" }}>
                          <div className='pbar wh'><CircularProgressbar value={70} text={`${70}%`} />;</div>
                          <div className='spendtype' style={{color:"black"}}>Restaurant</div>
                    </div>
                      <div className='progressbar ind4'>
                          <div className='pbar'><CircularProgressbar value={90} text={`${90}%`} />;</div>
                          <div className='spendtype'>Property</div>
                    </div>
                  </div>
              </div>
          </div>
          <div id="item-5" className='item'>
              <div className='r3a'>
                  <div className='r3a1'>
                      <div className='r3a11'>
                          <div style={{ fontSize: "21px", marginBottom: "10px" }}>Quick Transfer</div>
                          <div style={{ fontSize: "13px", color: "rgba(150, 155, 159, 1)" }}>Lorem ipsum dolor sit amet, cosectetur</div>
                      </div>
                      <div className='r3a12'><h1>$56,772.38</h1></div>
                  </div>

                  <div className='r3a2'>
                      {/* <div className='prevbtn'><img src='../../IMAGES/prev.svg' alt='abc' /></div> */}
                      <div className='pcardrow'>
                        {transferList.map((i)=>
                            <div className='pcardAndData'>
                                <div className='pcard'></div>
                                <div className='pdata'>{i.name}<br />{i.id}</div>
                            </div>
                        )}
                      </div>
                      
                      {/* {transferList.map((i) =>
                          <div className='itemm'>
                              <div className='itemTop'></div>
                              <div className='itemBottom'>
                                  <div style={{ marginBottom: "4px", fontSize: "17px" }}><b>{i.name}</b></div>
                                  <div style={{ color: "rgba(159, 159, 159, 1)", fontSize: "13px" }}>{i.id}</div>
                              </div>
                          </div>
                      )} */}
                      {/* <div className='nextbtn'><img src='../../IMAGES/next.svg' alt='abc' /></div> */}
                  </div>




                  <div className='r3a3'>
                      <div>Amount</div>
                      <div className='transcon'>&nbsp;&nbsp;742.2<div className='hding'>TRANSFER NOW</div></div>
                  </div>
              </div>
          </div>
          <div id="item-6" className='item'>
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
      </div>
  )
}

export default Homee