import React from 'react'
import { Line } from 'react-chartjs-2';
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

function LineChartt() {
  return (
      <div>
          <Line
              data={state}
              options={{
                  scales: {
                      xAxes: [{
                          gridLines: {
                              display: false
                          },
                          ticks: {
                              display: false
                          }
                      }],
                      yAxes: [{
                          gridLines: {
                              display: false
                          },
                          ticks: {
                              display: false
                          }
                      }]
                  },
                  title: {
                      display: true,
                      text: 'Average Rainfall per month',
                      fontSize: 20
                  },
                  legend: {
                      display: true,
                      position: 'right'
                  }
              }}
          />
      </div>
  )
}

export default LineChartt