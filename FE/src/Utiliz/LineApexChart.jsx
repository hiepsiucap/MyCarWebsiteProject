 import React from "react";
import Chart from "react-apexcharts";
 class LineApexChart extends React.Component {
        constructor(props) {
          super(props);

          this.state = {
          
            series: [{
                name: "Desktops",
                 data: [100, 120, 150, 200, 250, 300, 350, 200, 450, 500, 525 , 550]
            }],
            options: {
              chart: {
                height: 350,
                type: 'line',
                zoom: {
                  enabled: false
                }
              },
              dataLabels: {
                enabled: false
              },
              stroke: {
                curve: 'straight'
              },
              title: {
                text: 'lượt đặt xe theo tháng',
                align: 'left'
              },
              grid: {
                row: {
                  colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
                  opacity: 0.5
                },
              },
              xaxis: {
                categories: ["Tháng 1", "Tháng 2", "Tháng 3", "Tháng 4", "Tháng 5", "Tháng 6", "Tháng 7", "Tháng 8","Tháng 9","Tháng 10","Tháng 11","Tháng 12"]
              }
            },
          
          
          };
        }

      

        render() {
          return (
            <div className="app">
        <div className="row">
          <div className="mixed-chart font-manrope">
            <Chart
             options={this.state.options} series={this.state.series} type="line" height={400}   width="800"
            />
          </div>
        </div>
      </div>
          );
        }
      }
export default LineApexChart